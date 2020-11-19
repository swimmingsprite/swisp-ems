import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {
    arrowClickReducer,
    placeReducer,
    postReducer,
    rootReducer,
    shiftReducer,
    userReducer
} from "./reducers/reducers";
import {textEmojisToUnicode} from "./logic/emojis/emojis";

const store = createStore(combineReducers(
    {rootReducer: rootReducer,
        arrowClickReducer: arrowClickReducer,
        shiftReducer: shiftReducer,
        userReducer: userReducer,
        placeReducer: placeReducer,
        postReducer: postReducer
    }
    ));

console.log("STORE VALUES: "+Object.keys(store));

/*todo activate only if shift section is active*/
setInterval(() => {
    console.log("UPDATING CURRENT TIMESTAMP... "+new Date().getTime())
    store.dispatch({
        type: "CURRENT_VIEW_CURRENT_TIMESTAMP_CHANGE",
        payload: new Date().getTime()
    })
},20000)




ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById("root"));


//colors
//var colors = ["#e53935","#d81b60","#8e24aa","#5e35b1","#3949ab","#1e88e5","#039be5","#00acc1","#00897b","#43a047","#7cb342","#c0ca33","#fdd835","#ffb300","#fb8c00","#f4511e","#6d4c41","#757575","#546e7a"];