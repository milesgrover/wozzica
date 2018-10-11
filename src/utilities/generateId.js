// Returns a unique ID based on RNG and current time, can take a string to add
// Not a true uuid, just for this application
const generateId = function(string = '') {
    return string + Math.random().toString(36).slice(2) + Date.now().toString();
};

export default generateId;
