
//FOR TESTING ONLY
var places = [
    {
        id: 84486565,
        name: "Supermarket Slovenská",
        departments: [
            {
                id: 91354565,
                name: "oddelenie nápojov"
            },
            {
                id: 91359125,
                name: "oddelenie drogérie"
            }
            , {
                id: 4364565,
                name: "oddelenie elektroniky"
            }
        ]
    },
    {
        id: 97486256,
        name: "Supermarket Stredočeská",
        departments: [
            {
                id: 16549855,
                name: "oddelenie nápojov"
            }
            , {
                id: 98236855,
                name: "oddelenie pečiva"
            }
            , {
                id: 62149855,
                name: "oddelenie elektroniky"
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