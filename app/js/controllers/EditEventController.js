/**
 * Created by skoppisetti on 9/27/15.
 */
'use strict'

eventsApp.controller("EditEventController", function($scope) {
    $scope.saveEvent = function(event, newEventForm) {
        console.log(newEventForm);
        if(newEventForm.$valid) {
            window.alert("Event " + event.name + "saved!");
        }
    }

    $scope.cancelEvent = function() {
        /*event.name = "";
        event.date = "";
        event.time = "";
        event.location.address = "";
        event.location.city = "";
        event.location.state = "";*/
        window.location="/EventDetails.html";
    }
});