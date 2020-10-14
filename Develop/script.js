///////////////////////////
// ESTABLISH CURRENT DAY //
///////////////////////////

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

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
// GENERATE WORK HOURS //
///////////////////////

createWorkHours();

// Establish Daily Hour Variables with Correct AM/PM
function createWorkHours(){

    // Loop 9 Times for 9 Work Hours
    for ( var i=0 ; i<9 ; i = i+1 ){

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

////////////////////////////////////////////////////
// GENERATE 9 TIME BLOCKS AND DROP ID'S FOR LATER //
////////////////////////////////////////////////////

function generateTimeBlocks(){

    //Link to Container Element
    var containerDiv = $(".container")

    //Loop Hour Array to Generate 9 Time Blocks
    for (var i = 0; i < allHours.length ; i++){
    
        // NEW TIME BLOCK DIV
        newTimeBlock = $("<div>")
        newTimeBlock.attr("class", "time-block");
        containerDiv.append(newTimeBlock);    
            // Drop an ID for Color Coding Later
            newTimeBlock.attr("id", (i+9) + "idBlock");
        
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
        newHour.after(newTextArea);
            // Drop an ID to Collect Click
            newTextArea.attr("id", (i+9) + "id");
        
        
        // NEW SAVE BUTTON 
        newSave = $("<button>");
        newSave.attr("class", "saveBtn");
        newSave.text("S");
        newTextArea.after(newSave);
            // Drop Data to use for LocalStorage ID
            newSave.attr("data-idx", (i+9));

    };    

////////////////////////
// COLLECT TEXT INPUT //
////////////////////////

    // Link Variable to Description Section in HTML
    var textAreaDiv = $(".description");

        // When User Clicks a Text Box...
        textAreaDiv.on("click", function(e){
        e.preventDefault();

        // Collect the ID Number from the Click
            textNum = e.target.getAttribute("id");

///////////////////
// SAVE FUNCTION //
///////////////////
        
            // When User Clicks Save Button...
            $(".saveBtn").on("click", function(e){
            e.preventDefault();

            // Collect Save Key from Click
            var saveClick = e.target.getAttribute("data-idx");

                // If Text Box Number Matches its Save Button...
                if (textNum = saveClick) {

                    // Collect User Input on Text
                    var textInput = $(this).siblings(".description").val();

                    // Send Text Input and Save Key to Storage
                    console.log("VALUE: " + textInput);
                    console.log("KEY: " + saveClick);

                };
            });
        });

//////////////////////////////////////////////////
// GET DATA FROM STORAGE TO PLACE IN TEXT BOXES //
//////////////////////////////////////////////////

    $("#9id").val(localStorage.getItem(9));
    $("#10id").val(localStorage.getItem(10));
    $("#11id").val(localStorage.getItem(11));
    $("#12id").val(localStorage.getItem(12));
    $("#13id").val(localStorage.getItem(13));
    $("#14id").val(localStorage.getItem(14));
    $("#15id").val(localStorage.getItem(15));
    $("#16id").val(localStorage.getItem(16));
    $("#17id").val(localStorage.getItem(17));

////////////////////////////////////////
// RENDER JS TIME CODES TO MATCH CODE //
////////////////////////////////////////

    colorCode();

    function colorCode(){

        // Parse the Current Hour from DayJS Function
        var currentHour = parseInt(dayjs().format('H'));

        // Loop Current Hour Against ID Blocks
        for( var i=0; i<9; i++){
            
            // Apply Green to Future
            if( (i+9) > currentHour){                          
                $(`#${i+9}idBlock`).addClass("future");
            
            // Apply Grey to Past
            } else if ((i+9) < currentHour){ 
                $(`#${i+9}idBlock`).addClass("past");
            
            // Apply Red to Present
            } else if ((i+9) === currentHour){        
                console.log("present", i)                             
                $(`#${i+9}idBlock`).addClass("present");
            };
        };
    };
};

/////////
// FIN //
/////////