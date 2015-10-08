/**
 * Created by skoppisetti on 9/27/15.
 */
'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData) {
    //$scope.event = eventData.event;
    eventData.getEvent(function(event) {
        $scope.event = event;
    });

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };

    $scope.mystyle = {color: 'red'}
});