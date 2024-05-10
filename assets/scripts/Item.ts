import { _decorator, Color, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Item')
export class Item extends Component {
    setColor(c:Color){
        this.getComponent(Sprite).color=c;
    }
}


