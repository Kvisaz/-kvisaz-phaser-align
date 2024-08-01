import Phaser from "phaser";
import { DemoScene } from "./DemoScene";

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
  backgroundColor: "#4488aa",
  transparent: true,
  scale: scaleConfig,
  scene: [new DemoScene(DemoScene.name)],
};
