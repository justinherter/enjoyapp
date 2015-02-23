'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Enjoyapp = new Module('enjoyapp');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Enjoyapp.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Enjoyapp.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Enjoyapp.menus.add({
    title: 'enjoyapp example page',
    link: 'enjoyapp example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Enjoyapp.aggregateAsset('css', 'enjoyapp.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Enjoyapp.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Enjoyapp.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Enjoyapp.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Enjoyapp;
});
