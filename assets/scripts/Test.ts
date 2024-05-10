import { _decorator, Color, Component, EditBox, error, instantiate, Layers, Layout, log, Node, Prefab, ScrollView } from 'cc';
import { Item } from './Item';
import { CheckArray } from './CheckArray';
const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test extends Component {
    @property({type:EditBox})
    input_row:EditBox=null;
    @property({type:EditBox})
    input_column:EditBox=null;
    @property({type:ScrollView})
    scrollView:ScrollView=null;
    @property({type:Prefab})
    itemPrefab:Prefab=null;
    private _colorAry:Array<Color>=[Color.RED,Color.GREEN,Color.BLUE,Color.MAGENTA,Color.YELLOW];
    private colorMap:Array<Array<number>>=[];
    private rateX=0.02;//前一个 或 上面的相同时的概率增加X
    private rateY=0.03;//前一个和上一个同时相同增加的概率Y
    private baseRate=0.2;//平均概率 5种颜色的
    callDraw():void{
        
        let row=this.input_row.string==''?Number(this.input_row.inputFlag):Number(this.input_row.string);
        let column=this.input_column.string==''?Number(this.input_column.inputFlag):Number(this.input_column.string);
        this.scrollView.content.removeAllChildren();
        this.scrollView.content.getComponent(Layout).constraintNum=column;
        this.colorMap.length=0;

        for(let i=0;i<row;i++){
            this.colorMap[i]=[];
            let colorIdx=0;
            for(let j=0;j<column;j++){
                if(i==0&&j==0){
                    colorIdx=this.getRandom();
                   
                }else{
                     colorIdx=this.getColorByIndex(i,j);
                }
                this.colorMap[i][j]=colorIdx;
               let node= instantiate(this.itemPrefab);
               this.scrollView.content.addChild(node);
             
               
               node.getComponent(Item).setColor(this._colorAry[colorIdx]);
               
            }
        }
    }
    start() {
        let a = [10, 40, 5, 280];
        let b = [234, 5, 2, 148, 23];
        let v = 42;
        let rst=CheckArray.checkDoubleAryWithSum(a,b,v);
        console.log(rst);
    }
    getRandom(){
        return Math.floor(Math.random()*this._colorAry.length);
    }
    getColorByIndex(m:number,n:number){
        let left=this.colorMap[m][n-1];
        let up=this.colorMap[m-1]?this.colorMap[m-1][n]:null;
        if (left&&up&&left == up) {
            //该色只增加Y的概率
            let targetRate=this.rateY+this.baseRate;
            let otherRate=0.25*(1-targetRate);
            let rdm=Math.random();
            if(rdm<targetRate){
                //命中
                return left;
            }else{
                //从其他颜色中随机
                return this.randomExclude([0,1,2,3,4],left)
            }

        }else{
            let leftRate=this.rateX+this.baseRate;
            let upRate=this.rateX+this.baseRate;
            let rdm=Math.random();
            if(left&&rdm<=leftRate){
                return left;
            }
            if(up&&rdm<=leftRate+upRate){
                return up;
            }
            //其他颜色随机
            return this.randomExcludeAry([0,1,2,3,4],[left,up]);
        }
    }
    randomExcludeAry(arr: number[], excludeAry: number[]): number | null {
        // 过滤出不等于excludeNum的数字
        const filtered = arr.filter(num => (num !== excludeAry[0]&&num !== excludeAry[1]));
    
        // 如果过滤后的数组为空,返回null
        if (filtered.length === 0) {
            error("数组为空 90",arr,excludeAry);
            return null;
        }
    
        // 从过滤后的数组中随机选取一个数字
        const randomIndex = Math.floor(Math.random() * filtered.length);
        const randomNum = filtered[randomIndex];
    
        return randomNum;
    }
    randomExclude(arr: number[], excludeNum: number): number | null {
        // 过滤出不等于excludeNum的数字
        const filtered = arr.filter(num => num !== excludeNum);
    
        // 如果过滤后的数组为空,返回null
        if (filtered.length === 0) {
            error("数组为空",arr,excludeNum);
            return null;
        }
    
        // 从过滤后的数组中随机选取一个数字
        const randomIndex = Math.floor(Math.random() * filtered.length);
        const randomNum = filtered[randomIndex];
    
        return randomNum;
    }
    
    update(deltaTime: number) {
        
    }
}


