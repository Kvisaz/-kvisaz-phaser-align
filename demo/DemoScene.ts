import Phaser from "phaser";
import { Align } from "../src";
import { Assets } from "./Assets";
import { cssColorToInt } from "./utils";

export class DemoScene extends Phaser.Scene {
  preload() {
    this.load.image(Assets.sprites.king, Assets.sprites.king);
  }

  create() {
    console.log("DemoScene created...");
    this.cameras.main.setBackgroundColor(cssColorToInt("#ced5c0"));
    const kingSprite = this.add.sprite(0, 0, Assets.sprites.king);
    const align = new Align();
    align.anchorSceneScreen(this).center(kingSprite);
  }
}
