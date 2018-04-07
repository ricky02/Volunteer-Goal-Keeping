$(document).ready(function() {
    
    var submit_button = $(".submit-button");
        
    submit_button.click(function() {
        var colleges = [];
        $("#volunteerColleges").html("");
        if ($("#userInputHours").val() >= 0){
                $("#collegesDescription").html("The hours you have submitted, " + $("#userInputHours").val() + ", mean...");
                $("#collegesDescription2").html("You have met or surpassed the requirements for the following colleges: ");
                colleges.push("Columbia");
                colleges.push("Cornell");
            } if ($("#userInputHours").val() >= 40){
                    colleges.push("Stanford");
                } if ($("#userInputHours").val() >= 50){
                        colleges.push("Harvard");
                        colleges.push("Yale");
                        } if ($("#userInputHours").val() >= 70){
                            colleges.push("MIT");
                            } if ($("#userInputHours").val() >= 100){
                                colleges.push("UC Berkeley");
                                colleges.push("UCLA");
                                } if ($("#userInputHours").val() >= 130){
                                        colleges.push("Brown");
                                    } if ($("#userInputHours").val() >= 156){
                                            colleges.push("UPenn");
                                            colleges.push("Dartmouth");
                                            colleges.push("Princeton");
                                    } 
     
        console.log(colleges);
        for ( i = 0; i <colleges.length; i++){
             $("#volunteerColleges").append(`<br>${colleges[i]}`);
             
        }
    });
    
        
});