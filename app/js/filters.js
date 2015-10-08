/**
 * Created by skoppisetti on 9/27/15.
 */
'use strict';

eventsApp.filter('durations', function() {
   return function(duration) {
       switch(duration) {
           case 1:
               return "Half Hour";
           case 2:
               return "1 Hour";
           case 3:
               return "Half Day";
           case 4:
               return "Full Day";
       }
   }
});

eventsApp.filter('levels', function() {
    return function(level) {
        switch(level) {
            case "introductory":
                return 'Level: <img src="img/beginner.png" alt="Beginner"/>';
            case "intermediate":
                return 'Level: <img src="img/intermediate.png" alt="Intermediate"/>';
            case "advanced":
                return 'Level: <img src="img/expert.png" alt="Expert"/>';
        }
    }
});