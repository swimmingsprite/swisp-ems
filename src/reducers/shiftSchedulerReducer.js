import {getCurrentTimestamp} from "../logic/shifts/currentView";
import {addMonth, handleDateClick, subMonth} from "../logic/shifts/scheduler";
import {isSameDate} from "../logic/time/timeUtils";

var scheduler = {
    employees: [
        {
            name: "Jozef Veselý", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red", place: {
                id: 84486565,
                name: "Kaufland Stredočeská"
            }
        },
        {
            name: "Jozef Funny", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green", place: {
                id: 84486565,
                name: "Kaufland Stredočeská"
            }
        },
        {
            name: "Sirius Black", id: 1885957, avatarImg: "image base64 <--", avatarColor: "blue", place: {
                id: 84486565,
                name: "Kaufland Stredočeská"
            }
        },
        {
            name: "Sirius White", id: 1885956, avatarImg: "image base64 <--", avatarColor: "orange", place: {
                id: 84486565,
                name: "Kaufland Stredočeská"
            }
        },
        {
            name: "Amanda Hamlet", id: 1885955, avatarImg: "image base64 <--", avatarColor: "brown", place: {
                id: 84486565,
                name: "Kaufland Stredočeská"
            }
        },
        {
            name: "George Stuff", id: 1885954, avatarImg: "image base64 <--", avatarColor: "violet", place: {
                id: 84486565,
                name: "Kaufland Stredočeská"
            }
        },
    ],
    selectedDays: [],
    selectedEmployees: [],
    currentMonth: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
    calendarLock: false,
    selected: [
        {
            id: 97486256,
            name: "Kaufland Stredočeská",
            employees: [
                {
                    departmentId: 16549855,
                    departmentName: "oddelenie nápojov",

                    id: 789849,
                    name: "John Barney",
                    avatarColor: "orange",
                    avatarImg: "base 64",

                    // dayStart: 1606149204314,
                    // dayEnd: 1606149204314,//+3600000*5,
                    shiftStart: getCurrentTimestamp(),
                    shiftEnd: getCurrentTimestamp(),
                },
                {
                    departmentId: 16549855,
                    departmentName: "oddelenie nápojov",

                    id: 289849,
                    name: "Jozo Banksy",
                    avatarColor: "orange",
                    avatarImg: "base 64",

                    // dayStart: 1656149204314,
                    // dayEnd: 1656149204314,
                    shiftStart: getCurrentTimestamp(),
                    shiftEnd: getCurrentTimestamp(),
                },
                {
                    departmentId: 98236855,
                    departmentName: "oddelenie zmrzlín",

                    id: 54549849,
                    name: "Majo Random",
                    avatarColor: "orange",
                    avatarImg: "base 64",

                    //dayStart: 1646099204314 + 3600000 * 5,
                    //dayEnd: 1646099204314 + 3600000 * 5,
                    shiftStart: 1646099204314 + 3600000 * 2,
                    shiftEnd: 1646099204314 + 3600000 * 10,
                },
                {
                    departmentId: 62149855,
                    departmentName: "oddelenie šamponov",

                    id: 65432454,
                    name: "Niekto Spriezviskom",
                    avatarColor: "orange",
                    avatarImg: "base 64",

                    //dayStart: 1646099204314 + 3600000 * 5,
                    //dayEnd: 1646099204314 + 3600000 * 5,
                    shiftStart: 1646099204314 + 3600000 * 2,
                    shiftEnd: 1646099204314 + 3600000 * 10,
                },
                {
                    departmentId: 62149855,
                    departmentName: "oddelenie šamponov",

                    id: 654324456454,
                    name: "Unikatne Meno",
                    avatarColor: "orange",
                    avatarImg: "base 64",

                    //dayStart: 1646199204314 + 3600000 * 5,
                    //dayEnd: 1646199204314 + 3600000 * 5,
                    shiftStart: 1646099204314 + 3600000 * 2,
                    shiftEnd: 1646099204314 + 3600000 * 11,
                },
                {
                    departmentId: 62149855,
                    departmentName: "oddelenie šamponov",

                    id: 55555324456454,
                    name: "Super Unikatnemeno",
                    avatarColor: "orange",
                    avatarImg: "base 64",

                    //dayStart: 1646199204314 + 3600000 * 5,
                    //dayEnd: 1646199204314 + 3600000 * 5,
                    shiftStart: 1646099204314 + 3600000 * 2,
                    shiftEnd: 1646099204314 + 3600000 * 250,
                },
                {
                    departmentId: 62149855,
                    departmentName: "oddelenie šamponov",

                    id: 11555324456454,
                    name: "Super Unikatnemeno2",
                    avatarColor: "orange",
                    avatarImg: "base 64",

                    //dayStart: 1646199204314 + 3600000 * 5,
                    //dayEnd: 1646199204314 + 3600000 * 5,
                    shiftStart: 1646996400000 + 3600000 * 0,
                    shiftEnd: 1646996400000 + 3600000 * 14,
                },
                /*{
                    departmentId: 25454,
                    departmentName: "oddelenie hračiek",

                    id: 55555324456454,
                    name: "Super Unikatnemeno2",
                    avatarColor: "orange",
                    avatarImg: "base 64",

                    //dayStart: 1646199204314 + 3600000 * 5,
                    //dayEnd: 1646199204314 + 3600000 * 5,
                    shiftStart: 1646099204314 + 3600000 * 2,
                    shiftEnd: 1646099204314 + 3600000 * 251,
                },*/
            ],
        },
    ]
};


