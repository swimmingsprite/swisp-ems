import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {arrowClickReducer, rootReducer} from "./reducers/reducers";

var hello = "hello";




// const store = createStore(rootReducer, arrowClickReducer);
/*
const store = createStore(combineReducers(
    {rootReducer: rootReducer, arrowClickReducer: arrowClickReducer}
    ));
*/

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
