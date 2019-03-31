let originParam = process.env.NODE_ENV === "development" ? "&origin=*" : "";

const getToken = (context) => {
    return fetch(`http://www.wozzica.com/wiki/api.php?action=query&meta=tokens&format=json`)
    .then(res => res.json())
    .then(res => {
        const token = res.query.tokens.csrftoken;
        context.setState({
            uploadToken: token
        });
        return res;
    });
}

const getData = (context, thingId) => {
    return fetch(`http://www.wozzica.com/wiki/api.php?action=parse&format=json&prop=wikitext&page=${thingId}${originParam}`)
    .then(res => res.json())
    .then(thing => {
        context.setState({
            thingData: { id: thing.parse.title, ...JSON.parse(thing.parse.wikitext["*"]) }
        });
        return thing;
    });
}

const updateAnnotations = (data, callback) => {
    let request = new XMLHttpRequest();
    request.open('POST', 'http://www.wozzica.com/wiki/api.php', true);
    request.setRequestHeader('Content-Disposition', 'form-data');
    let formData = new FormData();
    formData.append('action', 'edit');
    formData.append('title', data.title);
    formData.append('format', 'json');
    formData.append('contentmodel', 'json');
    formData.append('text', JSON.stringify(data.thing));
    formData.append('token', data.token);
    request.send(formData);
    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            if (callback) {
                callback(request);
            }
        }
    }
}

export { getToken, getData, updateAnnotations };