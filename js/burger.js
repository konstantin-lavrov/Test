window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu-mobile').classList.toggle('is-visible')
    document.querySelector('#burger-span').classList.toggle('burger-close')
    document.querySelector('#burger-span').classList.toggle('burger-button')
  })

})
