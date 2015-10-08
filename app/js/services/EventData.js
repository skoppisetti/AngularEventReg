/**
 * Created by skoppisetti on 9/28/15.
 */
eventsApp.factory('eventData', function($http, $log) {
    return {
        getEvent: function(successcb) {
            $http({method: 'GET', url: '/data/event/1'}).
                success(function(data, status, headers, config) {
                    successcb(data);
                }).
                error(function(data, status, headers, config) {
                    $log.warn(data, status, headers, config);
                });
        }
        /*event: {
            name : 'Angular Boot Camp',
            date : '12/15/2015',
            time : '10:30 am EST',
            location : {
                address:'83 Wooster Heights Rd',
                city:'Danbury',
                state:'CT'
            },
            imageUrl:'img/angularjs-logo.png',
            sessions:[
                {
                    name: 'Directives Masterclass',
                    creator: 'John Doe',
                    duration: 1,
                    level: 'Beginner',
                    description: 'Learn all about the directives in AngularJS in this session.',
                    upVoteCount: 0
                },
                {
                    name: "Scopes for fun and profit",
                    creator: 'Joe Frank',
                    duration: 2,
                    level: 'Intermediate',
                    description: 'Learn how to optimize the usage of scope and maximize its benefits with a good model design to complement the scope functionality.',
                    upVoteCount: 0
                },
                {
                    name: "Well Behaved Controllers",
                    creator: 'Jane Smith',
                    duration: 4,
                    level: 'Expert',
                    description: 'AngularJS Controllers 101. Walk through the creation and life cycle of a controller.',
                    upVoteCount: 0
                }
            ]
        }*/
    };
});