System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, EditBox, error, instantiate, Layout, Prefab, ScrollView, Item, CheckArray, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Test;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "./Item", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCheckArray(extras) {
    _reporterNs.report("CheckArray", "./CheckArray", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      error = _cc.error;
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      Item = _unresolved_2.Item;
    }, function (_unresolved_3) {
      CheckArray = _unresolved_3.CheckArray;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1e0ddYkKhGCKmj+sDjDc24", "Test", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'EditBox', 'error', 'instantiate', 'Layers', 'Layout', 'log', 'Node', 'Prefab', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Test", Test = (_dec = ccclass('Test'), _dec2 = property({
        type: EditBox
      }), _dec3 = property({
        type: EditBox
      }), _dec4 = property({
        type: ScrollView
      }), _dec5 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class Test extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "input_row", _descriptor, this);

          _initializerDefineProperty(this, "input_column", _descriptor2, this);

          _initializerDefineProperty(this, "scrollView", _descriptor3, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor4, this);

          this._colorAry = [Color.RED, Color.GREEN, Color.BLUE, Color.MAGENTA, Color.YELLOW];
          this.colorMap = [];
          this.rateX = 0.02;
          //前一个 或 上面的相同时的概率增加X
          this.rateY = 0.03;
          //前一个和上一个同时相同增加的概率Y
          this.baseRate = 0.2;
        }

        //平均概率 5种颜色的
        callDraw() {
          var row = this.input_row.string == '' ? Number(this.input_row.inputFlag) : Number(this.input_row.string);
          var column = this.input_column.string == '' ? Number(this.input_column.inputFlag) : Number(this.input_column.string);
          this.scrollView.content.removeAllChildren();
          this.scrollView.content.getComponent(Layout).constraintNum = column;
          this.colorMap.length = 0;

          for (var i = 0; i < row; i++) {
            this.colorMap[i] = [];
            var colorIdx = 0;

            for (var j = 0; j < column; j++) {
              if (i == 0 && j == 0) {
                colorIdx = this.getRandom();
              } else {
                colorIdx = this.getColorByIndex(i, j);
              }

              this.colorMap[i][j] = colorIdx;
              var node = instantiate(this.itemPrefab);
              this.scrollView.content.addChild(node);
              node.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
                error: Error()
              }), Item) : Item).setColor(this._colorAry[colorIdx]);
            }
          }
        }

        start() {
          var a = [10, 40, 5, 280];
          var b = [234, 5, 2, 148, 23];
          var v = 42;
          var rst = (_crd && CheckArray === void 0 ? (_reportPossibleCrUseOfCheckArray({
            error: Error()
          }), CheckArray) : CheckArray).checkDoubleAryWithSum(a, b, v);
          console.log(rst);
        }

        getRandom() {
          return Math.floor(Math.random() * this._colorAry.length);
        }

        getColorByIndex(m, n) {
          var left = this.colorMap[m][n - 1];
          var up = this.colorMap[m - 1] ? this.colorMap[m - 1][n] : null;

          if (left && up && left == up) {
            //该色只增加Y的概率
            var targetRate = this.rateY + this.baseRate;
            var otherRate = 0.25 * (1 - targetRate);
            var rdm = Math.random();

            if (rdm < targetRate) {
              //命中
              return left;
            } else {
              //从其他颜色中随机
              return this.randomExclude([0, 1, 2, 3, 4], left);
            }
          } else {
            var leftRate = this.rateX + this.baseRate;
            var upRate = this.rateX + this.baseRate;

            var _rdm = Math.random();

            if (left && _rdm <= leftRate) {
              return left;
            }

            if (up && _rdm <= leftRate + upRate) {
              return up;
            } //其他颜色随机


            return this.randomExcludeAry([0, 1, 2, 3, 4], [left, up]);
          }
        }

        randomExcludeAry(arr, excludeAry) {
          // 过滤出不等于excludeNum的数字
          var filtered = arr.filter(num => num !== excludeAry[0] && num !== excludeAry[1]); // 如果过滤后的数组为空,返回null

          if (filtered.length === 0) {
            error("数组为空 90", arr, excludeAry);
            return null;
          } // 从过滤后的数组中随机选取一个数字


          var randomIndex = Math.floor(Math.random() * filtered.length);
          var randomNum = filtered[randomIndex];
          return randomNum;
        }

        randomExclude(arr, excludeNum) {
          // 过滤出不等于excludeNum的数字
          var filtered = arr.filter(num => num !== excludeNum); // 如果过滤后的数组为空,返回null

          if (filtered.length === 0) {
            error("数组为空", arr, excludeNum);
            return null;
          } // 从过滤后的数组中随机选取一个数字


          var randomIndex = Math.floor(Math.random() * filtered.length);
          var randomNum = filtered[randomIndex];
          return randomNum;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "input_row", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "input_column", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18b5dc5f4f16667e981b14030b7555324f50f216.js.map