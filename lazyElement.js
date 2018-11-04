(function () {
    "use strict";

    var defaults = {
        selector: '.lazy_element',
        lazyLoad: []
    };

    var getdatas = function () {
        var elements = document.querySelectorAll(defaults.selector);
        for (var i = 0; i < elements.length; i++) {
            if (elements[i]) {

                elements[i].data = {
                    top: elements[i].offsetTop,
                    lazy_callback: elements[i].dataset.lazy_event || undefined
                };

                defaults.lazyLoad.push(elements[i]);
            }
        }
    };

    var winHeight = function () {
        return document.documentElement.clientHeight || document.body.clientHeight;
    };

    var check = function () {
        if (defaults.lazyLoad.length > 0) {
            var scrollTop = location() + winHeight();

            for (var i = 0; i < defaults.lazyLoad.length; i++) {
                if (defaults.lazyLoad[i] && scrollTop >= defaults.lazyLoad[i].data.top) {
                    doLazyLoad(defaults.lazyLoad[i]);
                    defaults.lazyLoad[i] = null;
                }
            }

        }
    };
    var location = function () {
        return window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    };

    var doLazyLoad = function (element) {
        if (!element) {
            return;
        }

        if (element.data.lazy_callback) {
            var fun = eval(element.data.lazy_callback);
            setTimeout(() => {
                fun();
            }, 10);

        }
    };

    window.onload = function () {
        getdatas();
    };
    window.onscroll = function () {
        check();
    };


})();