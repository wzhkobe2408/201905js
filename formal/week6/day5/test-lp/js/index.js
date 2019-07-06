/**
 *
 * @param timerObj
 *
 * {
 *  countFrom: <int> the number counting from
 *  callback: <function> the operation after the second decreases, the current second will be injected to the callback
 *
 * }
 * @constructor the constructor is designed to run seconds,
 */
var RunSeconds = function (timerObj) {
    this.counter = timerObj.countFrom || 59; // the number count from
    this.isRunning = false; // show the counter is running or not
    this.breakPoint = 0; // the number which the count pauses at
    this.runState = 'stopped'; // string to tell you what state the counter is on
    var that = this;
    this.countDown = function () {
        // method to count
        if (that.counter > 0) {
            that.counter -= 1;
            timerObj.callback(that.counter);
        } else {
            window.clearInterval(that.timer);
            that.isRunning = false;
            that.counter = timerObj.countFrom;
        }
    };
    this.shutDown = function () {
        // method to shut counter down
        window.clearInterval(that.timer);
        that.isRunning = false;
        this.runState = 'stopped';
    };
    this.pause = function () {
        // method to stop the counter temporarily and remember what second the counter pause at
        that.breakPoint = that.counter;
        window.clearInterval(that.timer);
        that.isRunning = false;
        that.runState = 'paused';
    };
    this.restart = function () {
        // method to restart the counter from where you pause at last time
        that.isRunning = true;
        that.counter = that.breakPoint;
        that.runState = 'running';
        that.timer = setInterval(that.countDown, 1000);
    };
    this.start = function () {
        // method to start the counter
        that.isRunning = true;
        that.counter = timerObj.countFrom;
        that.runState = 'running';
        that.timer = setInterval(that.countDown, 1000);
    };
};

var isRun = {
    countFrom: 11,
    callback: function (currentSecond) {
        var s = parseInt(currentSecond) >= 10 ? currentSecond : '0' + currentSecond
        if (currentSecond > 0) {
            $('#codeSendBtn1').text('重新发送(' + s + 's)').attr('disabled', true)
        } else {
            $('#codeSendBtn1').text('发送验证码').attr('disabled', false)
        }
    }
};

var timer = new RunSeconds(isRun);
$('#codeSendBtn1').click(function () {
    if (!timer.isRunning) {
        timer.start();
        // you may process some sync operations,like ajax,timeOut etc.
        // By the way, you can do something with the stat that the counter sample tells you;
        // For example, you want to shut the counter,when the ajax http status returns error, you can do it in the ajax callback by timer.shutdown() ,'cause the counter record the state
        /*setTimeout(function () {
            if (timer.timer) {
                timer.shutDown();
                $('#codeSendBtn1').text('发送验证码').attr('disabled', false)
            }
        }, 4000)*/
    } else {
        return false
    }
})

(function (win, doc) {
    var t = null, l, w;
    function changeRem() {
        w = doc.getBoundingClientRect().width;
        if (l === w) {
            return false;
        }
        l = w;
        if (w > 750) {
            w = 750;
        }
        win.rem = (w / 750) * 100;
        if (/ZTE U930_TD/.test(navigator.userAgent)) {
            win.rem *= 1.13
        }
        doc.style.fontSize = win.rem + 'px';
        doc.setAttribute('data-num', win.rem);
    }
    changeRem();
    win.addEventListener('reisize', function () {
        if (document.activeElement.tagName != 'INPUT' || document.activeElement.tagName != 'TEXTAREA') {
            clearTimeout(t);
            t = setTimeout(changeRem, 100)
        }
    });
    win.addEventListener('orientationchange', function () {
        clearTimeout(t);
        t = setTimeout(changeRem, 100);
    })
})()

var isString = function (source) {
    return typeof source === 'string'
}
var camelToInline = function (source) {
    return typeof source === 'string' ? source.replace(/([A-Z])/g, '-' + '$1').toLocaleLowerCase() : 'not string'
};

var inlineToCamel = function (source) {
    return  source.replace(/(-[a-z])/g, function (a, b) {return b.slice(1).toUpperCase()})
};

var getQueryParams = function (href) {
    var url = href.slice(href.indexOf('?'));
    var obj = {};
    var matches = url.match(/([^?&=\s]+)=?([^?&=\s]+)?/g) || [];
    matches.forEach(function (item) {
        var a = item.split('=');
        obj[a[0]] = a[1];
    });
    return obj
};