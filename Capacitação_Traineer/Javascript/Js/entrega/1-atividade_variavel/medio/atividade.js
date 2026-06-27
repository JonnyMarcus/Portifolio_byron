
function toCelsius(f) {
   const fahreNum = Number(c)
    if (Number.isNaN( fahreNum)) {
    throw new TypeError('valor inválida');
  }
    f = ((f-32)*5)/9;
   return f; 
}

function toFahrenheit(c) {
    const celsiousNum = Number(c)
    if (Number.isNaN(celsiousNum)) {
    throw new TypeError('valor inválida');
  }
    c = (c * 9/5) +32;

    return c;
}

module.exports={toCelsius, toFahrenheit};