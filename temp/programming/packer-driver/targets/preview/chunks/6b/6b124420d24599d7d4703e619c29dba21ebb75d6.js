System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CheckArray, _crd;

  _export("CheckArray", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f41fuloXlE5pYYpanWwEaL", "CheckArray", undefined);

      /** Created by Naiking.
       *  2024-05-10 14:28:13
       *  
       */
      _export("CheckArray", CheckArray = class CheckArray {
        /**
         * 检测两个数组里的元素是否可以组成某个数的和
         * @param arr1 
         * @param arr2 
         * @param sum 
         * @returns 
         */
        static checkDoubleAryWithSum(arr1, arr2, target) {
          // 先排序
          arr1.sort((a, b) => a - b);
          arr2.sort((a, b) => a - b);
          var left = 0;
          var right = arr2.length - 1;

          while (left < arr1.length && right >= 0) {
            var sum = arr1[left] + arr2[right];

            if (sum === target) {
              return true; // 找到了一对和为 target 的元素
            } else if (sum < target) {
              left++; // 和太小,需要增加左指针
            } else {
              right--; // 和太大,需要减小右指针
            }
          }

          return false; // 没有找到合适的元素对
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b124420d24599d7d4703e619c29dba21ebb75d6.js.map