import {getCurrentTimestamp, getInitEndTime, getInitStartTime} from "../logic/shifts/currentView";

export var arrowClickReducer = (state = {lastAction: null}, action) => {
    console.log("Arrow reducer: " + action.type + " text: " + action.text);
    if (action.type.startsWith("ARROW")) return {...state, lastAction: action.type};
    return state;
}
export var rootReducer = (state = {currentSection: "Home"}, action) => {
    console.log("REDUCER___________")
    console.log("state: " + state);
    console.log("action: " + {...action});

    if (action.type === "CURRENT_SECTION") {
        return {...state, currentSection: action.currentSection}
    }
    return state;
}


var shifts = {
    shifts: [
        {
            id: "6562656",
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 240),
            employees: [
                {name: "Jožo Baranek", id: 1885959, avatar: "image base64 <--", avatarColor: "red"},
                {name: "Majko Zguruna", id: 1885958, avatar: "image base64 <--", avatarColor: "green"},
                {name: "Harry Potter", id: 1885955, avatar: "image base64 <--", avatarColor: "violet"}
            ]
        }
    ],
    currentView: {
        currentTimestamp: getCurrentTimestamp(),
        startTimestamp: getInitStartTime(),
        endTimestamp: getInitEndTime(),
    }
}


export var shiftReducer = (state = shifts, action) => {
    switch (action.type) {
        case "CURRENT_VIEW_CHANGE": return {...state, currentView: action.currentView};
        default: return state;
    }

}