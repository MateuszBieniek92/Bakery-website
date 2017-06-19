$(function () {

//variables 
const mobile = window.matchMedia("screen and (max-width: 750px)");
const sectionTwoPanels = $('.col-6');


    sectionTwoPanels.removeClass('col-12').addClass('col-6');
    console.log(sectionTwoPanels);
    // mobile menu
    if (mobile.matches) {
        sectionTwoPanels.removeClass('col-6').addClass('col-12');
        console.log('te');
    }

});
