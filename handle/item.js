/**
 * Created by aine on 6/28/16.
 */
import store from "../store.js"
import {addItemAction, removeItemAction} from "../actions/action-item.js"
export function handleAddItem(item){
    store.dispatch(addItemAction(item));
}
export function handleRemoveItem(index){
    store.dispatch(removeItemAction(index));
}
