require.config({
    baseUrl: '/lib',
    paths: {
        'app': '../app',
        'modules': '../app/modules',
        'templates': '../app/templates'
    },
    hbs: {
        disableI18n: true,
        templateExtension: 'handlebars'
    }});

// Start the main app logic.
require(['cs',
        'jquery',
        'underscore',
        'hbs',
        'backbone',
        'backbone.marionette',
        'backbone.marionette.handlebars'], function() {
    require(['cs!app/main']);
});
