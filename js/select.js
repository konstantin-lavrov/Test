document.addEventListener('DOMContentLoaded', function () {
  const element = document.querySelector('#customSelect');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    placeholder: true,
    choices: [{
        value: 'Option 1',
        label: '1980',
        selected: false,
        disabled: false,
      },
      {
        value: 'Option 2',
        label: '1981',
        selected: false,
        disabled: false,
      },
      {
        value: 'Option 3',
        label: '1982',
        selected: false,
        disabled: false,
      },
      {
        value: 'Option 4',
        label: '1983',
        selected: false,
        disabled: false,
      },
      {
        value: 'Option 5',
        label: '1984',
        selected: false,
        disabled: false,
      },
      {
        value: 'Option 6',
        label: '1985',
        selected: false,
        disabled: false,
      },
      {
        value: 'Option 7',
        label: '1986',
        selected: false,
        disabled: false,
      },
      {
        value: 'Option 8',
        label: '1987',
        selected: false,
        disabled: false,
      },
    ]
  });

})
