import * as Phaser from "phaser";
import packageInfo from "../package.json";
import { phaserConfig } from "./config";

console.log(`Hello, Demo ${packageInfo.version}!`);
new Phaser.Game(phaserConfig);
