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

    $("#watchlist-collapse").click(function() {
        $("#portfolio-view").addClass("hidden");
        $("#watchlist-view").removeClass("hidden");
    })

    $("#summaries-collapse").click(function() {
        $("#portfolio-view").removeClass("hidden");
        $("#watchlist-view").addClass("hidden");
    })

    $("#watchlist-collapse-sleep").click(function() {
        $("#portfolio-view-sleep").addClass("hidden");
        $("#watchlist-view").removeClass("hidden");
    })

    $("#portfolio-alert").click(function() {
        $("#portfolio-view").addClass("hidden");
        $("#alerts-dashboard").removeClass("hidden");
        $("#all-alerts").removeClass("hidden");
    })

    $("#watchlist-alert").click(function() {
        $("#watchlist-view").addClass("hidden");
        $("#portfolio-view").addClass("hidden");
        $("#alerts-dashboard").removeClass("hidden")
        $("#all-alerts").removeClass("hidden");
    })

    $("#dnd-alert").click(function() {
        $("#portfolio-view-sleep").addClass("hidden");
        $("#alerts-dashboard").removeClass("hidden");
        $("#all-alerts").removeClass("hidden");
    })

    $("#home-icon").click(function() {
        $("#portfolio-view").removeClass("hidden");
        $("#all-alerts").addClass("hidden");
        $("#alerts-dashboard").addClass("hidden");
        $("#alerts-page-tesla").addClass("hidden");
        $("#alerts-page-apple").addClass("hidden");
        $("#alerts-page-alphabet").addClass("hidden");
        $("#alerts-page-walmart").addClass("hidden");
    })

    $("#alert-tesla").click(function () {
        $("#all-alerts").addClass("hidden");
        $("#alerts-page-tesla").removeClass("hidden");
    })

    $("#alert-apple").click(function () {
        $("#all-alerts").addClass("hidden");
        $("#alerts-page-apple").removeClass("hidden");
    })

    $("#alert-alphabet").click(function () {
        $("#all-alerts").addClass("hidden");
        $("#alerts-page-alphabet").removeClass("hidden");
    })

    $("#alert-walmart").click(function () {
        $("#all-alerts").addClass("hidden");
        $("#alerts-page-walmart").removeClass("hidden");
    })

});