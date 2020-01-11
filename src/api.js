import { Base64String } from './utilities/base64-string';
import AddControl from './components/AddControl';

const originParam = process.env.NODE_ENV ? '&origin=*' : '';

export const getToken = (context) => {
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

export const getData = (context, thingId) => {
    return fetch(`http://www.wozzica.com/wiki/api.php?action=parse&format=json&prop=wikitext&page=${thingId}${originParam}`)
    .then(res => res.json())
    .then(thing => {
        const thingParse = JSON.parse(thing.parse.wikitext["*"]);
        if (thingParse.readonlyImage) {
            thingParse.readonlyImage = Base64String.decompressFromUTF16(thingParse.readonlyImage);
        }
        context.setState({
            thingData: { id: thing.parse.title, ...thingParse }
        });
        return thing;
    });
    // const get = () => {
    //     return new Promise((resolve, reject) => {
    //         const request = new XMLHttpRequest();
    //         request.open('GET', `http://www.wozzica.com/wiki/api.php?action=parse&format=json&prop=wikitext&page=${thingId}&origin=*`);
    //         // request.setRequestHeader('Content-Type', 'multipart/form-data');
    //         // request.setRequestHeader('Content-Disposition', 'form-data');
    //         // request.setRequestHeader("Origin", "*");
    //         request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    //         const formData = new FormData();
    //         formData.append('action', 'parse');
    //         formData.append('format', 'json');
    //         formData.append('prop', 'wikitext');
    //         formData.append('page', thingId);
    //         formData.append('contentmodel', 'json');
    //         formData.append('origin', '*')
    //         // if (process.env.NODE_ENV) {
    //         // }
    //         request.onload = () => {
    //             if (request.status >= 200 && request.status < 300) {
    //                 resolve(request.response);
    //             } else {
    //                 reject({
    //                     status: request.status,
    //                     statusText: request.statusText
    //                 });
    //             }
    //         };
    //         request.onerror = function () {
    //             reject({
    //                 status: request.status,
    //                 statusText: request.statusText
    //             });
    //         };
    //         request.send(formData);
    //     });
    // }
    // return get().then(thing => {
    //     const thingParse = JSON.parse(thing);
    //     const dataParse = JSON.parse(thingParse.parse.wikitext['*'])

    //     if (dataParse.readonlyImage) {
    //         dataParse.readonlyImage = Base64String.decompressFromUTF16(dataParse.readonlyImage).replace('dataimage/pngbase64', 'data:image/png;base64,') + '==';
    //     }
    //     context.setState({
    //         thingData: { id: dataParse.title, ...dataParse }
    //     });
    //     return thing;
    // })

}

export const updateThing = (data, callback) => {
    const request = new XMLHttpRequest();
    request.open('POST', 'http://www.wozzica.com/wiki/api.php', true);
    request.setRequestHeader('Content-Disposition', 'form-data');
    const formData = new FormData();
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

export const uploadImage = (token, newName, file, context) => {
    let request = new XMLHttpRequest();
    request.open('POST', 'http://www.wozzica.com/wiki/api.php?format=json&ignorewarnings=1', true);
    let formData = new FormData();
    formData.append('action', 'upload');
    formData.append('filename', newName);
    formData.append('token', token);
    formData.append('file', file);
    request.setRequestHeader('Content-Disposition', 'form-data');
    request.send(formData);
    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            context.setState({
                imageInput: AddControl.InputOptions.complete,
                imageUrl: JSON.parse(request.response).upload.imageinfo.url,
            })
        }
    }
}