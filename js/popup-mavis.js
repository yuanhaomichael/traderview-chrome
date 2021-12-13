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

    $("#watchlist-collapse-sleep").click(function() {
        $("#portfolio-view-sleep").addClass("hidden");
        $("#watchlist-view").removeClass("hidden");
    })

    $("#watchlist-alert").click(function() {
        $("#watchlist-view").addClass("hidden");
        $("#portfolio-view").addClass("hidden");
        // unhide whichever component you need
        $("#alerts-dashboard").removeClass("hidden")
    })

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

});