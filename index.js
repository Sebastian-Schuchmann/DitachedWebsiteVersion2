function playAnimation() {
    console.log("animate");
    document.getElementById('SendAnimation').play();
}

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    relativeInput: true
});

var scene = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene, {
    relativeInput: true
});

// get the element to animate
var element = document.getElementById('lottie1');
var elementHeight = element.clientHeight;
var logoanimation = document.getElementById('logoanimation');

logoanimation.play();
logonoschriftanimation.play();


// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView(element) {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;

    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
        return true;
    }

    return false;
}

// animate element when it is in view
function animate() {
    // is element in view?

    document.querySelectorAll('lottie-player').forEach((element) => {
        if (inView(element)) {
            element.play();
        }


    });

}

var form = document.querySelector('.pageclip-form')
Pageclip.form(form, {
  onSubmit: function (event) {location.href = 'thankyou.html';},
  onResponse: function (error, response) {location.href = 'thankyou.html'; },
  successTemplate: '<span>Thank you!</span>'
})