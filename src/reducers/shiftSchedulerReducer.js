import {getCurrentTimestamp} from "../logic/shifts/currentView";
import {addMonth, handleDateClick, subMonth} from "../logic/shifts/scheduler";

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
    selected: [
        {
            id: 123,
            name: "Kaufland Stredočeská",
            departments: [
                {
                    id: 45454,
                    name: "oddelenie záhrad",
                    days: [
                        {
                            start: getCurrentTimestamp(),
                            end: getCurrentTimestamp() + 3600000 * 5,
                            times: [
                                {
                                    start: getCurrentTimestamp(),
                                    end: getCurrentTimestamp(),
                                    employees: [
                                        {
                                            id: 789,
                                            name: "John Barney",
                                            avatarColor: "orange",
                                            avatarImg: "base 64"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },


    ]
};

function isEmpty(array) {
    return !(array && array.length > 0);
}

function selectEmployee(state, employeeId) {
    let filteredEmployees = state.selectedEmployees.filter(e => e === employeeId)
    if (filteredEmployees && filteredEmployees.length < 1) state.selectedEmployees.push(employeeId);
    return state.selectedEmployees;
}

function getNewPlace(id) {
    if (!id) {
        console.log("getNewPlace wrong id");
        return null;
    }
    return {
        id: id,
        departments: []
    }
}

function isPlacePresent(places, placeId) {
    let filteredPlace = places.filter(p => p.id === placeId);
    //place ešte nieje v state
    if (isEmpty(filteredPlace)) return false;
    return true;
}

function isDepartmentPresent(place, depId) {

}

function getElementById(array, id) {
    let element = array.filter(p => p.id === id);
    if (isEmpty(element)) return null;
    return element;

}

function getNewDepartment(depId) {
    return {
        id: depId,
        days: []
    };
}

function addEmployee(state, employeeId, selectedPlaceId, selectedDepartmentId) {
    var places = state.selected; //todo rename selected
    if (!isPlacePresent(places, selectedPlaceId)) places.push(getNewPlace(selectedPlaceId));
    var place = getElementById(places, selectedPlaceId);
    if (!isDepartmentPresent(place, selectedDepartmentId)) place.departments.push(getNewDepartment(selectedDepartmentId));
    var department = getElementById(place.departments, selectedDepartmentId);



}


export var shiftSchedulerReducer = (state = scheduler, action) => {
    switch (action.type) {
        case "CALENDAR_DATE_CLICK":
            return {...state, selectedDays: handleDateClick(state, action.dayTimestamp)};
        case "SHIFT_SCHEDULER_ARROW_NEXT_CLICK":
            return {...state, currentMonth: addMonth(state.currentMonth)};
        case "SHIFT_SCHEDULER_ARROW_BACK_CLICK":
            return {...state, currentMonth: subMonth(state.currentMonth)};
        case "SCHEDULER_EMPLOYEE_ADD":
            return addEmployee(state, action.employeeId, action.selectedPlaceId, action.selectedDepartmentId)

        default:
            return state;
    }
}


/*{
           id: 123,
           name: "Kaufland Stredočeská",
           employees: [
               {
                   department: {
                       id: 45454,
                       name: "oddelenie záhrad"
                   },
                   employee: {
                       id: 789849,
                       name: "John Barney",
                       avatarColor: "orange",
                       avatarImg: "base 64"
                   },
                   dayStart: getCurrentTimestamp(),
                   dayEnd: getCurrentTimestamp(),//+3600000*5,
                   shiftStartHour: getCurrentTimestamp(),
                   shiftEnd: getCurrentTimestamp(),
               }
           ]
           ,
       }*/

