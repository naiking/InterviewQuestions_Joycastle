System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, Label, CheckArray, ArrayUtils, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, test2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCheckArray(extras) {
    _reporterNs.report("CheckArray", "./CheckArray", _context.meta, extras);
  }

  function _reportPossibleCrUseOfArrayUtils(extras) {
    _reporterNs.report("ArrayUtils", "./utils/ArrayUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      CheckArray = _unresolved_2.CheckArray;
    }, function (_unresolved_3) {
      ArrayUtils = _unresolved_3.ArrayUtils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b628bbDXbJDHYBY/lseknBv", "test2", undefined);
      /** Created by Naiking.
       *  2024-05-10 14:37:37
       *  
       */


      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("test2", test2 = (_dec = ccclass('test2'), _dec2 = property({
        type: EditBox
      }), _dec3 = property({
        type: EditBox
      }), _dec4 = property({
        type: EditBox
      }), _dec5 = property({
        type: Label
      }), _dec(_class = (_class2 = class test2 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "input1", _descriptor, this);

          _initializerDefineProperty(this, "input2", _descriptor2, this);

          _initializerDefineProperty(this, "targetNum", _descriptor3, this);

          _initializerDefineProperty(this, "rstLbl", _descriptor4, this);
        }

        start() {}

        calArySum() {
          if (!this.input1.string || !this.input2.string) {
            this.rstLbl.string = "请输入数组";
            return;
          }

          let ary1Str = this.input1.string.split(',');
          let ary1Num = (_crd && ArrayUtils === void 0 ? (_reportPossibleCrUseOfArrayUtils({
            error: Error()
          }), ArrayUtils) : ArrayUtils).stringArrayToNumberArray(ary1Str);
          let ary2str = this.input2.string.split(',');
          let ary2Num = (_crd && ArrayUtils === void 0 ? (_reportPossibleCrUseOfArrayUtils({
            error: Error()
          }), ArrayUtils) : ArrayUtils).stringArrayToNumberArray(ary2str);
          let taget = Number(this.targetNum.string);
          let rst = (_crd && CheckArray === void 0 ? (_reportPossibleCrUseOfCheckArray({
            error: Error()
          }), CheckArray) : CheckArray).checkDoubleAryWithSum(ary1Num, ary2Num, taget);
          this.rstLbl.string = rst ? "成立" : "不成立";
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "input1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "input2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetNum", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rstLbl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44b21fd085b52caec9582a325d5b405521a48daa.js.map