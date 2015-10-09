/**
 * Created by skoppisetti on 9/28/15.
 */
eventsApp.factory('eventData', function($resource) {
    return {
        getEvent: function() {
            return $resource('/data/event/:id', {id:'@id'}).get({id:1});
        }
    };
});