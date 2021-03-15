///////////////////////////
// ESTABLISH CURRENT DAY //
///////////////////////////

$("#currentDay").text(moment().format("dddd     -     MMMM DD     -     YYYY"));

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

    // Loop 24 Times for 24 Work Hours
    for ( var i=0 ; i<24 ; i = i+1 ){

    //Determine AM or PM
    
    var amPM;
    if ((i) < 11){
        amPM = " AM";
        } else if ((i) >= 11 && (i) < 23) {
        amPM = " PM";
        // } else if ((i) > 23) {
        } else {
        amPM = " AM";
    };
    
    // Reset to 1 After 12
    if ((i) > 11){
        h = ((i) -12);
        } else {
        h = (i);
    }

    //Add Context to Each Time Stamp and Push to dailyHours Array
    dailyHour = (h+1) + amPM;
    allHours.push(dailyHour);

    allHours.splice(0, 0, allHours.pop())

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
            newTimeBlock.attr("id", (i) + "idBlock");
        
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
            newTextArea.attr("id", (i) + "id");
        
        
        // NEW SAVE BUTTON 
        newSave = $("<button>");
        newSave.attr("class", "saveBtn");
        newSave.text("Save");
        newTextArea.after(newSave);
            // Drop Data to use for LocalStorage ID
            newSave.attr("data-idx", (i));

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


            console.log("read")
            // Collect Save Key from Click
            var saveClick = e.target.getAttribute("data-idx");

                // If Text Box Number Matches its Save Button...
                if (textNum = saveClick) {

                    // Collect User Input on Text
                    var textInput = $(this).siblings(".description").val();

                    // Send Text Input and Save Key to Storage
                    console.log("VALUE: " + textInput);
                    console.log("KEY: " + saveClick);

                    localStorage.setItem(saveClick, textInput)

                };
            });
        });

//////////////////////////////////////////////////
// GET DATA FROM STORAGE TO PLACE IN TEXT BOXES //
//////////////////////////////////////////////////
    $("#0id").val(localStorage.getItem(0));
    $("#1id").val(localStorage.getItem(1));
    $("#2id").val(localStorage.getItem(2));
    $("#3id").val(localStorage.getItem(3));
    $("#4id").val(localStorage.getItem(4));
    $("#5id").val(localStorage.getItem(5));
    $("#6id").val(localStorage.getItem(6));
    $("#7id").val(localStorage.getItem(7));
    $("#8id").val(localStorage.getItem(8));
    $("#9id").val(localStorage.getItem(9));
    $("#10id").val(localStorage.getItem(10));
    $("#11id").val(localStorage.getItem(11));
    $("#12id").val(localStorage.getItem(12));
    $("#13id").val(localStorage.getItem(13));
    $("#14id").val(localStorage.getItem(14));
    $("#15id").val(localStorage.getItem(15));
    $("#16id").val(localStorage.getItem(16));
    $("#17id").val(localStorage.getItem(17));
    $("#18id").val(localStorage.getItem(18));
    $("#19id").val(localStorage.getItem(19));
    $("#20id").val(localStorage.getItem(20));
    $("#21id").val(localStorage.getItem(21));
    $("#22id").val(localStorage.getItem(22));
    $("#23id").val(localStorage.getItem(23));
    $("#24id").val(localStorage.getItem(24));

////////////////////////////////////////
// RENDER JS TIME CODES TO MATCH CODE //
////////////////////////////////////////

    colorCode();

    function colorCode(){

        // Parse the Current Hour from DayJS Function
        var currentHour = parseInt(dayjs().format('H'));

        // Loop Current Hour Against ID Blocks
        for( var i=0; i<24; i++){
            
            // Apply Green to Future
            if( (i) > (currentHour)){                          
                $(`#${i}idBlock`).addClass("future");
            
            // Apply Grey to Past
            } else if ((i) < (currentHour)){ 
                $(`#${i}idBlock`).addClass("past");
            
            // Apply Red to Present
            } else if ((i) === (currentHour)){        
                console.log("present", i)                             
                $(`#${i}idBlock`).addClass("present");
            };
        };
    };
};

/////////
// FIN //
/////////