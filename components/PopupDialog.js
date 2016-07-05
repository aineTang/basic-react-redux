import React,{ Component } from "react"
import _ from "lodash"

class PopupDialog extends Component{
    addItem(){
        let radioList = document.getElementsByClassName("dialog-radio");
        let selectedRadio = _.find(radioList,function (item){
           if (item.checked){
               return item;
           }
        });
        //关闭弹出框
        this.props.closeDialog(false);
        //调用添加函数
        this.props.addItem({
           type:selectedRadio.value
        });
    }
    close(){
        this.props.closeDialog(false);
    }
    render() {
        return (
            <div className="popup-dialog">
                <div>请选择您要增添的元素：</div>
                <div>
                    <input type="radio" className="dialog-radio" name="formElement" value="text" />文本
                    <br />
                    <input type="radio" className="dialog-radio" name="formElement" value="date" />日期
                </div>
                <button onClick={this.addItem.bind(this)}>选择</button>
                <button onClick={this.close.bind(this)}>关闭</button>
            </div>
        );
    }
}
export default PopupDialog