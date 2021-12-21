
button.onclick = function() {
    const a = +document.getElementById('elem1').value,
          b = +document.getElementById('elem2').value,
          operator = document.getElementById('operator').value,
          expresion = [a+b, a-b, a*b, a/b];

    document.getElementById('result').innerHTML = "Result is " + Math.round(expresion[operator]);
};