function addEmployee(state, employee, selectedPlaceId, selectedDepartmentId) {
    var places = state.selected; //todo rename selected

    if (!isPlacePresent(places, selectedPlaceId)
        && employee
        && state.selectedDays && state.selectedDays.length > 0) places.push(getNewPlace(selectedPlaceId));
    var place = getElementById(places, selectedPlaceId);


    state.selectedDays.forEach(d => {
        let date = new Date(d);
        let trackId = Math.floor(Math.random() * 100000000000);

        /*najdi či už taky neexistuje*/

        place.employees.push({
            departmentId: selectedDepartmentId,
            departmentName: "department " + selectedDepartmentId,
            trackId: trackId,

            id: employee.id,
            name: employee.name,
            avatarColor: employee.avatarColor,
            avatarImg: employee.avatarImg,

            shiftStart: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), 12).getTime(),
            shiftEnd: new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), 12).getTime(),
        })
        state.selectedEmployees.push(trackId);
        state.calendarLock = true;
    })

    return state;
}


function removeSelected(state, employee) {
    /*
    * ak je selectnuty - vymaz vsetkych selectnutych
    *   1. filtruj selectnutych a ked sa nejaky rovna nejakemu v selectedDays,
    *  tak ho vymaz so selectnutych aj so selected days
    * ak selected length === 0 return
    *
    * ak nieje selectnuty - vymaz iba jeho
    *
    * */

    let isSelected = state.selectedEmployees.filter(trackId => trackId === employee.trackId).length > 0;


    //if (e.trackId === employee.trackId) found = true;

    if (!isSelected) state.selected.forEach(place => {
        let found = false;

        //vymaz zmenu zamestnanca
        place.employees = place.employees.filter(e => {
            if (e.trackId === employee.trackId) found = true;
            return e.trackId !== employee.trackId
        });


        //vymaz employeeho zo selected employees
        state.selectedEmployees = state.selectedEmployees.filter(trackId => trackId !== employee.trackId)


        //ak place nema ani jednoho employee vymza ho
        if (place.employees.length < 1) state.selected = state.selected.filter(p => p.id !== place.id)
        if (found) return state;
    })
    else state.selected.forEach(place => {
        place.employees = place.employees.filter(e => {
            let returnValue = true;
            state.selectedEmployees = state.selectedEmployees.filter(trackId => {
                if (trackId === e.trackId) returnValue = false;
                return trackId !== e.trackId
            })
            return returnValue;
        })
        if (place.employees.length < 1) state.selected = state.selected.filter(p => p.id !== place.id)
    })


    return state;
}

