const getInputValueById = function (id) {
  const input = document.getElementById(id).value;
  const inputValue = parseFloat(input);
  return inputValue;
};

const getTextValueById = function (id) {
  const text = document.getElementById(id).innerText;
  const textValue = parseFloat(text);
  return textValue;
};
