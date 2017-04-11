var Easy = {

Model : {
  oldButton : undefined,
  oldValue : undefined,
  arrEasyValues : undefined,
  matchedButtons : undefined
},


View: {
  button1 : {id: "button1", type: "button", value: "", onclick:""},
  button2 : {id: "button2", type: "button", value: "", onclick:""},
  button3 : {id: "button3", type: "button", value: "", onclick:""},
  button4 : {id: "button4", type: "button", value: "", onclick:""},
  button5 : {id: "button5", type: "button", value: "", onclick:""},
  button6 : {id: "button6", type: "button", value: "", onclick:""},
  button7 : {id: "button7", type: "button", value: "", onclick:""},
  button8 : {id: "button8", type: "button", value: "", onclick:""},
  label : {id: "label", type: "label", value: "Click a Cell", onclick:""},
},

Controller: {

buttonHandler : function(that) {
  //
  if (that.id == Easy.oldButton || Easy.checkForPrevMatch(that.id))
 {
    //do nothing
 }

 else if (Easy.oldValue == undefined) {
   Easy.oldValue = that.value;
   that.style.color = "white";
   Easy.oldButton = that.id;
   console.log("Made it visible");
   document.getElementById("label").value = "Click a blank cell";
 }
 //second click same button
  //second time hit with same value with old bottom
 else if (that.value == Easy.oldValue) {
   document.getElementById("label").value = "Found a Match!";
   that.style.color = "white";
   Easy.matchedButtons.push(that.id);
   Easy.matchedButtons.push(Easy.oldButton);
   Easy.oldValue = undefined;
 }
 //second time hit with different
 else {
   document.getElementById("label").value = "Try Again!";
   document.getElementById(Easy.oldButton).style.color = "black";
   Easy.oldValue = undefined;
   //Easy.oldButton = undefined;
 }
}

},


run : function() {
  Easy.createRandomValueForButtom();
  Easy.attachHandlers();
  console.log(Easy.displayAll());
  return Easy.displayAll();
},

displayAll : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>";
  s += Easy.displayElement(Easy.View.button1);
  s += "</td><td>";
  s += Easy.displayElement(Easy.View.button2);
  s += "</td><td>";
  s += Easy.displayElement(Easy.View.button3);
  s += "</td><td>";
  s += Easy.displayElement(Easy.View.button4);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Easy.displayElement(Easy.View.button5);
  s += "</td><td>";
  s += Easy.displayElement(Easy.View.button6);
  s += "</td><td>";
  s += Easy.displayElement(Easy.View.button7);
  s += "</td><td>";
  s += Easy.displayElement(Easy.View.button8);
  s += "</td></tr>";
  s += "<tr><td colspan=\"4\">" + Easy.displayElement(Easy.View.label) + "</td></tr>";
  s += "</table>";
  return s;
},

displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  if (element.type == "button") {
    s += " style=\"background:black\"";
  }
  s += ">";
  return s;

},


shuffle : function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
},

createRandomValueForButtom : function (){

  Easy.arrEasyValues = ["A","A","C","B","B","C","D","D"];
  Easy.shuffle(Easy.arrEasyValues);
  console.log(Easy.arrEasyValues);
  //return arr;
},

attachHandlers : function() {
   for (var i = 1; i <= 8; i++) {
    Easy.View["button" + i].value = Easy.arrEasyValues[i - 1];
     Easy.View["button" + i].onclick ="Easy.Controller.buttonHandler(this)";
   }

   Easy.matchedButtons = [];
},

checkForPrevMatch : function(id)
{
  for(var i = 0; i < Easy.matchedButtons.length; i++)
  {
    if(Easy.matchedButtons[i] == id)
    {
      return true;
    }
  }

  return false;
},
} // end of Easy;