function selectedClick(state, employee) {
    let filteredEmp = state.selectedEmployees.filter(e => e === employee.trackId);
    //unselect if was selected
    if (filteredEmp.length > 0) state.selectedEmployees = state.selectedEmployees.filter(e => e !== employee.trackId);
    //select if wasn't selected
    else state.selectedEmployees.push(employee.trackId)
    return state;

}

function handleStartClick(state, type, value) {
    let selectedEmployees = [];
    let selEmp = [...state.selectedEmployees];
    //find all selected employees
    state.selected.forEach(place => {
        place.employees.filter(e => {
            let filEmp = selEmp.filter(s => {
                if (s === e.trackId) {selEmp = selEmp.filter(s => s !== e.trackId); return true;}
                return false;
            });
            //if (!isEmpty(filEmp))
                selectedEmployees.push(e);
        })
    });

    selectedEmployees.forEach((e) => {
        /*
        * posun dopredu ak nebude cas väčší ako end a bude to rovnaky deň
        * posuň dozadu ak to bude stale rovnaky deň
        *
        *
        * posun dopredu ak nie je viac ako 24h
        * posun dozadu ak je viac ako start
        *
        * */
        if (type === "START_ADD") {
            if (e.shiftStart + (60000 * 5) <= e.shiftEnd
                && isSameDate(new Date(e.shiftStart + (60000 * 5)), new Date(e.shiftStart) )) {

                e.shiftStart += (60000 * 5);}
        }
        else if (type === "START_SUB") {
            if (isSameDate(new Date(e.shiftStart - (60000 * 5)), new Date(e.shiftStart) )) {
                e.shiftStart -= (60000 * 5);
            }
        }
        else if (type === "END_ADD") {
            if ((e.shiftEnd + (60000 * 5)) - e.shiftStart <= (3600000 * 24)) {
                e.shiftEnd += (60000 * 5);
            }
        }
        else if (type === "END_SUB") {
            if ((e.shiftEnd - (60000 * 5)) >= e.shiftStart) {
                e.shiftEnd -= (60000 * 5);
            }
        }



    })

    return state;
}

export var shiftSchedulerReducer = (state = scheduler, action) => {
    switch (action.type) {
        case "CALENDAR_DATE_CLICK":
            return {...handleDateClick(state, action.dayTimestamp)};
        case "SHIFT_SCHEDULER_ARROW_NEXT_CLICK":
            return {...state, currentMonth: addMonth(state.currentMonth)};
        case "SHIFT_SCHEDULER_ARROW_BACK_CLICK":
            return {...state, currentMonth: subMonth(state.currentMonth)};
        case "SCHEDULER_EMPLOYEE_ADD":
            return addEmployee(state, action.employee, action.selectedPlaceId, action.selectedDepartmentId)
        case "CALENDAR_UNLOCK":
            return {...state, calendarLock: false};
        case "SELECTED_REMOVE":
            return {...removeSelected(state, action.employee)}
        case "SELECTED_CLICK":
            return {...selectedClick(state, action.employee)}
        case "SHIFT_START_BACK_CLICK": return {...handleStartClick(state, "START_SUB")};
        case "SHIFT_START_NEXT_CLICK": return {...handleStartClick(state, "START_ADD")};
        case "SHIFT_END_BACK_CLICK": return {...handleStartClick(state, "END_SUB")};
        case "SHIFT_END_NEXT_CLICK": return {...handleStartClick(state, "END_ADD")};

        default:
            return state;
    }
}


function getNewPlace(id) {
    if (!id) {
        console.log("getNewPlace wrong id");
        return null;
    }
    return {
        id: id,
        name: "Place " + id,   //todo fetch name from redux placeReducer
        employees: []
    }
}

function isPlacePresent(places, placeId) {
    let filteredPlace = places.filter(p => p.id === placeId);
    if (isEmpty(filteredPlace)) return false;
    return true;
}

function isDepartmentPresent(place, depId) {

}

function getElementById(array, id) {
    let element = array.filter(p => p.id === id);
    if (isEmpty(element)) return null;
    return element[0];

}

function getNewDepartment(depId) {
    return {
        id: depId,
        days: []
    };
}

/*______-*/

