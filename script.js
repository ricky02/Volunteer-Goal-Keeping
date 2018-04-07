$(document).ready(function() {
    
    var submit_button = $(".submit-button");
    var hours = 0;
    var acquiredHours = 0;
    var description;
    
    submit_button.click(function() {
         
        if ($("#userInputVolunteerHours").val() >= 0){
            hours = parseInt($("#userInputVolunteerHours").val());
            description = $("#userInputDescription").val();
            // $("#volunteerhours").append(`<ul> ${description} hours </ul>`);
                        $("#volunteerDescription").append(`<br>${description} : ${hours} hours`);

            acquiredHours = acquiredHours + hours;
            $("#totalHours").html(acquiredHours);
               
        }
    });
    
        
});