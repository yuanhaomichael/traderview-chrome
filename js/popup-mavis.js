$(document).ready(function () {

    $("#finish-button").click(function () {
        $("#set-up-view").addClass("hidden");
        $("#authentication-view").removeClass("hidden");
    })

    $("#verify-button").click(function () {
        $("#authentication-view").addClass("hidden");
        $("#portfolio-view").removeClass("hidden");
    })

    $("#not-sleep-icon").click(function() {
        $("#portfolio-view-sleep").removeClass("hidden");
        $("#portfolio-view").addClass("hidden");
    })


});