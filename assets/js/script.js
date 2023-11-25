var togglerEl = $('#toggler');
var count = 0
function rainbowMode(event) {
    count++
    if (count % 2 == 0) {
        location.reload()
    } else {
        new cursoreffects.rainbowCursor();

    }

}

window.onresize = window.onload = function() {
    if ($(window).width() < 600) {
        togglerEl.hide()
    } else {
        togglerEl.show()
    }
}



