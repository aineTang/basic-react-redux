/**
 * Created by aine on 6/28/16.
 */
import actionType from "./action-defination.js"
export const operateDialog = function(isShowDialog){
    return {
        type:actionType.OPERATE_DIALOG,
        isShowDialog
    }
};
