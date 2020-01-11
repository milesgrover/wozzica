// Unimportant words dictionary
const unimportant =
    ['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'yet', 'so', 'of', 'by',
        'for', 'from', 'as', 'to', 'in', 'at', 'on', 'in', 'with'];


// Extend the String object to have more methods for different capitalization schemes
// sentence case
export const sentencify = function(str, ...exceptions) {
    let string = str.toLowerCase();
    // For proper nouns, you can provide an excepted word and it'll display as you provided
    if (exceptions) {
        exceptions.forEach((x) => {
            let rgx = new RegExp(x.toLowerCase(), 'g');
            string = string.replace(rgx, x);
        });
    }
    return string.replace(/\b(\w)/, (t) => t.toUpperCase());
};

// title case
export const titlify = function(str, un) {
    let tc = str.toLowerCase().replace(/\b(\w)/g, (t) => t.toUpperCase());
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
    }
    return tc;
};

// invert case
export const invertify = function(str) {
    return str.replace(/\w{1}/g, (t) => t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase());
};

// randomize case
export const randomify = function(str) {
    return str.replace(/\w{1}/g, (t) => Math.round(Math.random()) ? t.toLowerCase() : t.toUpperCase());
};