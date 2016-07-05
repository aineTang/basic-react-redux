import ReactDOM from "react-dom"
import React from "react"
import MyContainer from "./components/MyContainer"
import store from "./store.js"
let rootElement = document.getElementById("root");

function render(){
    ReactDOM.render(
        <MyContainer isShowDialog={store.getState().dialogState.isShowDialog}
                     status={store.getState().formState.status}
                     items={store.getState().itemState.items}></MyContainer>,
        rootElement
    );
}
render();
store.subscribe(render);