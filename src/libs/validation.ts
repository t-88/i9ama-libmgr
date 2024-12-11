
function validate_inputNotEmpty(text: string) {
    return text.length != 0;
  }
  function validate_inputNumber(text : string) {
    var pattern = /^\d+\.?\d*$/;
    return pattern.test(text);  // returns a boolean
  }
  function validate_noComma(text : string) { 
    return !text.includes(",");
  }

  
export  {
    validate_inputNotEmpty,
    validate_noComma,
    validate_inputNumber
}