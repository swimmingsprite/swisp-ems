

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

export function currentViewFilter(element, currentView, selectedPlaceId, depId) {

    if (element.placeId === selectedPlaceId && (element.departmentId === depId || depId === 0)) { //
        if (element.start >= currentView.startTimestamp && element.start < currentView.endTimestamp) return true;
        if (element.end >= currentView.startTimestamp && element.end < currentView.endTimestamp) return true;
        if (element.start < currentView.startTimestamp && element.end > currentView.endTimestamp) return true;
    }
    console.log("returning false");
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
        currentTimestamp: getCurrentTimestamp(),
        startTimestamp: currentView.startTimestamp+3600000,
        endTimestamp: currentView.endTimestamp+3600000
    }
}

export function getBackCurrentView(currentView) {
    return {
        currentTimestamp: getCurrentTimestamp(),
        startTimestamp: currentView.startTimestamp-3600000,
        endTimestamp: currentView.endTimestamp-3600000
    }
}

export function getEmployeesShiftNames(employees) {
    return employees.map((employee, index) => {
        return index === (employees.length-1) ? employee.name : employee.name+", "
    });
}












































































