;
ViUi.nav = function (options) {
    options = {
        "title": options.title,
        "id": options.id,
        "class": options.class,
        "width": options.width,
        "height": options.height,
        "background": options.background,
        "route": options.route = {}
    };
    var nav = document.getElementsByTagName('nav');
    if (nav) {
        for (var i = 0; i < nav.length; i++) {
            if (options.id === 'undefined' || options.id === undefined) {
                options.id = "";
            } else {
                nav.item(i).setAttribute('id', options.id);
            }
            if (options.title === 'undefined' || options.title === undefined) {
                options.title = "";
            } else {
                nav.item(i).setAttribute('title', options.title);
            }
            if (options.class === 'undefined' || options.class === undefined) {
                options.class = "";
            } else {
                nav.item(i).setAttribute('class', options.class);
            }
            if (options.width === 'undefined' || options.width === undefined) {
                options.width = "";
            } else {
                nav.item(i).style.width = options.width + "%";
            }
            if (options.height === 'undefined' || options.height === undefined) {
                options.height = "";
            } else {
                nav.item(i).style.height = options.height + "em";
            }
            if (options.background === 'undefined' || options.background === undefined) {
                options.background = "";
            } else {
                nav.item(i).style.background = options.background;
            }
            if (nav.length > 1) {
                nav.item(i).setAttribute("id", options.id);
            }
        }
    }
    return ViUi.nav.constructor = (Object(["lib/ViUi/nav"]));
};

//随便写写，拖拉的效果
var nav_touch = function (id) {
    var n = document.querySelector(id);
    var o, t, max_w, max_h;
    var layout = document.querySelector("#nav-layout");
    n.addEventListener('touchstart', function (e) {
        touchstart(e);
    });
    n.addEventListener('touchmove', function (e) {
        touchmove(e);
    });
    n.addEventListener('touchend', function (e) {
        touchend();
    });

    //触摸开始
    function touchstart(e) {
        var el = e || window.Element,
            touch = el.targetTouches[0];
        max_w = window.innerWidth - n.offsetWidth;
        max_h = window.innerHeight - n.offsetHeight;
        o = touch.clientX - n.offsetLeft;
        t = touch.clientY - n.offsetTop;
        document.addEventListener('touchmove', defalutEvent, false);
    }

    //触摸过程
    function touchmove(e) {
        var el = e || window.Element;
        var touch = el.targetTouches[0],
            ol = touch.clientX - o,
            ot = touch.clientY - t;
        if (ol < 0) {
            ol = 0;
        } else if (ol >= max_w) {
            ol = max_w;
        }
        if(ot < 0){
            ot = 0;
        }else if(ot >= max_h){
            ot = max_h;
        }
        if(ot > 1){
            layout.style.height = ot + 'px';
            layout.style.display = 'block';
        }else if(ot === 0){
            layout.style.display = 'none';
        }
        n.style.left = ol + 'px';
        n.style.top = ot + 'px';

    }

    function touchend() {
        document.removeEventListener('touchmove', defalutEvent);
    }

    function defalutEvent(e) {
        e.preventDefault();
    }
};

ViUi.navs = function(options){
    options = {
        "title" : options.title,
        "id" : options.id,
        "class" : options.class,
        "sub" : options.sub,
        "width" : options.width,
        "height" : options.height,
        "data" : options.data,
    }
    if(options.id){
        var navs = document.createElement("div");
        var navs_ui = document.createElement("ui");
        var navs_a = document.createElement("a");
        document.body.appendChild(navs);
        navs.setAttribute('id','viui-navs');
        document.body.appendChild(navs_ui);
        // if(options.data){
            get_data();
        // }
        document.querySelector('#viui-navs').appendChild(navs_ui).appendChild(navs_a);
    }

    function get_data(data){
        var o;
        data = new Object({
            "Url" : data.url,
            "Method":data.Method,
            "Content_Type" : data.Content_Type,
            "Data" : data.Data,
            "User_Agent" : data.User_Agent,
            "Accept_Encoding" : data.Accept_Encoding
        });
        for(o in data){
            if(data && data !== 'undefined'){
                var xml = new XMLHttpRequest();
                xml.getResponseHeader()
            }
        }
    }
};