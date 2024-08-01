import * as Phaser from 'phaser';
import {Align} from '../src';

console.log('Hello, Demo!');

const Assets = {
    sprites: {
        king: './assets/king.png'
    }
}

export class DemoScene extends Phaser.Scene {
    preload() {
        this.load.image(Assets.sprites.king, Assets.sprites.king);

    }

    create() {
        console.log("DemoScene created...");

        const kingSprite = this.add.sprite(0, 0, Assets.sprites.king);
        const align = new Align();
        align
            .anchorSceneScreen(this)
            .center(kingSprite)

    }
}

const scaleConfig: Phaser.Types.Core.ScaleConfig = {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "game",
    width: 960,
    height: 640,
};

export type IPhaserConfig = Phaser.Types.Core.GameConfig;

export const phaserConfig: IPhaserConfig = {
    type: Phaser.AUTO,
    backgroundColor: 0x222222,
    transparent: true,
    scale: scaleConfig,
    scene: [new DemoScene(DemoScene.name)],
};

const game = new Phaser.Game(phaserConfig);
