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
        'backbone.marionette': {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        'backbone.marionette.handlebars': {
            deps: ['backbone.marionette'],
            exports: 'Marionette'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: '$.fn.popover'
        }
    },
    deps: ['backbone.marionette.handlebars'],
    enforceDefine: true,
    hbs: {
        disableI18n: true,
        templateExtension: 'handlebars'
    }});

// Start the main app logic.
define(['cs','hbs'], function() {
    require(['cs!app/main']);
});
