// Unimportant words dictionary
const unimportant =
    ['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'yet', 'so', 'of', 'by',
        'for', 'from', 'as', 'to', 'in', 'at', 'on', 'in', 'with'];


// Extend the String object to have more methods for different capitalization schemes
// sentence case
const sentencify = function(...exceptions) {
    let string = this.toLowerCase();
    // For proper nouns, you can provide an excepted word and it'll display as you provided
    if (exceptions) {
        exceptions.forEach((x) => {
            let rgx = new RegExp(x.toLowerCase(), 'g');
            console.log(rgx)
            string = string.replace(rgx, x);
        });
    }
    return string.replace(/\b(\w)/, (t) => t.toUpperCase());
};

// title case
const titlify = function(un) {
    let tc = this.toLowerCase().replace(/\b(\w)/g, (t) => t.toUpperCase());
    // For unimportant words, pass true to the function and it will leave them lowercase
    // (unless they're first or last)
    if (un) {
        let mw = tc.replace(/^\w+|[\w\?\.\!]+$/g, '');
        let mwArr = mw.split(' ');
        for (let i = 0; i < mwArr.length; i++) {
            for (let j = 0; j < unimportant.length; j++) {
                if (mwArr[i].toLowerCase() === unimportant[j]) {
                    mwArr.splice(i, 1, unimportant[j]);
                }
            }
        }
        tc = tc.replace(mw, mwArr.join(' '));
        console.log(tc, mwArr.join(' '))
    }
    return tc;
};

// invert case
const invertify = function() {
    return this.replace(/\w{1}/g, (t) => t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase());
};

// randomize case
const randomify = function() {
    return this.replace(/\w{1}/g, (t) => Math.round(Math.random()) ? t.toLowerCase() : t.toUpperCase());
};


Object.defineProperty(String.prototype, 'toSentenceCase', {
    value: sentencify
});
Object.defineProperty(String.prototype, 'toTitleCase', {
    value: titlify
});
Object.defineProperty(String.prototype, 'toInvertedCase', {
    value: invertify
});
Object.defineProperty(String.prototype, 'toRandomCase', {
    value: randomify
});
