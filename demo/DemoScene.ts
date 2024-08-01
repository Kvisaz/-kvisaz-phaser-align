import Phaser from "phaser";
import { Align } from "../src";
import { Assets } from "./Assets";
import { cssColorToInt } from "./utils";
import {PhaserTextStyleConfig} from './types';

export class DemoScene extends Phaser.Scene {
  preload() {
    this.load.image(Assets.sprites.king, Assets.sprites.king);
  }

  create() {
    console.log("DemoScene created...");
    this.cameras.main.setBackgroundColor(cssColorToInt("#ced5c0"));

    const kingSprite = this.add.sprite(0, 0, Assets.sprites.king);

    const textStyle: PhaserTextStyleConfig = {
      fontSize: '32px',
      color: '#000000'
    }

    const text1 = this.add.text(0, 0, 'over Spite', textStyle);
    const text2 = this.add.text(0, 0, 'under Spite', textStyle);
    const text3 = this.add.text(0, 0, 'left from Spite', textStyle);
    const text4 = this.add.text(0, 0, 'right from Spite', textStyle);

    const distance = 24;
    /** create align object to layout what you need **/
    const align = new Align();
    align.anchorSceneScreen(this).center(kingSprite);

    align.anchor(kingSprite)
        .center(text1).topTo(text1, -distance)
        .center(text2).bottomTo(text2, distance)
        .center(text3).leftTo(text3, -distance)
        .center(text4).rightTo(text4, distance)


    const rect1 = this.add.rectangle(0,0, 64, 64, cssColorToInt('#be8e1a'));
    const rect2 = this.add.rectangle(0,0, 64, 64, cssColorToInt('#be8e1a'));
    const rect3 = this.add.rectangle(0,0, 64, 64, cssColorToInt('#be8e1a'));
    const rect4 = this.add.rectangle(0,0, 64, 64, cssColorToInt('#be8e1a'));

    const rectDistance = 8;
    align.anchor(text1).center(rect1).topTo(rect1, -rectDistance);
    align.anchor(text2).center(rect2).bottomTo(rect2, rectDistance);
    align.anchor(text3).center(rect3).leftTo(rect3, -rectDistance);
    align.anchor(text4).center(rect4).rightTo(rect4, rectDistance);
  }
}
