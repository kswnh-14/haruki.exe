window.onload = function (){

dispseats();
calcseats();

};

//席数の計算
function calcseats() {
  const seatsretsu = document.getElementById("retsu").selectedIndex +1;
  const seatsgyo = document.getElementById("gyo").selectedIndex +1;

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


//席の生成
function dispseats() {
  const seatsretsu = document.getElementById("retsu").selectedIndex +1;
  const seatsgyo = document.getElementById("gyo").selectedIndex +1;
  const maxseats = seatsgyo * seatsretsu;

  var table = document.getElementById("seatArrange");
  table.innerHTML = "";

  var tbl = document.createElement("ul");
    tbl.setAttribute("class","seatTable")
  for(let n=1; n<=seatsgyo; n++) {
    var row = document.createElement("li");
      row.setAttribute("class","row");
    var ul = document.createElement("ul");

    for(let m=1; m<=seatsretsu; m++) {
      var li = document.createElement("li");
        li.setAttribute("class","seatdata");
      var input = document.createElement("input");
        input.setAttribute("type","checkbox");
        input.setAttribute("name","seatcheck");
        input.setAttribute("onchange","calcseats();");
        input.setAttribute("id","r"+n+"g"+m);
        input.checked = true;
      var label = document.createElement("label");
        label.setAttribute("for","r"+n+"g"+m);
      li.appendChild(input);
      li.appendChild(label);
      ul.appendChild(li);
    }
    row.appendChild(ul);
    tbl.appendChild(row);
  }
  table.appendChild(tbl);
  console.log(tbl);
};
