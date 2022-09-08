tippy('[tippy-title]', {
    content(reference) {
        const title = reference.getAttribute('tippy-title');
        reference.removeAttribute('tippy-title');
        return title;
    },
    animation: 'shift-away',
    theme: 'seogun',
    arrow: true,
    placement: 'top',
    arrowType: 'round',
    duration: 250,
});
