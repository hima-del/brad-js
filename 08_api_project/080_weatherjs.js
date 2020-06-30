//init weather object
const weather = new weather('Boston', 'MA');
//init ui
const ui = new UI();
//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
    weather.getWeather()
        .then(results => {
            // console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err));
}