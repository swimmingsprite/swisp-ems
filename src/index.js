import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider, useStore} from "react-redux";
import {combineReducers, createStore} from "redux";

var hello = "hello";

var rootReducer = (state = hello, action) => {
    console.log("REDUCER___________")
    console.log("state: "+state);
    console.log("action: "+{...action});
    return state;
}

var arrowClickReducer = (state = null , action) => {
    console.log("Arrow reducer: "+action.type+" text: "+action.text);
    return {...state, type: action.type};
}




// const store = createStore(rootReducer, arrowClickReducer);
const store = createStore(combineReducers(
    {rootReducer: rootReducer, arrowClickReducer: arrowClickReducer}
    ));



ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
