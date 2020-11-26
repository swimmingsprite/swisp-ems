export function isSelected(array, item) {
    return array.filter(e => e === item).length > 0;
}

export function addMonth(date) {
    if (date.getMonth() === 11) {
        var date1 = new Date(date.getFullYear() + 1, 1, 0);
        return date1;
    } else {
        var date2 = new Date(date.getFullYear(), date.getMonth() + 2, 0)
        return date2;
    }
}

export function subMonth(date) {
    if (date.getMonth() === 0) {
        var a = new Date(date.getFullYear() - 1, 12, 0);
        console.log("SUB JANUARY RETURN: " + a);
        return a;
    } else {
        var a = new Date(date.getFullYear(), date.getMonth(), 0)
        console.log("SUB NORMAL RETURN: " + a);
        return a;
    }
}

export function handleDateClick(state, dayTimestamp) {
    //ak sa den nachadza medzi selectnutymi dnami
    console.log("CLICK !")
    let filteredDays = state.selectedDays.filter(d => d === dayTimestamp);
    if (filteredDays.length > 0) {
        console.log("DESELECTUJEM DEN")
        state.selectedDays = state.selectedDays.filter(d => d !== filteredDays[0]);
        return state;
    } else if (filteredDays.length < 1) {
        console.log("SELECTUJEM DEN")
        state.selectedDays.push(dayTimestamp);
        if (state.calendarLock) {state.calendarLock = false; state.selectedEmployees = []}
        return state;
    }
}