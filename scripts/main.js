var lightLevel = "";

window.addEventListener('devicelight', (event) => {
    console.log('CurrentLightLevel: ', event,value);
    lightLevel = event.value;
    document.querySelector("#lightlevel").innerHTML = lightLevel;
});

const sensor = new AmbientLightSensor();
sensor.addEventListener('reading', event => {
    console.log('CurrentLightLevel: ', sensor.illuminance);
    lightLevel = sensor.illuminance;
    document.querySelector("#lightlevel").innerHTML = lightLevel;
});
sensor.addEventListener('error', event => {
    console.log(event.error.name, event.error.message);
});

sensor.start();
