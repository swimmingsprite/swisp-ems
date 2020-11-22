import {
    getBackCurrentView,
    getCurrentTimestamp,
    getInitEndTime,
    getInitStartTime,
    getNextCurrentView
} from "../logic/shifts/currentView";

var shifts = {
    shifts: [
        {
            id: 68468484,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 240),
            employees: [
                {name: "Jožo Baranek", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Majko Zguruna", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Harry Potter", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 84486565,
            departmentId: 91359125
        },
        {
            id: 485545543,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Šamponov2 Veselý", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Sirius Black", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 62149855
        },
        {
            id: 97615486,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Šamponov Veselý", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Sirius Black", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 62149855
        },
        {
            id: 9745659795,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Hračiek Veselý", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Sirius Black", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 46749855
        },
        {
            id: 9846546546884,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Zmrzlin Veselý", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Sirius Black", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 98236855
        },
        {
            id: 9846848484,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Nápoje Veselý", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Sirius Black", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"},
                {name: "Sirius Black", id: 18887855, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 16549855
        },
    ],
    currentView: {
        currentTimestamp: getCurrentTimestamp(),
        startTimestamp: getInitStartTime(),
        endTimestamp: getInitEndTime(),
    },
    selectedPlaceId: null,
    currentShiftSubHeaderDepartmentId: null,
    schedulerSubHeaderDepartmentId: null,
}
export var shiftReducer = (state = shifts, action) => {
    switch (action.type) {
        case "CURRENT_VIEW_CHANGE":
            return {...state, currentView: action.currentView};
        case "CURRENT_VIEW_CURRENT_TIMESTAMP_CHANGE":
            return {
                ...state, currentView: {
                    ...state.currentView, currentTimestamp: action.payload
                }
            };
        case "CURRENT_VIEW_ARROW_BACK_CLICK":
            return {...state, currentView: getBackCurrentView(state.currentView)};
        case "CURRENT_VIEW_ARROW_NEXT_CLICK":
            return {...state, currentView: getNextCurrentView(state.currentView)};
        case "CURRENT_PLACE_CHANGE":
            return {...state, selectedPlaceId: action.selectedPlaceId};
        case "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE":
            return {...state, currentShiftSubHeaderDepartmentId: action.currentShiftSubHeaderDepartmentId};
        case "SCHEDULER_SUBHEADER_DEPARTMENT_CHANGE":
            return {...state, schedulerSubHeaderDepartmentId: action.schedulerSubHeaderDepartmentId};


        default:
            return state;
    }
}