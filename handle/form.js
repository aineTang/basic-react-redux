/**
 * Created by aine on 6/28/16.
 */
import store from "../store.js"
import {showEditorAction,showPreviewAction} from "../actions/action-form.js"

export function handlePreview(){
    store.dispatch(showEditorAction());
}
export function handleEditor(){
    store.dispatch(showPreviewAction());
}