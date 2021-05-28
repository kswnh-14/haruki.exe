window.onload = function (){

calcseats();
dispseats();

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

function dispseats() {
  const seatsretsu = document.getElementById("retsu").selectedIndex +1;
  const seatsgyo = document.getElementById("gyo").selectedIndex +1;
  const seatArrange = getElementById("seatArrange");
  let m = 1;
  for(let i=1; i<seatgyo; i++) {
    const ul = document.creatrElement("ul");
    for(let n=1; i<seatretsu; i++) {
      m++;
      const li = document.createElement("li");
      li.innerHTML='<input type="checkbox" name="seatcheck" id="s'+m+'" checked onchange="calcseats();">';
      ul.appendChild("li");
    }
    seatArrange.appendChild("ul");
  }
};
