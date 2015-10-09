/**
 * Created by skoppisetti on 9/27/15.
 */
'use strict'

eventsApp.controller("EditEventController", function($scope, eventData) {
    $scope.saveEvent = function(event, newEventForm) {
        console.log(newEventForm);
        if(newEventForm.$valid) {
            eventData.save(event)
                .$promise
                .then(function(response) {console.log('success', response);})
                .catch(function(response) {console.log('failure', response)});
        }
    };

    $scope.cancelEvent = function() {
         window.location="/EventDetails.html";
    }
});