/**
 * Created by aine on 6/28/16.
 */
import store from "../store.js"
import { operateDialog } from "../actions/action-dialog.js"

export const handleDialog = function(boo){
    store.dispatch(operateDialog(boo));
};
