//Conversion functions take a value and return the converted value following the conversion formula
function createConversionFunction(fromUnit, toUnit) {
    const conversionFunctions = {
        lbToKg: value => (value * 0.45359237).toFixed(2),
        kgToLb: value => (value / 0.45359237).toFixed(2),
        milesToKm: value => (value * 1.609344).toFixed(2),
        kmToMiles: value => (value / 1.609344).toFixed(2),
        cToF: value => (value * 9 / 5 + 32).toFixed(2),
        fToC: value => ((value - 32) * 5 / 9).toFixed(2)
    };
    return conversionFunctions[`${fromUnit}To${toUnit}`];
}

//Event listeners for the conversion buttons
function convertWeight() {
    //Get the input value and conversion type
    const input = document.getElementById('weightInput').value.split(',').map(Number);
    //Get the conversion type
    const conversionType = document.getElementById('weightConversionType').value;
    //Split the conversion type into the from and to units
    const [fromUnit, toUnit] = conversionType.split('To');
    //Create a conversion function
    const convert = createConversionFunction(fromUnit, toUnit);
    //Convert each value in the input array and join them with a comma
    const result = input.map(convert).join(', ');
    //Set the result value to the result
    document.getElementById('weightResult').value = result;
}

function convertDistance() {
    const input = document.getElementById('distanceInput').value.split(',').map(Number);
    const conversionType = document.getElementById('distanceConversionType').value;
    const [fromUnit, toUnit] = conversionType.split('To');

    const convert = createConversionFunction(fromUnit, toUnit);
    const result = input.map(convert).join(', ');
    document.getElementById('distanceResult').value = result;
}

function convertTemperature() {
    const input = document.getElementById('temperatureInput').value.split(',').map(Number);
    const conversionType = document.getElementById('temperatureConversionType').value;
    const [fromUnit, toUnit] = conversionType.split('To');

    const convert = createConversionFunction(fromUnit, toUnit);
    const result = input.map(convert).join(', ');
    document.getElementById('temperatureResult').value = result;
}

function showTab(tab) {
    document.querySelectorAll('.tab').forEach(el => el.classList.add('hidden'));
    document.getElementById(tab).classList.remove('hidden');
}
