class Weather {
    constructor(city, state) {
            this.apiKey = 'f842a7ea038717c0c1bcf00e66f74477';
            this.city = city;
            this.state = state;
        }
        //fetch weather from api
    async getWeather() {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);
            const responseData = await response.json();
            return responseData.weather;
        }
        // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}