$(function() {
     let colors = ["seagreen", "coral", "darkgreen", "gold", "violet"];
        let i = 0;

        $(".circle").click(function() {
                $(this).toggleClass("dropshadow off");
                $(this).css("background-color", colors[i]);

                if (i >= colors.length - 1) {
                        i = 0;
                } else {
                        i++;
                }
        });
});