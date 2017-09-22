egret_h5.startGame = function() {
    var e = egret.MainContext.instance;
    e.touchContext = new egret.HTML5TouchContext;
    e.deviceContext = new egret.HTML5DeviceContext;
    e.netContext = new egret.HTML5NetContext;
    var t;
    var n;
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        t = document.documentElement.clientHeight;
        n = document.documentElement.clientWidth
    } else {
        t = window.innerHeight;
        n = window.innerWidth
    }
    var r = {
        w: 360,
        h: 600
    };
    if (/iPhone/i.test(navigator.userAgent)) {
        r = {
            w: 480,
            h: 800
        }
    } else {
        r = {
            w: 360,
            h: 600
        }
    }
    var i = r.h / r.w;
    var a = t / n;
    if (a <= i) {
        egret.StageDelegate.getInstance().setDesignSize(r.h / a, r.h)
    } else if (a > i) {
        egret.StageDelegate.getInstance().setDesignSize(r.w, r.w * a)
    }
    e.stage = new egret.Stage;
    var o = egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ? egret.StageScaleMode.NO_BORDER: egret.StageScaleMode.SHOW_ALL;
    e.stage.scaleMode = o;
    var g = 0;
    if (g == 1) {
        e.rendererContext = new egret.WebGLRenderer
    } else {
        e.rendererContext = new egret.HTML5CanvasRenderer
    }
    egret.MainContext.instance.rendererContext.texture_scale_factor = 1;
    e.run();
    var c;
    if (document_class) {
        c = egret.getDefinitionByName(document_class)
    }
    if (c) {
        var s = new c;
        if (s instanceof egret.DisplayObjectContainer) {
            e.stage.addChild(s)
        } else {
            throw new Error("文档类必须是egret.DisplayObjectContainer的子类!")
        }
    } else {
        throw new Error("找不到文档类！")
    }
    var l = null;
    var d = function() {
        e.stage.changeSize();
        l = null
    };
    window.onresize = function() {
        if (l == null) {
            l = setTimeout(d, 300)
        }
    }
};