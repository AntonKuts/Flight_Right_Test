

//  ------js/materialize------

$(document).ready(function(){
    $('ul.tabs').tabs({
      swipeable : true,
      responsiveThreshold : 1920
    });
  });

  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 180, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });

  $(document).ready(function() {
    $('select').material_select();
  });


//  ------js/my------

  $(document).keypress(function (e) {
      if (e.which == 13) {
        document.getElementById("NextStap").click();
      }
  });

let BlueTrain = {};
let RedTrain = {};
let GreenTrain = {};
BlueTrain.direction = RedTrain.direction = GreenTrain.direction = "forward";
let AllTrains = [BlueTrain, RedTrain, GreenTrain];


// -------Start, verification of entered information-------

function Start() {

  BlueTrain.station = document.getElementById('Blue-train-station').value;
  BlueTrain.passengers = Number(document.getElementById('People-blue-train').value);
  RedTrain.station = document.getElementById('Red-train-station').value;
  RedTrain.passengers = Number(document.getElementById('People-red-train').value);
  GreenTrain.station = document.getElementById('Green-train-station').value;
  GreenTrain.passengers = Number(document.getElementById('People-green-train').value);

  if (BlueTrain.station == "" || BlueTrain.passengers == "" || RedTrain.station == "" || RedTrain.passengers  == "" || GreenTrain.station  == ""|| GreenTrain.passengers == "") {
    alert ("You must enter all information")
  } else {
    if (BlueTrain.passengers == RedTrain.passengers ||  GreenTrain.passengers == BlueTrain.passengers || RedTrain.passengers  == GreenTrain.passengers) {
      alert ("Must be a different number of passengers")
    } else {
      if (BlueTrain.station == RedTrain.station ||  RedTrain.station == GreenTrain.station || GreenTrain.station  == BlueTrain.station){
        alert ("Trains must start from different stations")
      } else {
        Position();
        document.getElementById('NextStap').removeAttribute("disabled");
      }
    }
  }
}


// -------Determine the next stop-------

function NextStap(){

    for (var i = 0; i < AllTrains.length; i++) {
      AllTrains[i].previousStation = AllTrains[i].station;
      if (AllTrains[i].direction == "forward") {
        if (AllTrains[i].station == 1){
          AllTrains[i].station = 2;
        }
        else if
        (AllTrains[i].station == 2){
          AllTrains[i].station = "AC";
        }
        else if
        (AllTrains[i].station == "AC"){
          if (AllTrains[i] == BlueTrain){
            AllTrains[i].station = 4;
          }else {
            AllTrains[i].station = "BC";
          }
        }
        else if
        (AllTrains[i].station == 4){
          AllTrains[i].station = "AB";
        }
        else if
        (AllTrains[i].station == "AB"){
          if (AllTrains[i] == BlueTrain){
            AllTrains[i].station = 6;
          } else {
            AllTrains[i].station = 12;
          }
        }
        else if
        (AllTrains[i].station == 6){
          AllTrains[i] .station = 7;
        }
        else if
        (AllTrains[i].station == 7){
          AllTrains[i].station = 6;
          AllTrains[i].direction = "backward";
        }
        else if
        (AllTrains[i].station == 8){
          AllTrains[i].station = 9;
        }
        else if
        (AllTrains[i].station == 9){
          AllTrains[i].station = "BC";
        }
        else if
        (AllTrains[i].station == "BC"){
          if (AllTrains[i] == RedTrain){
            AllTrains[i].station = "AB";
          } else {
            AllTrains[i].station = 18;
          }
        }
        else if
        (AllTrains[i].station == 12){
          AllTrains[i].station = 13;
        }
        else if
        (AllTrains[i].station == 13){
          AllTrains[i].station = 12;
          AllTrains[i].direction = "backward";
        }
        else if
        (AllTrains[i].station == 14){
          AllTrains[i].station = 15;
        }
        else if
        (AllTrains[i].station == 15){
          AllTrains[i].station = "AC";
        }
        else if
        (AllTrains[i].station == 18){
          AllTrains[i].station = 19;
        }
        else if
        (AllTrains[i].station == 19){
          AllTrains[i].station = 18;
          AllTrains[i].direction = "backward";
        }

    } else {

      if (AllTrains[i].station == 1){
        AllTrains[i].station = 2;
        AllTrains[i].direction = "forward";
      }
      else if
      (AllTrains[i].station == 2){
        AllTrains[i].station = 1;
      }
      else if
      (AllTrains[i].station == "AC"){
        if (AllTrains[i] == GreenTrain){
          AllTrains[i].station = 15;
        } else {
          AllTrains[i].station = 2;
        }
      }
      else if
      (AllTrains[i].station == 4){
        AllTrains[i].station  = "AC";
      }
      else if
      (AllTrains[i].station == "AB"){
        if (AllTrains[i] == RedTrain){
          AllTrains[i].station = "BC";
        } else {
          AllTrains[i].station = 4;
        }
      }
      else if
      (AllTrains[i].station == 6){
        AllTrains[i].station = "AB";
      }
      else if
      (AllTrains[i].station == 7){
        AllTrains[i].station = 6;
        AllTrains[i].direction = "backward";
      }
      else if
      (AllTrains[i].station == 8){
        AllTrains[i].station = 9;
        AllTrains[i].direction = "forward";
      }
      else if
      (AllTrains[i].station == 9){
        AllTrains[i].station = 8;
      }
      else if
      (AllTrains[i].station == "BC"){
        if (AllTrains[i] == RedTrain){
          AllTrains[i].station = 9;
        } else {
          AllTrains[i].station = "AC";
        }
      }
      else if
      (AllTrains[i].station== 12){
        AllTrains[i].station = "AB";
      }
      else if
      (AllTrains[i].station == 13){
        AllTrains[i].station = 12;
      }
      else if
      (AllTrains[i].station == 15){
        AllTrains[i].station = 14;
      }
      else if
      (AllTrains[i].station == 14){
        AllTrains[i].station = 15;
        AllTrains[i].direction = "forward";
      }
      else if
      (AllTrains[i].station == 18){
        AllTrains[i].station = "BC";
      }
      else if
      (AllTrains[i].station == 19){
        AllTrains[i].station = 18;
      }
    }
  }
  Control();
}


