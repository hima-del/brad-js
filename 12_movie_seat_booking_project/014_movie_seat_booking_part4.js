const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
//save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}
// console.log(movieSelect);
// console.log(movieSelect.value);
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    //console.log(selectedSeats);
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}
//movie select event
movieSelect.addEventListener('change', e => {
        // console.log(e.target);
        // console.log(e.target.value);
        ticketPrice = e.target.value;
        setMovieData(e.target.selectedIndex, e.target.value);
        updateSelectedCount();
    })
    //seat click event
container.addEventListener('click', e => {
    //console.log(e.target);
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});