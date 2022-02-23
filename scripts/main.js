var lightLevel = "";

if ('AmbientLightSensor' in window) {
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
}