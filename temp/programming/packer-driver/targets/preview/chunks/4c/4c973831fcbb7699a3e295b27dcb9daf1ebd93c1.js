System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ArrayUtils, _crd;

  _export("ArrayUtils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c2a6gnaVdJZaeVONcBRDhH", "ArrayUtils", undefined);

      /** Created by Naiking.
       *  2023-06-21 15:31:54
       *  
       */
      _export("ArrayUtils", ArrayUtils = class ArrayUtils {
        static randomAry(ary) {
          var rdmIndex;
          var len = ary.length;
          var tmp;

          for (var i = 0; i < len; i++) {
            rdmIndex = i + Math.floor(Math.random() * (len - i));
            tmp = ary[i];
            ary[i] = ary[rdmIndex];
            ary[rdmIndex] = tmp;
          }
        }
        /**string[]----number[] */


        static stringArrayToNumberArray(arr) {
          return arr.map(x => +x);
        }
        /**过滤掉重复元素 
         * 注意：不修改原始ary*/


        static filterRepeat(ary) {
          return [...new Set(ary)];
        }
        /**判断a是否是b的子集*/


        static containsAll(aryA, aryB) {
          for (var num of aryA) {
            if (aryB.indexOf(num) == -1) {
              return false;
            }
          }

          return true;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c973831fcbb7699a3e295b27dcb9daf1ebd93c1.js.map