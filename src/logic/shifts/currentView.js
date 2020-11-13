

export function getInitStartTime() {
    var time = new Date().setHours(new Date().getHours(), 0, 0, 0);
    return new Date(time).getTime() - 18000000
}

export function getInitEndTime() {
    var time = new Date().setHours(new Date().getHours(), 0, 0, 0);
    return new Date(time).getTime() + 18000000 - 1
}

export function getCurrentTimestamp() {
    return new Date().getTime();
}

export function currentViewFilter(shift, currentView) {
    console.log("FILTER: "+shift+" cview: "+currentView)
    if (shift.start >= currentView.startTimestamp && shift.start < currentView.endTimestamp) return true;
    if (shift.end >= currentView.startTimestamp && shift.end < currentView.endTimestamp) return true;
    if (shift.start < currentView.startTimestamp && shift.end > currentView.endTimestamp) return true;
    return false;
}

export function getElementLeft(elementStart, currentView) {
    var length = (currentView.endTimestamp - currentView.startTimestamp);
    var onePercent = length / 100;
    return (elementStart - currentView.startTimestamp) / onePercent;
}

export function getElementWidth(shift, currentView) {
    var length = (currentView.endTimestamp - currentView.startTimestamp);
    var onePercent = length / 100;
    return (shift.end - shift.start) / onePercent;
}

export function getNextCurrentView(currentView) {
    return {
        currentTimeStamp: getCurrentTimestamp(),
        startTimestamp: currentView.startTimestamp+3600000,
        endTimestamp: currentView.endTimestamp+3600000
    }
}

export function getBackCurrentView(currentView) {
    return {
        currentTimeStamp: getCurrentTimestamp(),
        startTimestamp: currentView.startTimestamp-3600000,
        endTimestamp: currentView.endTimestamp-3600000
    }
}












































































