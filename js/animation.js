$(function () {

    //variables 
    const mobile = window.matchMedia("screen and (max-width: 750px)");
    const sectionTwoPanels = $('.col-6');
    const sectionFivePanelLeft = $('.col-3');
    const sectionFivePanelRight = $('.col-9');



    sectionTwoPanels.removeClass('col-12').addClass('col-6');
    sectionFivePanelLeft.removeClass('col-12').addClass('col-3');
    sectionFivePanelRight.removeClass('col-12').addClass('col-9');
    console.log(sectionTwoPanels);
    // mobile menu
    if (mobile.matches) {
        sectionTwoPanels.removeClass('col-6').addClass('col-12');
        sectionFivePanelLeft.removeClass('col-3').addClass('col-12');
        sectionFivePanelRight.removeClass('col-9').addClass('col-12');
    }

});
