var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as Phaser from 'phaser';
console.log('Hello, Demo!');
var DemoScene = /** @class */ (function (_super) {
    __extends(DemoScene, _super);
    function DemoScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoScene.prototype.preload = function () {
    };
    DemoScene.prototype.create = function () {
        console.log("DemoScene created...");
    };
    return DemoScene;
}(Phaser.Scene));
export { DemoScene };
var scaleConfig = {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "game",
    width: 960,
    height: 640,
};
export var phaserConfig = {
    type: Phaser.AUTO,
    backgroundColor: 0x222222,
    transparent: true,
    scale: scaleConfig,
    scene: [new DemoScene(DemoScene.name)],
};
var game = new Phaser.Game(phaserConfig);
