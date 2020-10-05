///////////////////////////
// ESTABLISH CURRENT DAY //
///////////////////////////

var todayDate = $("#currentDay");
var todayDate = dayjs().format("YYYY, MM, DD")
var todayHour = dayjs().format("YYYY, MM, DDT16:00:00.000Z")

////////////////////////////////
// LINKING TO CLASSES IN HTML //
////////////////////////////////

var containerDiv = $(".container")
var timeBlockDiv = $(".timeBlock");
var divRowDiv = $(".row");
var hourDiv = $(".hour");
var textAreaDiv = $(".description");
var saveButton = $(".saveBtn");

///////////////////////
// GENERATE 24 HOURS //
///////////////////////

var allHours = [];

create24hours();

function create24hours(){
    // Set Daily Hours and AM/PM Variables 

        // Loop 24 Times
        for ( var i=0 ; i<24 ; i++ ){
    
        //Determine AM or PM
        var amPM;
        if (i < 11){
            amPM = " AM";
            } else if (i >= 12) {
            amPM = " PM";
            };
        // Reset to 1 After 12
        if (i > 11){
            h = (i -12);
            } else {
            h = i;
            }

        //Add Context to Each Time Stamp and Push to dailyHours Array
        dailyHour = (h+1) + amPM;
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

    // NEW HOUR
    var newHour = $("<div>" + allHours[i] + "</div>")
    newHour.attr("class", "hour");
    newRow.append(newHour);

    // NEW TEXTAREA 
    var newTextArea = $("<textarea>");
    newTextArea.attr("class", "description");
    newHour.after(newTextArea);
    
    // NEW SAVE BUTTON 
    var newSave = $("<button>");
    newSave.attr("class", "saveBtn");
    newSave.text("S");
    newTextArea.after(newSave);

    };
    
    renderTimeCode()

};