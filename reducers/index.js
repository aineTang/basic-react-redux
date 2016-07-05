import { combineReducers } from 'redux'
import actionType from "../actions/action-defination.js"
import _ from "lodash"

const initFormState = {
    status:"edit"
};
const initItemState = {
    items:[
    ]
};
const initDialogState = {
    isShowDialog:false
};

function formReducer(state=initFormState,action){
    switch (action.type) {
        case actionType.SHOW_EDITOR:
            return Object.assign({}, state, {
                status : "preview"
            });
        case actionType.SHOW_PREVIEW:
            return Object.assign({}, state, {
                status : "edit"
            });
        default:
            return state
    }
}

function itemReducer(state=initItemState,action){
    switch (action.type) {
        case actionType.ADD_FORM_ITEM:
            var addedItem = _.concat(state.items,action.item);
            return Object.assign({}, state, {
                items:addedItem
            });
        case actionType.REMOVE_FORM_ITEM:
            var removedItems = _.filter(state.items,(item,index)=>{
                return index != action.index;
            });
            return Object.assign({}, state, {
                items:removedItems
            });
        default:
            return state
    }
}

function dialogReducer(state=initDialogState,action){
    switch (action.type) {
        case actionType.OPERATE_DIALOG:
            return Object.assign({}, state, {
                isShowDialog:action.isShowDialog
            });
        default:
            return state
    }
}

let reducers = combineReducers({
    formState:formReducer,
    itemState:itemReducer,
    dialogState:dialogReducer
});

export default reducers
