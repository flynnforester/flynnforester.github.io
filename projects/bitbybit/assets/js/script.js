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
        //     duration: "400%", // the scene should last for a scroll distance of 400% of the height, this will get it to stay in the position
            offset: 300 // start this scene after scrolling for 100px
        })
        .setPin("#mb")
        .setClassToggle("#mb", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s1",
        //    duration: 400, // the scene should last for a scroll distance of 500px
            offset: 400 // start this scene after scrolling for 100px
        })
        .setPin("#cpu")
        .setClassToggle("#cpu", "show") // add class toggle
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#s2",
        //    duration: 400, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
        .setPin("#rams")
        .setClassToggle("#rams", "show") // add class toggle
        .addTo(controller);

      new ScrollMagic.Scene({
            triggerElement: "#s3",
        //    duration: 400, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
          .setPin("#cool")
        .setClassToggle("#cool", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s4",
            duration: 250, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
        .setClassToggle("#inside", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s5",
      //      duration: 250, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
        .setPin("#inside2")
        .setClassToggle("#inside2", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s5",
      //      duration: 250, // the scene should last for a scroll distance of 500px
            offset: 400 // start this scene after scrolling for 100px
        })
        .setPin("#mbt")
        .setClassToggle("#mbt", "show") // add class toggle
        .addTo(controller);
    
     new ScrollMagic.Scene({
            triggerElement: "#s6",
            duration: 125, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
        .setClassToggle("#ssd", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s6",
            duration: 125, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
        .setClassToggle("#hdd", "show") // add class toggle
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#s7",
          //  duration: 125, // the scene should last for a scroll distance of 500px
            offset: 400 // start this scene after scrolling for 100px
        })
        .setPin("#psu")
        .setClassToggle("#psu", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s8",
            duration: 125, // the scene should last for a scroll distance of 500px
            offset: 400 // start this scene after scrolling for 100px
        })
        .setPin("#graphics")
        .setClassToggle("#graphics", "show") // add class toggle
        .addTo(controller);

});
