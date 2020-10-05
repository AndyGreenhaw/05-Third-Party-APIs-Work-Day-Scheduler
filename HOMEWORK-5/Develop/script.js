///////////////////////////
// ESTABLISH CURRENT DAY //
///////////////////////////

// Generate Today //
todayDate = $("#currentDay");
var todayDate = dayjs().format("YYYY, MM, DD")
var todayHour = dayjs().format("YYYY, MM, DDT16:00:00.000Z")

/////////////////////////////////
// ESTABLISH VARIABLES IN HTML //
/////////////////////////////////

// Linking to Tags in HTML //
var containerDiv = $(".containerDiv")
var timeBlockDiv = $(".timeBlock");
var divRowDiv = $(".row");
var hourDiv = $(".hour");
var textAreaDiv = $(".description");
var saveButton = $(".saveBtn");

/////////////////////////////////
// CREATING ELEMENTS
/////////////////////////////////
var pTag = $("<p>");
var divEl = $("<div>");
var textEl = $("<textarea>");
var saveEl = $("<button>")

//////////////////////
// TIME BLOCK OBJECT //
//////////////////////

timeBlockObject = {
    hour : "",
    description : "",
    saveBtn : "",
    textInput : "",
    saveBtn : ""
}

//////////////////////
// GENERATE 24 HOURS //
//////////////////////

var allHours = [];
console.log(allHours)

create24hours();

function create24hours(){
    // Set Daily Hours and AM/PM Variables 

        // Loop 24 Times
        for ( var i=0 ; i<24 ; i++ ){
    
        //Determine AM or PM
        var amPM;
        if (i < 11){
            amPM = "am";
            } else if (i >= 12) {
            amPM = "pm";
            };
        // Reset to 1 After 12
        if (i > 11){
            h = (i -12);
            } else {
            h = i;
            }

        //Add Context to Each Time Stamp and Push to dailyHours Array
        dailyHour = (h+1) + ":00 " + amPM;
        console.log(dailyHour)
        allHours.push(dailyHour);
         
    };
        
    generateTimeBlocks();
};


/////////////////////////////////
// GENERATE 24 TIME BLOCKS //
/////////////////////////////////

function generateTimeBlocks(){

    //Loop Hour Array to Generate 24 Time Blocks
    for (var i = 0; i < allHours.length ; i++){
    
    // NEW TIME BLOCK DIV
    var newTimeBlock = $("<div>");
    newTimeBlock.attr("class", "time-block");
    containerDiv.append(newTimeBlock);

    // NEW ROW DIV
    var newRow = $("<div>");
    newRow.attr("class", "row");
    newTimeBlock.append(newRow);

    // NEW HOUR DIV
    var newHour = $("<div class='hour'>" + allHours[i] + "</div>");
    console.log("Hours: " + newHour)
    newRow.append(newHour);

    // NEW TEXTAREA DIV
    var newTextArea = $("<textarea>");
    newTextArea.attr("class", "description")
    newHour.append(newTextArea);
    
    // NEW BUTTON DIV
    var newSave = $("<button>");
    newSave.attr("class", "saveBtn");
    newTextArea.append(newSave);

    };

};



// var allHours = ["12:00 am", "1:00 am", "2:00 am", "3:00 am", "4:00 am", "5:00 am", "6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm"];


// function create24hours(){
//   // Set Daily Hours

//     // Loop 24 Times
//     for ( var i=0 ; i<24 ; i++ ){
      
//     //Add Context to Each Time Stamp and Push to dailyHours Array
//     dailyHour = ((h+1) + ":00 " + amPM);
//     allHours.push(dailyHour);
//     };

//     console.log(allHours)
  
// };






// Generate Function from DayJS that Generates 24-Hour Array//
// Pull from Array to Generate 24 Time Blocks
// Create Click Events on Each Block Assigned to Objects
// Create Save Button that Sends Objects to Storage
// Create a Render Function that Rerenders the Timeblocks whenever it's saved.
// Create a function for Before-and-After Color Functions Based on the DayJS and Object



// Generate 24 Time Blocks
//

//
// 1) Create Function to Render the State of the Array or List
// 2) Create Function that Adds New ToDo to List
// 3) Create addEventListener to Add ToDo When Submit //!!"Clicked",
// 4) Make sure to send new Items through Render Function
// 5) Create Function to Send Rendered Items to Storage
// 6) Create Function that Gets Items from Storage
// 7) Add Buttons that Eliminate Box When Its Complete - during render




///////////////////////
// GENERATE 24 HOURS // Note: I tried making a function for this but failed. (See Below Code)
///////////////////////
//var allHours = ["12:00 am", "1:00 am", "2:00 am", "3:00 am", "4:00 am", "5:00 am", "6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm"];

// CREATE 24 HOURS //    
// function create24hours(){
//     // Set Daily Hours and AM/PM Variables 
    
//         // Loop 24 Times
//         for ( var i=0 ; i<24 ; i++ ){
//         // Determine AM or PM
//         if (i < 11){
//             amPM = "am";
//             } else if (i >= 12) {
//             amPM = "pm";
//             };
//         // Reset to 1 After 12
//         if (i > 11){
//             h = (i -12);
//             } else {
//             h = i;
//             }
    
//         //Add Context to Each Time Stamp and Push to dailyHours Array
//         dailyHour = ((h+1) + ":00 " + amPM);
//         allHours.push(dailyHour);
//         };
//         console.log(allHours)
//         generateContainer()
    
//     };






// /////////////////////////////////
// // 24-HOURS ARRAY //
// /////////////////////////////////
// allHours = ["Hour1", "Hour2", "Hour3", "Hour4", "Hour5", "Hour6", "Hour7", "Hour8", "Hour9", "Hour10", "Hour11", "Hour12", "Hour13", "Hour14", "Hour15", "Hour16", "Hour17", "Hour18", "Hour19", "Hour20", "Hour21", "Hour22", "Hour23", "Hour24"];
// console.log(allHours.length)

// var hourEl;





// ////////////////////////
// // GENERATE TIME STAMPS //
// ////////////////////////

// for( i=0 ; i<24 ; i++){

// };


// allHours.forEach(function(dailyHour){
// hourButton = $("<button class='hour'>");
// hourButton.text(dailyHour);

// })




//colDiv.append("rowDiv").addClass("row");
//$("rowDiv").append("Why won't this work?");








// // CREATE 24 HOURS //
// if (allHours.length < 24){
// create24hours()
// };

// function create24hours(){
//   // Set Daily Hours and AM/PM Variables 

//     // Loop 24 Times
//     for ( var i=0 ; i<24 ; i++ ){
//       // Determine AM or PM
//       if (i < 11){
//         amPM = "am";
//         } else if (i >= 12) {
//           amPM = "pm";
//         };
//       // Reset to 1 After 12
//       if (i > 11){
//         h = (i -12);
//         } else {
//           h = i;
//         }

//     //Add Context to Each Time Stamp and Push to dailyHours Array
//     dailyHour = ((h+1) + ":00 " + amPM);
//     allHours.push(dailyHour);
//     };
//     console.log(allHours)
//     generateContainer()
  
// };