var Middle = {

Model : {
  oldButton : undefined,
  oldValue : undefined,
  arrMiddleValues : undefined,
  matchedButtons : undefined
},


View: {
  button1 : {id: "button1", type: "button", value: "", onclick:""},
  button2 : {id: "button2", type: "button", value: "", onclick:""},
  button3 : {id: "button3", type: "button", value: "", onclick:""},
  button4 : {id: "button4", type: "button", value: "", onclick:""},
  button5 : {id: "button5", type: "button", value: "", onclick:""},
  button6 : {id: "button6", type: "button", value: "", onclick:""},
  button7 : {id: "button7", type: "button", value: "", onclick:""},
  button8 : {id: "button8", type: "button", value: "", onclick:""},
  button9 : {id: "button9", type: "button", value: "", onclick:""},
  button10 : {id: "button10", type: "button", value: "", onclick:""},
  button11 : {id: "button11", type: "button", value: "", onclick:""},
  button12 : {id: "button12", type: "button", value: "", onclick:""},
  button13 : {id: "button13", type: "button", value: "", onclick:""},
  button14 : {id: "button14", type: "button", value: "", onclick:""},
  button15 : {id: "button15", type: "button", value: "", onclick:""},
  button16 : {id: "button16", type: "button", value: "", onclick:""},
  label : {id: "label", type: "label", value: "Click a Cell", onclick:""},
},

Controller: {

buttonHandler : function(that) {
  //Make sure they don't hit the same button twice or a button that has been matched
  if (that.id == Middle.oldButton || Middle.checkForPrevMatch(that.id))
 {
    //do nothing
 }
 else if (Middle.oldValue == undefined) {
   Middle.oldValue = that.value;
   that.style.color = "white";
   Middle.oldButton = that.id;
   console.log("Made it visible");
   document.getElementById("label").value = "Click a blank cell";
 }
 //second click same button

 //second time hit with same value with old bottom
 else if (that.value == Middle.oldValue) {
   document.getElementById("label").value = "Found a Match!";
   that.style.color = "white";
   Middle.matchedButtons.push(that.id);
   Middle.matchedButtons.push(Middle.oldButton);
   Middle.oldValue = undefined;
 }
 //second time hit with different
 else {
   document.getElementById("label").value = "Try Again!";
   document.getElementById(Middle.oldButton).style.color = "black";
   Middle.oldValue = undefined;
   //Middle.oldButton = undefined;
 }
}

},


run : function() {
  Middle.createRandomValueForButtom();
  Middle.attachHandlers();
  console.log(Middle.displayAll());
  return Middle.displayAll();
},

displayAll : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>";
  s += Middle.displayElement(Middle.View.button1);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button2);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button3);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button4);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Middle.displayElement(Middle.View.button5);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button6);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button7);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button8);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Middle.displayElement(Middle.View.button9);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button10);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button11);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button12);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Middle.displayElement(Middle.View.button13);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button14);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button15);
  s += "</td><td>";
  s += Middle.displayElement(Middle.View.button16);
  s += "</td></tr>";
  s += "<tr><td colspan=\"4\">" + Middle.displayElement(Middle.View.label) + "</td></tr>";
  s += "</table>";
  return s;
},

displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  if (element.type == "button") {
    s += " style=\"background:black\"";
  }
  s += ">";
  return s;

},


shuffle : function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
},

createRandomValueForButtom : function (){

  Middle.arrMiddleValues = ["A","A","C","B","B","C","D","D","E","E","F","F","G","G","H","H"];
  Middle.shuffle(Middle.arrMiddleValues);
  console.log(Middle.arrMiddleValues);
  //return arr;
},

attachHandlers : function() {
   for (var i = 1; i <= 16; i++) {
    Middle.View["button" + i].value = Middle.arrMiddleValues[i - 1];
     Middle.View["button" + i].onclick ="Middle.Controller.buttonHandler(this)";
   }

   Middle.matchedButtons = [];
},

checkForPrevMatch : function(id)
{
  for(var i = 0; i < Middle.matchedButtons.length; i++)
  {
    if(Middle.matchedButtons[i] == id)
    {
      return true;
    }
  }

  return false;
},

} // end of Middle;

