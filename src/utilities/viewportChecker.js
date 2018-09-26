import debounce from "./debounce"

const viewportChecker = debounce(() => {
    if (window.innerWidth < 576) {
        return 'vp-xs';
    } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        return 'vp-sm';
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        return 'vp-md';
    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        return 'vp-lg';
    } else if (window.innerWidth >= 1200) {
        return 'vp-xl';
    }
}, 250)

export default viewportChecker;
