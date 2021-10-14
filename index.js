function konwertujTemperature(celsius, decimalPlaces = 1) {
    const fahrenheit = celsius * 1.8 + 32;
    return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(konwertujTemperature(21, 0));