// -----Check that trains dont occupy one station-----

function Control(){
  if (BlueTrain.station == RedTrain.station || RedTrain.station == GreenTrain.station || GreenTrain.station == BlueTrain.station){
      if (BlueTrain.station == RedTrain.station && BlueTrain.passengers > RedTrain.passengers){
        RedTrain.station = RedTrain.previousStation;
        if (RedTrain.station == GreenTrain.station){
          GreenTrain.station = GreenTrain.previousStation;
        }
      }
      else if
      (BlueTrain.station == RedTrain.station && BlueTrain.passengers < RedTrain.passengers){
        BlueTrain.station = BlueTrain.previousStation;
        if (BlueTrain.station == GreenTrain.station){
          GreenTrain.station = GreenTrain.previousStation;
        }
      }
      if (BlueTrain.station == GreenTrain.station && BlueTrain.passengers > GreenTrain.passengers){
        GreenTrain.station = GreenTrain.previousStation;
        if (GreenTrain.station == RedTrain.station){
          RedTrain.station = RedTrain.previousStation;
        }
      }
      else if
      (BlueTrain.station == GreenTrain.station && BlueTrain.passengers < GreenTrain.passengers){
        BlueTrain.station = BlueTrain.previousStation;
        if (BlueTrain.station == RedTrain.station){
          RedTrain.station = RedTrain.previousStation;
        }
      }

      if (RedTrain.station == GreenTrain.station && RedTrain.passengers > GreenTrain.passengers){
        GreenTrain.station = GreenTrain.previousStation;
        if (GreenTrain.station == BlueTrain.station){
          BlueTrain.station = BlueTrain.previousStation;
        }
      }
      else if
      (RedTrain.station == GreenTrain.station && RedTrain.passengers < GreenTrain.passengers){
        RedTrain.station = RedTrain.previousStation;
        if (RedTrain.station == BlueTrain.station){
          BlueTrain.station = BlueTrain.previousStation;
        }
      }
      Position();
  }else {
      Position();
  }
};

// -----Clear all stations, desing station-----
function Position() {

  let AllStations = document.getElementsByClassName("stop-train");
  for (var i = 0; i < AllStations.length; i++) {
    AllStations[i].style.backgroundColor="white";
    AllStations[i].style.border="1px solid black";
  }

  document.getElementById("station-"+BlueTrain.station).style.backgroundColor="blue";
  document.getElementById("Blue-train-station").options[4].selected = 'true';
  if (BlueTrain.previousStation != BlueTrain.station){
    document.getElementById("station-"+BlueTrain.station).style.border="2px solid black";
  } else {
    document.getElementById("station-"+BlueTrain.station).style.border="2px dotted black";
  }

  document.getElementById("station-"+RedTrain.station).style.backgroundColor="red";
  if (RedTrain.previousStation != RedTrain.station){
    document.getElementById("station-"+RedTrain.station).style.border="2px solid black";
  } else {
    document.getElementById("station-"+RedTrain.station).style.border="2px dotted black";
  }

  document.getElementById("station-"+GreenTrain.station).style.backgroundColor="green";
  if (GreenTrain.previousStation != GreenTrain.station){
    document.getElementById("station-"+GreenTrain.station).style.border="2px solid black";
  } else {
    document.getElementById("station-"+GreenTrain.station).style.border="2px dotted black";
  }
}
