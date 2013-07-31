define ['hbs!templates/sample'], (SampleTemplate) ->
    MainView = Marionette.ItemView.extend
        template:
            type: 'handlebars'
            template: SampleTemplate

    SampleController = Marionette.Controller.extend
        initialize: (options) ->
            @region = options.region
        show: () ->
            model = new Backbone.Model
                contentPlacement: "here"
            view = new MainView
                model: model
            @region.show(view)

    return SampleController
