$(function () {

    // init controller
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: "#sw",
            duration: 700, // the scene should last for a scroll distance of 400px
            offset: 300 // start this scene after scrolling for 100px
        })
        .setClassToggle("#table", "show") // add class toggle
        .addTo(controller);

    
    new ScrollMagic.Scene({
            triggerElement: "#s1",
             duration: 2200, // the scene should last for a scroll distance of 400% of the height, this will get it to stay in the position
            offset: 300 // start this scene after scrolling for 100px
        })
        .setPin("#mb", {pushFollowers: false})
        .setClassToggle("#mb", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s1",
            duration: 2100, // the scene should last for a scroll distance of 500px
            offset: 400 // start this scene after scrolling for 100px
        })
        .setPin("#cpu", {pushFollowers: false})
        .setClassToggle("#cpu", "show") // add class toggle
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#s2",
            duration: 1200, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
        .setPin("#rams", {pushFollowers: false})
        .setClassToggle("#rams", "show") // add class toggle
        .addTo(controller);

      new ScrollMagic.Scene({
            triggerElement: "#s3",
            duration: 400, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
          .setPin("#cool", {pushFollowers: false})
        .setClassToggle("#cool", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s4",
            duration: 4400, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
        .setPin("#inside", {pushFollowers: false})
        .setClassToggle("#inside", "show") // add class toggle
        .addTo(controller);
    
     new ScrollMagic.Scene({
            triggerElement: "#s4",
            duration: 200, // the scene should last for a scroll distance of 500px
            offset: 400 // start this scene after scrolling for 100px
        })
        .setPin("#airflow", {pushFollowers: false})
        .setClassToggle("#airflow", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s5",
            duration: 3600, // the scene should last for a scroll distance of 500px
            offset: 100 // start this scene after scrolling for 100px
        })
        .setPin("#mbt", {pushFollowers: false})
        .setClassToggle("#mbt", "show") // add class toggle
        .addTo(controller);
    
     new ScrollMagic.Scene({
            triggerElement: "#s6",
            duration: 2750, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
        .setPin("#ssd", {pushFollowers: false})
        .setClassToggle("#ssd", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s6",
            duration: 300, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
        .setClassToggle("#hdd", "show") // add class toggle
        .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: "#s7",
            duration: 1700, // the scene should last for a scroll distance of 500px
            offset: 300 // start this scene after scrolling for 100px
        })
        
        .setPin("#psu", {pushFollowers: false})
        .setClassToggle("#psu", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s7",
            duration: 250, // the scene should last for a scroll distance of 500px
            offset: 600 // start this scene after scrolling for 100px
        })
        
        .setPin("#connect", {pushFollowers: false})
        .setClassToggle("#connect", "show") // add class toggle
        .addTo(controller);
    
    new ScrollMagic.Scene({
            triggerElement: "#s8",
            duration: 450, // the scene should last for a scroll distance of 500px
            offset: 400 // start this scene after scrolling for 100px
        })
        .setPin("#graphics", {pushFollowers: false})
        .setClassToggle("#graphics", "show") // add class toggle
        .addTo(controller);

});
