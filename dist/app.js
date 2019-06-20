;
var app = app || {};
var ViUi = ViUi;
app.prototype = function (evt) {
    evt.constructor = {
        "name": evt.name,
        "version": evt.version,
        "author": evt.author,
        "info": evt.info,
        "nav": evt.nav(),
        "navs": evt.navs(),
        "ajax" : evt.ajax(),
        "ui_loader" : evt.loader()

    };
    app.constructor = function (obj) {
        obj = {
            "name": evt.name,
            "version": evt.version,
            "author": evt.author,
            "info": evt.info,
            "nav": evt.nav(),
            "navs" : evt.navs(),
            "ajax" :evt.ajax(),
            "ui_loader" : evt.loader()
        };
        return obj;
    };
};

(function () {
    function main(obj) {
        obj = app.constructor(
            {
                "n": "ViUi-app",
                "v": "v1.0",
                "a": "大头鱼",
                "i": "QQ:252454",
                "nav": function () {},
                "navs":function(){}
            });
        return obj;
    }

    ViUi = main();

    //straining
    var strain = ['./lib/ViUi',
        './lib/ViUi/nav',
        './lib/ViUi/menu',
        './lib/ViUi/time',
        './lib/ViUi/page',
        './lib/ViUi/footer',
        './lib/ViUi/file',
        './lib/ViUi/layout',
        './lib/ViUi/search'
    ];



}());