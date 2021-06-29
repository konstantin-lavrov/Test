document.addEventListener('DOMContentLoaded', function () {
  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");

  im.mask(selector);

  new window.JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 48
      },
      country: {
        required: true,
        minLength: 3,
        maxLength: 40
      },
      tel: {
        required: true
      },
      email: {
        required: true
      }
    },
    messages: {
      name: 'Как вас зовут?',
      country: 'Укажите ваш адрес',
      tel: 'Укажите ваш Skype',
      email: 'Укажите ваш email'
    },

  });

  new JustValidate('.js-form', {
    rules: {
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      }
    },
    messages: {
      name: 'Как вас зовут?',
      tel: 'Укажите ваш номер Skype',
      email: 'Укажите ваш email'
    },
  })
})
