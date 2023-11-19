var navEl = $('.navbar-toggler')
var logo = $('.logo')
var counter = 0


navEl.on('click', function () {
    counter++
    console.log(counter)
    if (counter % 2 == 0) {
        shows()
    } else {
        hides()
    }
});

function hides() {
    logo.hide();
}

function shows() {
    logo.show()
}