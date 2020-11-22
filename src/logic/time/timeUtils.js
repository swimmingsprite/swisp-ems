

export function timestampToShortDateTime(time) {
    return new Date(time).toLocaleDateString([], {day: '2-digit', month:'2-digit'})
        + '\u00A0\u00A0\u00A0'
        + new Date(time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

export function timestampToShortTime(time) {
    return new Date(time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}


export function timestampsToDateRange(time, time2) {
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

export function isSameDateTime(date1, date2) {
    return date1.getTime() === date2.getTime();
}

export function isSameDate(date1, date2) {
    if (date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate()
    ) return true;
    return false;
}


export function getDayRangeWithDayOfWeek(st, e) {
    let start = new Date(st > e ? e : st);
    let end = new Date(st > e ? st : e);

    var days = ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota']; //todo refctor to redux
    if (!start || !end) return "";
    if (isSameDate(start, end)) return start.toLocaleDateString() + ", " + days[start.getDay()];

    else return start.toLocaleDateString() + ", " + days[start.getDay()] +
        end.toLocaleDateString() + ", " + days[end.getDay()];


}