var Hard = {

Model : {
  oldButton : undefined,
  oldValue : undefined,
  arrHardValues : undefined,
  matchedButtons : undefined
},


View: {
  button1 : {id: "button1", type: "button", value: "", onclick:""},
  button2 : {id: "button2", type: "button", value: "", onclick:""},
  button3 : {id: "button3", type: "button", value: "", onclick:""},
  button4 : {id: "button4", type: "button", value: "", onclick:""},
  button5 : {id: "button5", type: "button", value: "", onclick:""},
  button6 : {id: "button6", type: "button", value: "", onclick:""},
  button7 : {id: "button7", type: "button", value: "", onclick:""},
  button8 : {id: "button8", type: "button", value: "", onclick:""},
  button9 : {id: "button9", type: "button", value: "", onclick:""},
  button10 : {id: "button10", type: "button", value: "", onclick:""},
  button11 : {id: "button11", type: "button", value: "", onclick:""},
  button12 : {id: "button12", type: "button", value: "", onclick:""},
  button13 : {id: "button13", type: "button", value: "", onclick:""},
  button14 : {id: "button14", type: "button", value: "", onclick:""},
  button15 : {id: "button15", type: "button", value: "", onclick:""},
  button16 : {id: "button16", type: "button", value: "", onclick:""},
  button17 : {id: "button17", type: "button", value: "", onclick:""},
  button18 : {id: "button18", type: "button", value: "", onclick:""},
  button19 : {id: "button19", type: "button", value: "", onclick:""},
  button20 : {id: "button20", type: "button", value: "", onclick:""},
  button21 : {id: "button21", type: "button", value: "", onclick:""},
  button22 : {id: "button22", type: "button", value: "", onclick:""},
  button23 : {id: "button23", type: "button", value: "", onclick:""},
  button24 : {id: "button24", type: "button", value: "", onclick:""},
  button25 : {id: "button25", type: "button", value: "", onclick:""},
  button26 : {id: "button26", type: "button", value: "", onclick:""},
  button27 : {id: "button27", type: "button", value: "", onclick:""},
  button28 : {id: "button28", type: "button", value: "", onclick:""},
  button29 : {id: "button29", type: "button", value: "", onclick:""},
  button30 : {id: "button30", type: "button", value: "", onclick:""},
  button31 : {id: "button31", type: "button", value: "", onclick:""},
  button32 : {id: "button32", type: "button", value: "", onclick:""},
  button33 : {id: "button33", type: "button", value: "", onclick:""},
  button34 : {id: "button34", type: "button", value: "", onclick:""},
  button35 : {id: "button35", type: "button", value: "", onclick:""},
  button36 : {id: "button36", type: "button", value: "", onclick:""},
  label : {id: "label", type: "label", value: "Click a Cell", onclick:""},
},

Controller: {

buttonHandler : function(that) {
  //Make sure they don't click the same button twice or one that has already been matched
 if (that.id == Hard.oldButton || Hard.checkForPrevMatch(that.id))
 {
    //do nothing
 }
 //1st click of a new pair
 else if (Hard.oldValue == undefined)
 {
   Hard.oldValue = that.value;
   that.style.color = "white";
   Hard.oldButton = that.id;
   console.log("Made it visible");
   document.getElementById("label").value = "Click a blank cell";
 }
 //second time hit with same value with old bottom
 else if (that.value == Hard.oldValue) {
   document.getElementById("label").value = "Found a Match!";
   that.style.color = "white";
   Hard.matchedButtons.push(that.id);
   Hard.matchedButtons.push(Hard.oldButton);
   Hard.oldValue = undefined;
 }
 //second time hit with different
 else {
   document.getElementById("label").value = "Try Again!";
   document.getElementById(Hard.oldButton).style.color = "black";
   Hard.oldValue = undefined;
   //Hard.oldButton = undefined;
 }
}

},


run : function() {
  Hard.createRandomValueForButtom();
  Hard.attachHandlers();
  console.log(Hard.displayAll());
  return Hard.displayAll();
},

displayAll : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"

  for(var i = 1; i <= 36; i++)
  {
    if(i % 6 == 1)
    {
      s += "<tr><td>";
    }

    s += Hard.displayElement(Hard.View["button" + i]);

    if(i % 6 == 0)
    {
      s += "</td></tr>";
    }
    else
    {
      s += "</td><td>";
    }
  }
  // s += "<tr><td>";
  // s += Hard.displayElement(Hard.View.button1);
  // s += "</td><td>";
  // s += Hard.displayElement(Hard.View.button2);
  // s += "</td><td>";
  // s += Hard.displayElement(Hard.View.button3);
  // s += "</td><td>";
  // s += Hard.displayElement(Hard.View.button4);
  // s += "</td></tr>";
  // s += "<tr><td>";
  // s += Hard.displayElement(Hard.View.button5);
  // s += "</td><td>";
  // s += Hard.displayElement(Hard.View.button6);
  // s += "</td><td>";
  // s += Hard.displayElement(Hard.View.button7);
  // s += "</td><td>";
  // s += Hard.displayElement(Hard.View.button8);
  // s += "</td></tr>";
  s += "<tr><td colspan=\"4\">" + Hard.displayElement(Hard.View.label) + "</td></tr>";
  s += "</table>";
  return s;
},

displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  if (element.type == "button") {
    s += " style=\"background:black\"";
  }
  s += ">";
  return s;

},


shuffle : function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
},

createRandomValueForButtom : function (){

  //Define the array
  Hard.arrHardValues = [];

  //Fill the array with random values from 10-99 in pairs
  for(var i = 0; i < 36; i += 2)
  {
    var value = Math.floor(Math.random() * 99) + 1;
    if(value < 10)
    {
      value += 10;
    }
    Hard.arrHardValues[i] = value;
    Hard.arrHardValues[i + 1] = value;
  }
  Hard.shuffle(Hard.arrHardValues);
  console.log(Hard.arrHardValues);
  //return arr;
},

attachHandlers : function() {
   for (var i = 1; i <= 36; i++) {
    Hard.View["button" + i].value = Hard.arrHardValues[i - 1];
     Hard.View["button" + i].onclick ="Hard.Controller.buttonHandler(this)";
   }

   //initialize matched array
   Hard.matchedButtons = [];
},

checkForPrevMatch : function(id)
{
  for(var i = 0; i < Hard.matchedButtons.length; i++)
  {
    if(Hard.matchedButtons[i] == id)
    {
      return true;
    }
  }

  return false;
},

} // end of Hard
