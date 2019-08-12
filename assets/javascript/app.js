$(document).ready(function() {

    // Firebase
    const firebaseConfig = {
 apiKey: "AIzaSyArTLRiWO4GOhh6_KV423xkPIsSOA9uKJQ",
 authDomain: "amills3-2999f.firebaseapp.com",
 databaseURL: "https://amills3-2999f.firebaseio.com",
 projectId: "amills3-2999f",
 storageBucket: "",
 messagingSenderId: "300716488689",
 appId: "1:300716488689:web:95799a4f551ea457"
};

})

// Button click
$("#addTrain").on("click", function (event) {
    event.preventDefault();

// Grabbing values
var trainName = $("#name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var freq = $("#frequency").val().trim();

// Firebase push
database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: freq

  });
});

// Firebase watch
database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());

// New variables
var name = childSnapshot.val().name;
var destination = childSnapshot.val().destination;
var time = childSnapshot.val().time;
var frequency = childSnapshot.val().frequency;

// Moments JS
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("Current Time: " + moment(currentTime).format("hh:mm"));

// Difference between times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("Difference in Time: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minutes Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("Minutes Until Train: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("Arrival Time: " + moment(nextTrain).format("hh:mm"));

// Add data
$("#schedule").prepend("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + time + "</td><td>" + frequency + "</td><td>");

})


