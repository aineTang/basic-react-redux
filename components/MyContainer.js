import React,{ Component } from "react"
import FormEditor from "./FormEditor.js"
import FormPreviewer from "./FormPreviewer.js"
import PopupDialog from "./PopupDialog.js"
import {handleDialog} from "../handle/dialog.js"
import {handlePreview,handleEditor} from "../handle/form.js"
import {handleAddItem,handleRemoveItem} from "../handle/item.js"
// import {handlePreview,handleEditor} from "../handle/form.js"
class MyContainer extends Component{
    popupDialog(){
        var isShowDialog = true;
        handleDialog(isShowDialog);
    }
    showPreview(){
        handlePreview();
    }
    showEditor(){
        handleEditor();
    }
    removeItem(index){
        handleRemoveItem(index);
    }
    closeDialog(boolean){
        handleDialog(boolean);
    }
    addItem(item){
        handleAddItem(item);
    }
    render(){
        return (
            <div className="position-ralative">
                <div>
                    {
                        (() =>{
                            if (this.props.status == "edit"){
                                return (<button onClick={this.showPreview}>预览</button>)
                            }
                            else{
                                return (<button onClick={this.showEditor}>编辑</button>)
                            }
                        })()
                    }
                </div>
                {
                    (() =>{
                        if (this.props.status == "edit"){
                            return (<FormEditor items={this.props.items} removeItem={this.removeItem.bind(this)}></FormEditor>)
                        }
                        else{
                            return (<FormPreviewer items={this.props.items}></FormPreviewer>)
                        }
                    })()
                }
                <div>
                    {
                        (() =>{
                            if (this.props.status == "edit"){
                                return (<button onClick={this.popupDialog}>+</button>)
                            }
                            else{
                                return (<button>提交</button>)
                            }
                        })()
                    }
                </div>
                <div>
                    {
                        (() =>{
                            if (this.props.isShowDialog){
                                return (<PopupDialog closeDialog={this.closeDialog} addItem={this.addItem}></PopupDialog>)
                            }
                        })()
                    }
                </div>
            </div>
        )
    }
}
export default MyContainer