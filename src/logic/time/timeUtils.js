

export function timestampToShortDateTime(time) {
    return new Date(time).toLocaleDateString([], {day: '2-digit', month:'2-digit'})
        + '\u00A0\u00A0\u00A0'
        + new Date(time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}


export function timestampsToDateRange(time, time2) {
    console.log("time: "+time+" time2: "+time2)
    var date = new Date(time > time2 ? time2 : time)
        .toLocaleDateString([], {day: '2-digit', month:'2-digit'});

    var date2 = new Date(time > time2 ? time : time2)
        .toLocaleDateString([], {day: '2-digit', month:'2-digit'});

    if (date === date2) return date;

    return date
        + '\u00A0'
        +"-"
        +'\u00A0'
        + date2;
}



















