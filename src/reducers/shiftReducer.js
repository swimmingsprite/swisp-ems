import {
    getBackCurrentView,
    getCurrentTimestamp,
    getInitEndTime,
    getInitStartTime,
    getNextCurrentView
} from "../logic/shifts/currentView";

//FOR TESTING ONLY
var shifts = {
    shifts: [
        {
            id: 68468484,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 240),
            employees: [
                {name: "Samiha Wilks", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Lillia Haigh", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Darrell Gibson", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 84486565,
            departmentId: 91359125
        },
        {
            id: 485545543,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Natalia Bell", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Juan Vang", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 62149855
        },
        {
            id: 97615486,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Tanvir Ruiz", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Willie Edge", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Rosalie Atkinson", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 62149855
        },
        {
            id: 9745659795,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Nelson Haley", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Vladimir Odonnell", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Kloe Travis", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 46749855
        },
        {
            id: 9846546546884,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Dawson Hodson", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Evelyn Vu", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Jarred Stein", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 98236855
        },
        {
            id: 9846848484,
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Patricia Metcalfe", id: 1885959, avatarImg: "image base64 <--", avatarColor: "red"},
                {name: "Leona Mahoney", id: 1885958, avatarImg: "image base64 <--", avatarColor: "green"},
                {name: "Bjorn Leon", id: 1885955, avatarImg: "image base64 <--", avatarColor: "violet"},
                {name: "Luis Shaw", id: 18887855, avatarImg: "image base64 <--", avatarColor: "violet"}
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