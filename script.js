function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const conversionType = document.querySelector('input[name="conversionType"]:checked').value;
  
    if (isNaN(temperatureInput) || temperatureInput === '') {
      alert('Please enter a valid temperature.');
      return;
    }
  
    let result;
    if (conversionType === 'fahrenheitToCelsius') {
      result = ((temperatureInput - 32) * 5) / 9;
      result = result.toFixed(2) + ' °C';
    } else {
      result = (temperatureInput * 9) / 5 + 32;
      result = result.toFixed(2) + ' °F';
    }
  
    document.getElementById('result').innerText = `Result: ${result}`;
  }
  