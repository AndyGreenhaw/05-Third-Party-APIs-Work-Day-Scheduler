///////////////////////////
// ESTABLISH CURRENT DAY //
///////////////////////////

var todayDate = dayjs().format("YYYY, MM, DD")
    todayDate.textContent = $("#currentDay");
var todayHour = dayjs().format("YYYY, MM, DDT16:00:00.000Z")

///////////////////////////////
// ESTABLISH GLOBAL ELEMENTS //
///////////////////////////////

var newTimeBlock;
var newRow;
var newHour;
var newTextArea;
var newSave;
var textInput;

///////////////////
// CREATE ARRAYS //
///////////////////

var allHours = [];
var allText = [];
var allSaves = [];

///////////////////////
// GENERATE 24 HOURS //
///////////////////////

create24hours();

function create24hours(){
    // Set Daily Hours and AM/PM Variables 

        // Loop 24 Times
        for ( var i=0 ; i<9 ; i++ ){
    
        //Determine AM or PM
        var amPM;
        if ((i+8) < 11){
            amPM = " AM";
            } else if ((i+8) >= 12) {
            amPM = " PM";
            };
        // Reset to 1 After 12
        if ((i+8) > 11){
            h = ((i+8) -12);
            } else {
            h = (i+8);
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

    //Link to Container Element
    var containerDiv = $(".container")

    //Loop Hour Array to Generate 24 Time Blocks
    for (var i = 0; i < allHours.length ; i++){
    
    // NEW TIME BLOCK DIV
    newTimeBlock = $("<div>")
    newTimeBlock.attr("class", "time-block");
    containerDiv.append(newTimeBlock);

    // NEW ROW DIV
    newRow = $("<div>");
    newRow.attr("class", "row");
    newTimeBlock.append(newRow);

    // NEW HOUR
    newHour = $("<div>" + allHours[i] + "</div>")
    newHour.attr("class", "hour");
    newRow.append(newHour);

    // NEW TEXTAREA 
    newTextArea = $("<textarea>");
    newTextArea.attr("class", "description");
    newTextArea.attr("data-idx", (i+8)+1);
    newHour.after(newTextArea);
    
    // NEW SAVE BUTTON 
    newSave = $("<button>");
    newSave.attr("class", "saveBtn");
    newSave.attr("data-idx", (i+8)+1);
    newSave.text("S");
    newTextArea.after(newSave);


    };


////////////////////////////////////
// LINK TO CLASSES IN NEW HTML //
////////////////////////////////////

var timeBlockDiv = $(".timeBlock");
var divRowDiv = $(".row");
var hourDiv = $(".hour");
var textAreaDiv = $(".description");
var saveButton = $(".saveBtn");


    ////////////////////////
    // COLLECT TEXT INPUT //
    ////////////////////////

    // When User Clicks Textbox...
    textAreaDiv.on("click", function(e){
        e.preventDefault();
        console.log();

    // Collect Textbox Number from Click
        textNum = e.target.getAttribute("data-idx");
        console.log(textNum);

    ///////////////////
    // SAVE FUNCTION //
    ///////////////////
        
        // When User Clicks Save Button //
        $(".saveBtn").on("click", function(e){
        e.preventDefault();

        // Collect Save Key from Click
        var saveClick = e.target.getAttribute("data-idx");
        console.log("Save Click: " + saveClick);

            // If the Textbox Number Matches Save Key, Send Data to Storage
            if (textNum = saveClick) {

            // Collect User Input on Text
            var textInput = $(this).siblings(".description").val();
            console.log("Input Text :" + textInput);

            // Send to Storage
            console.log("VALUE: " + textInput);
            console.log("KEY: " + saveClick);
            localStorage.setItem(saveClick, textInput)

            };
        });

    });







};

///////////////////////
// PULL FROM STORAGE //
///////////////////////

