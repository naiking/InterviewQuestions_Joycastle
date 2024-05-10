import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;
/**
 * 试题3 ：动画组件 
 */
@ccclass('AniButton')
export class AniButton extends Component {
    @property({ type: Sprite })
    bgSp: Sprite = null;
    start() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchCancel, this);
    }
    protected onDestroy(): void {
        this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(Node.EventType.TOUCH_END, this.onTouchCancel, this);
    }
    onTouchStart() {
        this.bgSp.grayscale = true;
    }
    onTouchCancel() {
        this.bgSp.grayscale = false;
    }
    update(deltaTime: number) {

    }
}


