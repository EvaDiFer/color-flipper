import './style.css';

const COLOR_PALETTE = {
  '#6A0136': 'Tiryan Purple',
  '#BFAB25': 'Old gold',
  '#B81365': 'Magenta dye',
  '#026C7C': 'Caribbean Current',
  '#055864': 'Midnight green',
  '#D4F2D2': 'Nyanza',
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');
  colorPickerSelect.addEventListener('change', (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    //Le asignamos a nuestro h2 el valor de la clave que hay almacenada en newColor al igual que hemos hecho en la primera función
    colorName.innerText = COLOR_PALETTE[newColor];

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-';
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
