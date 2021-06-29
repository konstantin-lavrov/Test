var nonLinearStepSlider = document.getElementById('slider-non-linear-step');
noUiSlider.create(nonLinearStepSlider, {
  start: [0, 50],
  step: 25,
  connect: true,
  snap: true,
  range: {
    'min': 0,
    '25%': 25,
    '50%': 50,
    'max': 100
  }
});

var origins = slider.getElementsByClassName('noUi-origin');
origins[0].setAttribute('disabled', true);

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
