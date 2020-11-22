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
                            end: getCurrentTimestamp(),//+3600000*5,
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
                            end: getCurrentTimestamp(),//+3600000*5,
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
                                        },
                                        {
                                            id: 789,
                                            name: "John Barney",
                                            avatarColor: "orange",
                                            avatarImg: "base 64"
                                        },
                                        {
                                            id: 789,
                                            name: "John Barney",
                                            avatarColor: "orange",
                                            avatarImg: "base 64"
                                        },
                                        {
                                            id: 789,
                                            name: "John Barney",
                                            avatarColor: "orange",
                                            avatarImg: "base 64"
                                        },
                                        {
                                            id: 789,
                                            name: "John Barney",
                                            avatarColor: "orange",
                                            avatarImg: "base 64"
                                        },
                                        {
                                            id: 789,
                                            name: "John Barney",
                                            avatarColor: "orange",
                                            avatarImg: "base 64"
                                        }
                                    ]
                                },
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
export var shiftSchedulerReducer = (state = scheduler, action) => {
    switch (action.type) {
        case "CALENDAR_DATE_CLICK":
            return {...state, selectedDays: handleDateClick(state, action.dayTimestamp)};
        case "SHIFT_SCHEDULER_ARROW_NEXT_CLICK":
            return {...state, currentMonth: addMonth(state.currentMonth)};
        case "SHIFT_SCHEDULER_ARROW_BACK_CLICK":
            return {...state, currentMonth: subMonth(state.currentMonth)};

        default:
            return state;
    }
}