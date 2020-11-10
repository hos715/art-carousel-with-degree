import $ from 'jquery'


function rotate(target, degree) {
    target.animate({ deg: degree }, {
        duration: 600,
        step: function (now) {
            target.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
};

function toDegrees(angle) {
    return angle * (Math.PI / 180);
}

$(document).ready(function () {
    var container = $(".Art-Carousel").children("li");
    if (container) {
        var i = $(".Art-Carousel").children("li").length;
        i = 360 / i;
        var r = $(".Art-Carousel")[0].clientWidth / 2;
        var Counter = 1;
        for (var t = 0; t < 360; t += i) {
            var x = Math.sin(toDegrees(t)) * r.toFixed(3);
            var y = Math.cos(toDegrees(t)) * r.toFixed(3);
            if ($(".Art-Carousel").find("[tabindex=" + Counter + "]")) {
                var elemr = $(".Art-Carousel").find("[tabindex=" + Counter + "]")[0].clientWidth / 2;
                $("[tabindex=" + Counter + "]").css({
                    "bottom": y + r - elemr + "px",
                    "left": x + r - elemr + "px",
                    "-webkit-transform": "rotate(" + t + "deg)",
                    "-moz-transform": "rotate(" + t + "deg)",
                    "transform": "rotate(" + t + "deg)",
                });
            }
            Counter++
        }
        container.click(function (event) {

            var index = $(event.target).closest("[tabindex]").attr("tabindex");
            rotate($(".Art-Carousel"), (index - 1) * i * -1);
            $(".Art-Carousel").children("li").removeClass("Active");
            $(".Item" + index).addClass("Active");
            var allelem = $(".Animate-Holder").children().not(".Animation" + index);
            allelem.animate({ opacity: '0' });
            $(allelem).children(".Animate-Wrapper").addClass("Outer");
            $(".Animation" + index).animate({ opacity: '1' });
            $(".Animation" + index).children(".Animate-Wrapper").removeClass("Outer");
        });
    }
});