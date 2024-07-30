
let selectedSeats = 0;
let totalPrice = 0;
function storevalue(ticketType, ticketPrice) {

    const seats = document.querySelectorAll('.s');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (seat.classList.contains('Unselected') || seat.classList.contains('occupied')) {
                return; 
            }
            seat.classList.toggle('selected'); 
            updateSelectionInfo();
        });
    });

   
    function updateSelectionInfo() {

        seats.forEach(seat => {
            if (seat.classList.contains('selected')) {
                selectedSeats = selectedSeats + 1;
                totalPrice += ticketPrice;
            }
        });
        document.getElementById('count').textContent = selectedSeats;
        document.getElementById('total').textContent = totalPrice;
    }
}
 