import { Vec3 } from "cc";

/** Created by Naiking.
 *  2023-06-07 17:34:43
 *  
 */
export class MathUtil {
    constructor(){
        
    }
    static transAngle2Rotatoin(angle:number):number
    {
        return Math.floor(angle*180/Math.PI);
    }
    static transRotation2Angel(n:number):number
    {
        return n*Math.PI/180;
    }
    
   
    static randomAry(ary: Array<any>): void {
        var rdmIndex: number;
        var len: number = ary.length;
        var tmp: any;
        for (var i: number = 0; i < len; i++) {
            rdmIndex = i + Math.floor(Math.random() * (len - i));
            tmp = ary[i];
            ary[i] = ary[rdmIndex];
            ary[rdmIndex] = tmp;


        }
    }
    /**
     * 得到2个点的射线（与x轴正方向的夹角 [-Π,Π]
     * @param fromP 
     * @param to 
     * @returns 弧度
     */
    static getAngle(fromP:Vec3,to:Vec3):number
    {
        //平移到（0，0）
        let angle=Math.atan2(to.y-fromP.y,to.x-fromP.x);
        return angle;
    }
    static convertNumberToKMG(num: number): string {
      if (num === 0) {
        return '0';
      } else if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2).replace(/\.00$/, 'B');
      } else if (num >= 1000000) {
        return (num / 1000000).toFixed(2).replace(/\.00$/, 'M');
      } else if (num >= 1000) {
        return (num / 1000).toFixed(2).replace(/\.00$/, 'K');
      } else {
        return num.toString();
      }
    }
    
}