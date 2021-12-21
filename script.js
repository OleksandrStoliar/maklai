button.onclick = function() {
    const a = +document.getElementById('elem1').value,
          b = +document.getElementById('elem2').value,
          operator = document.getElementById('operator').value,
          expresion = [a+b, a-b, a*b, a/b],
          result = Math.round(expresion[operator]);

    if (isNaN(result)) {
        alert('Error: Inputs have to be numbers. Please, try again')
    } else {
        document.getElementById('result').innerHTML = "Result is " + Math.round(expresion[operator]);
    }
};
