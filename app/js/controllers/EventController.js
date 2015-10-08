/**
 * Created by skoppisetti on 9/27/15.
 */
'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $log) {
    //$scope.event = eventData.event;
    eventData.getEvent()
        .success(function(event) {$scope.event = event;})
        .error(function(data, status, headers, config) {
                $log.warn(data, status, headers, config);
            });

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    };

    $scope.mystyle = {color: 'red'}
});