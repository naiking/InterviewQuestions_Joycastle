System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MathUtil, _crd;

  _export("MathUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "634520b50RCmYFU5oN63kLc", "MathUtil", undefined);

      /** Created by Naiking.
       *  2023-06-07 17:34:43
       *  
       */
      __checkObsolete__(['Vec3']);

      _export("MathUtil", MathUtil = class MathUtil {
        constructor() {}

        static transAngle2Rotatoin(angle) {
          return Math.floor(angle * 180 / Math.PI);
        }

        static transRotation2Angel(n) {
          return n * Math.PI / 180;
        }

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
        /**
         * 得到2个点的射线（与x轴正方向的夹角 [-Π,Π]
         * @param fromP 
         * @param to 
         * @returns 弧度
         */


        static getAngle(fromP, to) {
          //平移到（0，0）
          let angle = Math.atan2(to.y - fromP.y, to.x - fromP.x);
          return angle;
        }

        static convertNumberToKMG(num) {
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=065ae087ed1e96fad98bd89cde3b92e86690139b.js.map