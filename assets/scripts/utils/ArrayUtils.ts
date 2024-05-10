/** Created by Naiking.
 *  2023-06-21 15:31:54
 *  
 */
export class ArrayUtils {
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
    /**string[]----number[] */
    static stringArrayToNumberArray(arr: string[]): number[] {
        return arr.map(x => +x);
    }
    /**过滤掉重复元素 
     * 注意：不修改原始ary*/
    static filterRepeat(ary: number[]): number[] {
        return [...new Set(ary)]; 
    }
    /**判断a是否是b的子集*/
    static containsAll(aryA: number[], aryB: number[]): boolean {
        for (let num of aryA) {
          if (aryB.indexOf(num)==-1) {
            return false; 
          }
        }
        return true;
    }
}