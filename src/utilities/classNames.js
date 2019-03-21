// Returns a string of class names
const classNames = function(...classNames) {
    const truthyClasses = classNames.filter(x => x);
    return truthyClasses.join(' ');
};

export default classNames;
