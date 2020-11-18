import {
    getBackCurrentView,
    getCurrentTimestamp,
    getInitEndTime,
    getInitStartTime,
    getNextCurrentView
} from "../logic/shifts/currentView";
import {
    addNewComment,
    deletePostFilter,
    elementTimestampCompareTo,
    getStatePostLikeToggle,
    setCommentsLimit
} from "../logic/Posts";

export var arrowClickReducer = (state = {lastAction: null}, action) => {
    if (action.type.startsWith("ARROW")) return {...state, lastAction: action.type};
    return state;
}

export var rootReducer = (state = {currentSection: "Home"}, action) => {

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
            ],
            placeId: 84486565,
            departmentId: 91359125
        },
        {
            id: "808985",
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Šamponov2 Veselý", id: 1885959, avatar: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatar: "image base64 <--", avatarColor: "green"},
                {name: "Sirius Black", id: 1885955, avatar: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 62149855
        },
        {
            id: "808985",
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Šamponov Veselý", id: 1885959, avatar: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatar: "image base64 <--", avatarColor: "green"},
                {name: "Sirius Black", id: 1885955, avatar: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 62149855
        },
        {
            id: "808985",
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Hračiek Veselý", id: 1885959, avatar: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatar: "image base64 <--", avatarColor: "green"},
                {name: "Sirius Black", id: 1885955, avatar: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 46749855
        },
        {
            id: "808985",
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Zmrzlin Veselý", id: 1885959, avatar: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatar: "image base64 <--", avatarColor: "green"},
                {name: "Sirius Black", id: 1885955, avatar: "image base64 <--", avatarColor: "violet"}
            ],
            placeId: 97486256,
            departmentId: 98236855
        },
        {
            id: "808985",
            start: new Date().getTime() - (60000 * 540),
            end: new Date().getTime() + (60000 * 140),
            employees: [
                {name: "Nápoje Veselý", id: 1885959, avatar: "image base64 <--", avatarColor: "red"},
                {name: "Angela Funny", id: 1885958, avatar: "image base64 <--", avatarColor: "green"},
                {name: "Sirius Black", id: 1885955, avatar: "image base64 <--", avatarColor: "violet"}
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
    headerFilterHover: false,
    currentShiftsSubHeaderFilterHover: false
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
        case "HEADER_FILTER_HOVER_CHANGE":
            return {...state, headerFilterHover: action.headerFilterHover};
        case "CURRENT_SHIFT_SUBHEADER_DEPARTMENT_CHANGE":
            return {...state, currentShiftSubHeaderDepartmentId: action.currentShiftSubHeaderDepartmentId};
        case "CURRENT_SHIFT_SUBHEADER_HOVER_CHANGE":
            return {...state, currentShiftsSubHeaderFilterHover: action.currentShiftsSubHeaderFilterHover};

        default:
            return state;
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
            },
            {
                id: 91359125,
                name: "oddelenie drogéria"
            }
            , {
                id: 4364565,
                name: "oddelenie čokolad"
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
            , {
                id: 98236855,
                name: "oddelenie zmrzlín"
            }
            , {
                id: 62149855,
                name: "oddelenie šamponov"
            }
            , {
                id: 46749855,
                name: "oddelenie hračiek"
            },
        ]
    },
]

export var placeReducer = (state = places, action) => {
    switch (action.type) {
        case "PLACE_ADD":
            return {...state, places: [state.push(action.payload)]};
        default:
            return state;
    }
}

var user = {
    id: 1515584841,
    name: "John Barney",
    employeeRole: "shop manager",
    place: {
        id: 84486565,
        name: "Kaufland Stredočeská"
    }
}


export var userReducer = (state = user, action) => {
    switch (action.type) {
        // case "PLACE_ADD": return {...state, places: [state.push(action.payload)]};
        default:
            return state;
    }
}


var posts =
    [
        {
            id: 151439381,
            authorId: 962158763,
            author: "John Barney",
            authorRole: "shop manager",
            text: "Hello World !",
            timestamp: 1605697781225,
            comments: [
                {
                    commentId: Math.floor(Math.random() * 10000000),
                    statusId: 151439381,
                    text: "Some comment !",
                    timestamp: 1605697781225-10000
                },
                {
                    commentId: Math.floor(Math.random() * 10000000),
                    statusId: 281459381,
                    text: "Some second comment !",
                    timestamp: 1605697781225-30000
                },
                {
                    commentId: Math.floor(Math.random() * 10000000),
                    statusId: 151432591,
                    text: "Some third comment !",
                    timestamp: 1605697781225-50000
                },
            ],
            likes: [953232, 966255, 97632323],
            commentsLimit: 0,
            commentsCount: 3
        },
    ];


export var postReducer = (state = posts, action) => {
    switch (action.type) {
        case "POST_ADD": return [...state, action.post];//.sort(elementTimestampCompareTo);
        case "POST_DELETE": return [...deletePostFilter(action.id)];
        case "POST_LIKE_TOGGLE":
            var newState = getStatePostLikeToggle(state, action.postId, action.userId);
            if (newState === null) return state;
            return [...state].sort(elementTimestampCompareTo);
        case "COMMENTS_LIMIT_SET":
            return [...setCommentsLimit(state, action.postId, action.value)];//.sort(elementTimestampCompareTo);
        case "COMMENT_ADD": return [...addNewComment(state, action.postId, action.comment)];//.sort(elementTimestampCompareTo);
        default: return state;
    }
}






























