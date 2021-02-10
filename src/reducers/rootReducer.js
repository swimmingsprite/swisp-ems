export var rootReducer = (state = {currentSection: "Shifts"}, action) => {

    switch(action.type) {
        case "CURRENT_SECTION": return {...state, currentSection: action.currentSection}
        case "NOTIFICATION_ADD": return {...state, notification: {text: action.text, id: action.id}}
        case "NOTIFICATION_REMOVE":
            if (state.notification.id === action.id ) return {...state, notification: null}
            return state;
    }
    return state;
}




























