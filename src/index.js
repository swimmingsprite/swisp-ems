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

console.log(textEmojisToUnicode("Toto je sranda :o :* :'( ToT ;* :D :) :P haha"));


ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById("root"));