export function isEmpty(array) {
    return !(array.length > 0);
}

function selectEmployee(state, employeeId) {
    let filteredEmployees = state.selectedEmployees.filter(e => e === employeeId)
    if (filteredEmployees && filteredEmployees.length < 1) state.selectedEmployees.push(employeeId);
    return state.selectedEmployees;
}


export function uniqueDepartmentsFilter(v, i, a) {
    return a.findIndex(t => (t.departmentId === v.departmentId)) === i;
}

export function uniqueDaysFilter(v, i, a) {
    return a.findIndex(t => (t.dayStart === v.dayStart) && (t.dayEnd === v.dayEnd)) === i;
}

export function uniqueDayStarts(v, i, a, depId) {
    // return a.findIndex(t => (t.departmentId === v.departmentId) && t.departmentId === depId) === i;
    return a.findIndex(t => (t.departmentId === depId)) === i;
}

//arr2.filter((v, i, a) => a.findIndex(t => (t.label === v.label && t.value === v.value)) === i)

export function uniqueDayReducer(
    unique, o) {
    if (!unique.some(obj => obj.dayStart === o.dayStart && obj.dayEnd === o.dayEnd)) {
        unique.push(o);
    }
    return unique;
}

export function uniqueTimeReducer(
    unique, o) {
    if (!unique.some(obj => {
        //console.log("unique: "+unique+" o: "+o)
        return ((obj.shiftStart === o.shiftStart && obj.shiftEnd === o.shiftEnd)
            //m|| (obj.shiftStart === o.shiftStart) //&& obj.shiftEnd !== o.shiftEnd)
        )
        //return isSameDateRange(obj,o)

        //|| (obj.shiftStart === o.shiftStart && obj.shiftEnd !== o.shiftEnd)
    })) {
        unique.push(o);
    }
    return unique;
}


export function uniqueDepartmentsReducer(
    unique, o) {
    if (!unique.some(obj => {
        //console.log("unique: "+unique+" o: "+o)
        return obj.departmentId === o.departmentId
    })) {
        unique.push(o);
    }
    return unique;
}


export function uniqueDateReducer(
    unique, o) {

    // console.log("unique: "+unique+" o: "+o)

    if (!unique.some(obj => {
            // console.log("obj end: "+obj.shiftEnd+" o end: "+o.shiftEnd)
            //return (obj.shiftStart === o.shiftStart && obj.shiftEnd !== o.shiftEnd)
            return isSameDateRange(obj, o)
        }
    )) {
        unique.push(o);
    }
    return unique;
}

export function uniqueDateTimeReducer(
    unique, o) {

    // console.log("unique: "+unique+" o: "+o)

    if (!unique.some(obj => {
            // console.log("obj end: "+obj.shiftEnd+" o end: "+o.shiftEnd)
            return (obj.shiftStart === o.shiftStart && obj.shiftEnd !== o.shiftEnd)
            // return isSameDateRange(obj,o)
        }
    )) {
        unique.push(o);
    }
    return unique;
}


export function isSameDateRange(o1, o2) {

    //if (o1.shiftStart === o2.shiftStart && o1.shiftEnd === o2.shiftEnd) return true;
    if (isSameDate(new Date(o1.shiftStart), new Date(o2.shiftStart))
        && isSameDate(new Date(o1.shiftEnd), new Date(o2.shiftEnd))
        && isSameDate(new Date(o1.shiftStart), new Date(o1.shiftEnd))
    ) return true;

    if ((o1.shiftStart === o2.shiftStart && isSameDate(new Date(o1.shiftStart), new Date(o2.shiftStart)))
        && (o1.shiftEnd !== o2.shiftEnd) && isSameDate(new Date(o1.shiftEnd), new Date(o2.shiftEnd))
    ) return true;

    if ((o1.shiftStart === o2.shiftStart && isSameDate(new Date(o1.shiftStart), new Date(o2.shiftStart)))
        && (o1.shiftEnd === o2.shiftEnd) && isSameDate(new Date(o1.shiftEnd), new Date(o2.shiftEnd))
    ) return true;
    return false;


}

















