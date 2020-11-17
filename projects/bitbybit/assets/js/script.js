$(function () {

    // init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: "#sw",
            duration: "400%", // the scene should last for a scroll distance of 400px
            offset: 20 // start this scene after scrolling for 100px
        })
        .setClassToggle("#table", "show") // add class toggle
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#s1",
            duration: "400%", // the scene should last for a scroll distance of 400% of the height, this will get it to stay in the position
            offset: 20 // start this scene after scrolling for 100px
        })
        .setClassToggle("#mb", "show") // add class toggle
        .addTo(controller);
    

    new ScrollMagic.Scene({
            triggerElement: "#s2",
            duration: 400, // the scene should last for a scroll distance of 500px
            offset: 100 // start this scene after scrolling for 100px
        })
        .setClassToggle("#ram", "show") // add class toggle
        .addTo(controller);


});
