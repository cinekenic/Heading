const slider = tns({
    container: '#boxes_slider',
    items: 3,   
    slideBy: 1,
    nav: false,
    controlsText: false,
    arrowKeys: true,
    gutter: 20,
    controlsText: ['<', '>'],
    responsive: {
        100: {
            items: 1,
        },
        800: {
            items: 2
        },
        1190: {
            items: 3
        },
      }
});




