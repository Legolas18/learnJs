console.log("Hello")
function addEvent(elm, evType, fn, useCapture) {
    if (elm.addEventListener) {
            elm.addEventListener(evType, fn, useCapture);
    return true;
    }
    else if (elm.attachEvent) {
            var r = elm.attachEvent('on' + evType, fn);
            return r;
    }
    else {
            elm['on' + evType] = fn;
    }
}
