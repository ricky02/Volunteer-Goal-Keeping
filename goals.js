$(document).ready(function() {
    
    var submit_button = $(".submit-button");
    var remove_button = $(".remove-button");
    var goals = [];
    submit_button.click(function() {
        $("#volunteerColleges").html("");
        goals.push($("#userInputGoals").val());
        console.log(goals);
        $("#goalsDescription").append(`<br>${goals.length + " " + goals[goals.length-1]}`);
    
             
    });
    remove_button.click(function() {
        goals.splice($("#userInputRemoveGoals").val() - 1, 1);
        console.log(goals);
        $("#goalsDescription").html("");
        for ( i = 0; i <goals.length; i++){
             $("#goalsDescription").append(`<br>${(i+1) + " " + goals[i]}`);
    
        }
        // goals.remove($("#userInputRemoveGoals").val());
        // $("#goalsDescription").remove(`<br>${goals.length + " " + goals[goals.length-1]}`);
    });
});