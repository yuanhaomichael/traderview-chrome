$(document).ready(function () {
    let c = 1
    let height = 0;
    let s = "";
    $("#alert-tesla").click(function () {
        console.log("hi")
        $("#all-alerts").addClass("hidden");
        $("#alerts-page-tesla").removeClass("hidden");
    })

    $("#alert-apple").click(function () {
        console.log("hi")
        $("#all-alerts").addClass("hidden");
        $("#alerts-page-apple").removeClass("hidden");
    })

    $("#alert-alphabet").click(function () {
        console.log("hi")
        $("#all-alerts").addClass("hidden");
        $("#alerts-page-alphabet").removeClass("hidden");
    })

    $("#alert-walmart").click(function () {
        console.log("hi")
        $("#all-alerts").addClass("hidden");
        $("#alerts-page-walmart").removeClass("hidden");
    })

    // $("#plus-button").click(function () {
    //     c++;
    //     $("#alert-sample").clone().appendTo("#alerts-page");
    //     // change height of the border
    //     h = $("#alerts-dashboard").css("min-height");
    //     console.log("h:", h)
    //     height = parseInt(h) + 300;
    //     var x = "\"" + height.toString() + "px\"";
    //     $("#alerts-dashboard").css("min-height", x);
    // })



});