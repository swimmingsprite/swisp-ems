import {
    getBackCurrentView,
    getCurrentTimestamp,
    getInitEndTime,
    getInitStartTime,
    getNextCurrentView
} from "../logic/shifts/currentView";
import {useDispatch, useSelector, useStore} from "react-redux";

export var arrowClickReducer = (state = {lastAction: null}, action) => {
    console.log("Arrow reducer: " + action.type + " text: " + action.text);
    if (action.type.startsWith("ARROW")) return {...state, lastAction: action.type};
    return state;
}

export var rootReducer = (state = {currentSection: "Shifts"}, action) => {
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
    },
    selectedPlaceId: null,
    headerFilterHover: false
}


export var shiftReducer = (state = shifts, action) => {
    /*function handleHoverChange() {
        if (action.headerFilter.hover === false && action.headerFilter.timeout ) {
            setTimeout(() => {
                var headerFilter = useSelector(state => {
                    return state.shiftReducer.headerFilter.hover
                });
                if (headerFilter === false) {
                    var store = useStore();
                    store.dispatch({type: "HEADER_FILTER_HOVER_CHANGE", headerFilter: {hover: false, timeout: false}})
                }
            }, 500)
        }
        //{...state, headerFilter: action.headerFilter };
    }*/

    switch (action.type) {
        case "CURRENT_VIEW_CHANGE": return {...state, currentView: action.currentView};
        case "CURRENT_VIEW_CURRENT_TIMESTAMP_CHANGE": return {...state, currentView: {
            ...state.currentView, currentTimestamp: action.payload }};
        case "CURRENT_VIEW_ARROW_BACK_CLICK": return {...state, currentView: getBackCurrentView(state.currentView)};
        case "CURRENT_VIEW_ARROW_NEXT_CLICK": return {...state, currentView: getNextCurrentView(state.currentView)};
        case "CURRENT_PLACE_CHANGE": return {...state, selectedPlaceId: action.selectedPlaceId };
        case "HEADER_FILTER_HOVER_CHANGE": return {...state, headerFilterHover: action.headerFilterHover};

        default: return state;
    }
}

var places = [
    {
        id: 84486565,
        name: "Kaufland Slovenská",
        departments: [
            {
                id: 91354565,
                name: "oddelenie záhrad"
            }
        ]
    },
    {
        id: 97486256,
        name: "Kaufland Stredočeská",
        departments: [
            {
                id: 16549855,
                name: "oddelenie nápojov"
            }
        ]
    },
]

export var placeReducer = (state = places, action) => {
    switch (action.type) {
        case "PLACE_ADD": return {...state, places: [state.push(action.payload)]};
        default: return state;
    }
}

var user = {
    id: 1515584841,
    name: "John Barney",
    place: {
        id: 97486256,
        name: "Kaufland Stredočeská"
    }
}


export var userReducer = (state = user, action) => {
    switch (action.type) {
        // case "PLACE_ADD": return {...state, places: [state.push(action.payload)]};
        default: return state;
    }
}






























