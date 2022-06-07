// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state, mode) {
  if (mode[0]) {
    if (location === "A") {
      mode[0] = false;
      return "RIGHT";
    } else {
      if (location === "B") {
        mode[0] = false;
        return "LEFT";
      }
    }
  } else {
    if (state === "DIRTY") {
      mode[0] = true;
      return "CLEAN";
    } else {
      if (state === "CLEAN") {
        mode[0] = true;
        return "DIRTY";
      }
    }
  }
}
  
function test(states) {
  var action, location, mode, state;
  var mode = [false];

  while (cont != 8) {
    location = states[0];
    state = states[0] == "A" ? states[1] : states[2];
    action = reflex_agent(location, state, mode);

    if (action === "CLEAN") {
      if (location === "A") {
        states[1] = "CLEAN";
      } else {
        if (location === "B") {
          states[2] = "CLEAN";
        }
      }
    } else {
      if (action === "DIRTY") {
        if (location === "A") {
          states[1] = "DIRTY";
        } else {
          if (location === "B") {
            states[2] = "DIRTY";
          }
        }
      } else {
        if (action === "RIGHT") {
          states[0] = "B";
        } else {
          if (action === "LEFT") {
            states[0] = "A";
          }
        }
      }
    }

    document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action).concat(" | Current_status:").concat(states);
    
    setTimeout(function(){ test(states) }, 2000);
    cont = cont + 1;
  }
}
  
  var states = ["A","DIRTY","DIRTY"];
  var cont = 0;
  test(states);