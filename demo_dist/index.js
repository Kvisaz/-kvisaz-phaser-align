"use strict";
(self["webpackChunkphaser_align"] = self["webpackChunkphaser_align"] || []).push([["index"],{

/***/ "./demo/index.ts":
/*!***********************!*\
  !*** ./demo/index.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoScene": () => (/* binding */ DemoScene),
/* harmony export */   "phaserConfig": () => (/* binding */ phaserConfig)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src */ "./src/index.ts");


console.log("Hello, Demo!");
const Assets = {
  sprites: {
    king: "./assets/king.png"
  }
};
class DemoScene extends phaser__WEBPACK_IMPORTED_MODULE_0__.Scene {
  preload() {
    this.load.image(Assets.sprites.king, Assets.sprites.king);
  }
  create() {
    console.log("DemoScene created...");
    const kingSprite = this.add.sprite(0, 0, Assets.sprites.king);
    const align = new _src__WEBPACK_IMPORTED_MODULE_1__.Align();
    align.anchorSceneScreen(this).center(kingSprite);
  }
}
const scaleConfig = {
  mode: phaser__WEBPACK_IMPORTED_MODULE_0__.Scale.FIT,
  autoCenter: phaser__WEBPACK_IMPORTED_MODULE_0__.Scale.CENTER_BOTH,
  parent: "game",
  width: 960,
  height: 640
};
const phaserConfig = {
  type: phaser__WEBPACK_IMPORTED_MODULE_0__.AUTO,
  backgroundColor: 2236962,
  transparent: true,
  scale: scaleConfig,
  scene: [new DemoScene(DemoScene.name)]
};
const game = new phaser__WEBPACK_IMPORTED_MODULE_0__.Game(phaserConfig);


/***/ }),

/***/ "./src/Align.ts":
/*!**********************!*\
  !*** ./src/Align.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Align": () => (/* binding */ Align)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);


const _Align = class {
  constructor(anchorItem) {
    if (anchorItem)
      this.anchorItem = anchorItem;
  }
  /**
   * объект относительно которого надо выравнивать
   * @param item
   */
  anchor(item) {
    this.anchorItem = item;
    return this;
  }
  /**
   * Для выравнивания относительно экрана
   * создается легкий делегат с нулевыми координатами
   * @param width
   * @param height
   */
  anchorScreen(width, height) {
    return this.anchor({
      getBounds: () => new phaser__WEBPACK_IMPORTED_MODULE_0__.Geom.Rectangle(0, 0, width, height)
    });
  }
  anchorSceneScreen(scene) {
    const { width, height } = scene.cameras.main;
    return this.anchorScreen(width, height);
  }
  center(item, oX = 0, oY = 0) {
    return this.applyFormula(item, oX, oY, ({ aB, iB }) => ({
      x: aB.x + (aB.width - iB.width) / 2,
      y: aB.y + (aB.height - iB.height) / 2
    }));
  }
  centerX(item, oX = 0) {
    return this.applyFormula(item, oX, 0, ({ aB, iB }) => ({
      x: aB.x + (aB.width - iB.width) / 2,
      y: iB.y
    }));
  }
  centerY(item, oY = 0) {
    return this.applyFormula(item, 0, oY, ({ aB, iB }) => ({
      x: iB.x,
      y: aB.y + (aB.height - iB.height) / 2
    }));
  }
  bottomIn(item, oY = 0) {
    return this.applyFormula(item, 0, oY, ({ aB, iB }) => ({
      x: iB.x,
      y: aB.y + (aB.height - iB.height)
    }));
  }
  bottomTo(item, oY = 0) {
    return this.applyFormula(item, 0, oY, ({ aB, iB }) => ({
      x: iB.x,
      y: aB.y + aB.height
    }));
  }
  topIn(item, oY = 0) {
    return this.applyFormula(item, 0, oY, ({ aB, iB }) => ({
      x: iB.x,
      y: aB.y
    }));
  }
  topTo(item, oY = 0) {
    return this.applyFormula(item, 0, oY, ({ aB, iB }) => ({
      x: iB.x,
      y: aB.y - iB.height
    }));
  }
  rightIn(item, oX = 0) {
    return this.applyFormula(item, oX, 0, ({ aB, iB }) => ({
      x: aB.x + (aB.width - iB.width),
      y: iB.y
    }));
  }
  rightTo(item, oX = 0) {
    return this.applyFormula(item, oX, 0, ({ aB, iB }) => ({
      x: aB.x + aB.width,
      y: iB.y
    }));
  }
  leftIn(item, oX = 0) {
    return this.applyFormula(item, oX, 0, ({ aB, iB }) => ({
      x: aB.x,
      y: iB.y
    }));
  }
  leftTo(item, oX = 0) {
    return this.applyFormula(item, oX, 0, ({ aB, iB }) => ({
      x: aB.x - iB.width,
      y: iB.y
    }));
  }
  /**
   * @method setPosition - размещает объект с любым Origin
   * для использования в цепочках с выравниванием по анкору
   * @param item
   * @param left
   * @param top
   */
  setPosition(item, left, top) {
    _Align.setLeftTop(item, left, top);
    return this;
  }
  /**
   * @method setLeftTop - размещает объект с любым Origin
   * для использования без создания Align
   * когда нужно просто разместить объект
   * @param item
   * @param left
   * @param top
   */
  static setLeftTop(item, left, top) {
    const iB = item.getBounds();
    const dX = left - iB.left;
    const dY = top - iB.top;
    const x = item.x + dX;
    const y = item.y + dY;
    item.setPosition(x, y);
  }
  // выстроить объекты в ряд с расстоянием dX, друг за другом
  row(items, dX) {
    this.anchor(items[0]);
    for (let i = 1; i < items.length; i++) {
      const next = items[i];
      this.rightTo(next, dX);
      this.anchor(next);
    }
    return this;
  }
  // выстроить объекты в колонку с расстоянием dY, друг за другом
  column(items, dY) {
    this.anchor(items[0]);
    for (let i = 1; i < items.length; i++) {
      const next = items[i];
      this.bottomTo(next, dY);
      this.anchor(next);
    }
    return this;
  }
  applyFormula(item, oX, oY, formula) {
    const { anchorItem } = this;
    if (anchorItem == null) {
      console.warn(_Align.errorSetAnchorMessage);
      return this;
    }
    if (item == null) {
      console.warn(_Align.errorSetAnchorMessage);
      return this;
    }
    const { x, y } = formula(this.getBounds(item, anchorItem));
    this.setPosition(item, x + oX, y + oY);
    return this;
  }
  getBounds(item, anchor) {
    return {
      aB: anchor == null ? void 0 : anchor.getBounds(),
      iB: item == null ? void 0 : item.getBounds()
    };
  }
};
let Align = _Align;
Align.errorSetAnchorMessage = "set anchor in Align first";


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Align": () => (/* reexport safe */ _Align__WEBPACK_IMPORTED_MODULE_0__.Align)
/* harmony export */ });
/* harmony import */ var _Align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Align */ "./src/Align.ts");




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./demo/index.ts"));
/******/ }
]);
//# sourceMappingURL=index.js.map