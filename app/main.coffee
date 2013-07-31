define ['cs!modules/sample'], (SampleController) ->
    App = new Marionette.Application()
    App.addRegions
        mainRegion: "#main"

    App.module "SampleModule", (Module) ->
        Module.addInitializer () ->
            Module.controller = new SampleController
                region: App.mainRegion
            Module.controller.show()
    App.start()
