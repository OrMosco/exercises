const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}


function checkReservation () {
     const name = document.getElementById("nameInput").value
     const message = document.getElementById('message')

     if (reservations[name]) {
        if (reservations[name].claimed) {
            message.textContent = "Hmm, someone already claimed this reservation."
        } else {
            message.textContent = `Welcome, ${name}!`
            reservations[name].claimed = true
        }
    }else{
     message.textContent = "You have no reservation."
     }

}