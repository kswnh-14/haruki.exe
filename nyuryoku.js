window.onload = function (){

calcseats();
  
};

function calcseats() {
  const seatsretsu = document.getElementById("retsu").selectedIndex +1;
  const seatsgyo = document.getElementById("gyo").selectedIndex +1;
  const maxseats = seatsgyo * seatsretsu;
  const seatcheck = document.getElementsByName("seatcheck");
  let selectedseats = 0;
  for (let i=0; i<maxseats; i++){
    if (seatcheck[i].checked){
      selectedseats++;
    }
  }

  document.getElementById("selectedseats").innerHTML = selectedseats;
  document.getElementById("maxseats").innerHTML = maxseats;
};
