/**
 * Created by skoppisetti on 9/28/15.
 */
eventsApp.factory('eventData', function($http) {
    return {
        getEvent: function() {
            return $http({method: 'GET', url: '/data/event/1'});
        }
    };
});