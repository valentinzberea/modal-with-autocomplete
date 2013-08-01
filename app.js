require.config({
    baseUrl: '/lib',
    paths: {
        'app': '../app',
        'modules': '../app/modules',
        'templates': '../app/templates'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'backbone.marionette' : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        }
    },
    hbs: {
        disableI18n: true,
        templateExtension: 'handlebars'
    }});

// Start the main app logic.
requirejs(['cs',
        'hbs',
        'backbone.marionette.handlebars'], function() {
    require(['cs!app/main']);
});
