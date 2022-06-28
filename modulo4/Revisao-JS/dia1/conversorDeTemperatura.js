
const convertCelsius = (temperature, scale) => {
    if(scale === "F"){
        const temperatureFahrenheit = (temperature * 9 / 5) + 32
       return `${temperature}° Celsius é equivalente a ${temperatureFahrenheit}° Farenheit.`;

    } else if (scale === "K") {
    const temperatureKelvin = temperature + 273.15;
    return `${temperature}° Celsius é equivalente a ${temperatureKelvin} Kelvin.`;

} else {
   return `Erro. Parâmetro inválido (${scale}).`;

}
};

console.log(convertCelsius(30, "F"))