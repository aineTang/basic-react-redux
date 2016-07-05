/**
 * Created by aine on 6/28/16.
 */
import actionType from "./action-defination.js"

export const addItemAction = function(item){
  return {
      type:actionType.ADD_FORM_ITEM,
      item
  }
};
export const removeItemAction = function(index){
  return {
      type:actionType.REMOVE_FORM_ITEM,
      index
  }
};