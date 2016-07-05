/**
 * Created by aine on 6/28/16.
 */
import actionType from "./action-defination.js"

export const showEditorAction = function(){
  return {
      type:actionType.SHOW_EDITOR
  }
};
export const showPreviewAction = function(){
  return {
      type:actionType.SHOW_PREVIEW
  }
};

