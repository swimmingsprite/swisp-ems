

export function getInitStartTime() {
    var time = new Date().setHours(new Date().getHours(), 0, 0, 0);
    return new Date(time).getTime() - 18000000
}

export function getInitEndTime() {
    var time = new Date().setHours(new Date().getHours(), 0, 0, 0);
    return new Date(time).getTime() - 18000000
}

export function getCurrentTimestamp() {
    return new Date().getTime();
}













































































