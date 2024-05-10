/** Created by Naiking.
 *  2024-05-10 14:37:37
 *  
 */
import { _decorator, Component, EditBox, Label, Node } from 'cc';
import { CheckArray } from './CheckArray';
import { ArrayUtils } from './utils/ArrayUtils';
const { ccclass, property } = _decorator;
@ccclass('test2')
export class test2 extends Component {
    @property({type:EditBox})
    input1:EditBox=null;
    @property({type:EditBox})
    input2:EditBox=null;
    @property({type:EditBox})
    targetNum:EditBox=null;
    @property({type:Label})
    rstLbl:Label=null;
    start(){
        
    }
    calArySum(){
        if(!this.input1.string||!this.input2.string)
            {
this.rstLbl.string="请输入数组";
                return;
            }
        let ary1Str=this.input1.string.split(',');
        let ary1Num=ArrayUtils.stringArrayToNumberArray(ary1Str);
        let ary2str=this.input2.string.split(',');
        let ary2Num=ArrayUtils.stringArrayToNumberArray(ary2str);
        let taget=Number(this.targetNum.string);
        let rst=CheckArray.checkDoubleAryWithSum(ary1Num,ary2Num,taget);
        this.rstLbl.string=rst?"成立":"不成立";
    }
    update(deltaTime:number){
        
    }
}