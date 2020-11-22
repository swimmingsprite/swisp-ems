export var rootReducer = (state = {currentSection: "Shifts"}, action) => {

    if (action.type === "CURRENT_SECTION") {
        return {...state, currentSection: action.currentSection}
    }
    return state;
}




























