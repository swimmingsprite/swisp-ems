import {
    getBackCurrentView,
    getCurrentTimestamp,
    getInitEndTime,
    getInitStartTime,
    getNextCurrentView
} from "../logic/shifts/currentView";
import {
    addNewComment, deleteComment,
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
    avatarColor: "#fe0000",
    avatarImg: "data:image/png;base64,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",
    place: {
        id: 84486565,
        name: "Kaufland Stredočeská"
    }
}

/*
export var users = new Map();
users.set(user.id, ({avatarColor, avatarImg} = user))
*/


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
            authorId: 1515584841,
            avatarColor: "#fe0000",
            avatarImg: "data:image/png;base64,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",
            author: "John Barney",
            authorRole: "shop manager",
            text: "Hello World !",
            timestamp: 1605697781225,
            comments: [
                {
                    authorId: 1515584841,
                    author: "John Barney",
                    avatarImg: "data:image/png;base64,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",
                    avatarColor: "#fe0000",
                    id: Math.floor(Math.random() * 10000000),
                    statusId: 151439381,
                    text: "Some comment !",
                    timestamp: 1605697781225-10000
                },
                {
                    authorId: 29895646541,
                    author: "Titus Augustus",
                    avatarImg: "data:image/png;base64,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",
                    avatarColor: "#fdd835",
                    id: Math.floor(Math.random() * 10000000),
                    statusId: 281459381,
                    text: "Some second comment !",
                    timestamp: 1605697781225-30000
                },
                {
                    authorId: 1254846541,
                    author: "Bat Man",
                    avatarImg: "data:image/png;base64,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",
                    avatarColor: "#8e24aa",
                    id: Math.floor(Math.random() * 10000000),
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
        case "POST_ADD": return [...state, action.post];
        case "POST_DELETE": return [...deletePostFilter(state, action.postId)];
        case "POST_LIKE_TOGGLE":
            let newState = getStatePostLikeToggle(state, action.postId, action.userId);
            if (newState === null) return state;
            return [...state]
        case "COMMENTS_LIMIT_SET":
            return [...setCommentsLimit(state, action.postId, action.value)];
        case "COMMENT_ADD": return [...addNewComment(state, action.postId, action.comment)];
        case "COMMENT_DELETE": return [...deleteComment(state, action.postId, action.commentId)];

        default: return state;
    }
}






























