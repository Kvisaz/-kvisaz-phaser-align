"use strict";
(self["webpackChunk_kvisaz_phaser_align"] = self["webpackChunk_kvisaz_phaser_align"] || []).push([["index"],{

/***/ "./demo/Assets.ts":
/*!************************!*\
  !*** ./demo/Assets.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Assets": () => (/* binding */ Assets)
/* harmony export */ });
const Assets = {
  sprites: {
    king: "./assets/king.png"
  }
};


/***/ }),

/***/ "./demo/DemoScene.ts":
/*!***************************!*\
  !*** ./demo/DemoScene.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoScene": () => (/* binding */ DemoScene)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src */ "./src/index.ts");
/* harmony import */ var _Assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets */ "./demo/Assets.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./demo/utils.ts");




class DemoScene extends (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scene) {
  preload() {
    this.load.image(_Assets__WEBPACK_IMPORTED_MODULE_2__.Assets.sprites.king, _Assets__WEBPACK_IMPORTED_MODULE_2__.Assets.sprites.king);
  }
  create() {
    console.log("DemoScene created...");
    this.cameras.main.setBackgroundColor((0,_utils__WEBPACK_IMPORTED_MODULE_3__.cssColorToInt)("#ced5c0"));
    const kingSprite = this.add.sprite(0, 0, _Assets__WEBPACK_IMPORTED_MODULE_2__.Assets.sprites.king);
    const textStyle = {
      fontSize: "32px",
      color: "#000000"
    };
    const text1 = this.add.text(0, 0, "over Spite", textStyle);
    const text2 = this.add.text(0, 0, "under Spite", textStyle);
    const text3 = this.add.text(0, 0, "left from Spite", textStyle);
    const text4 = this.add.text(0, 0, "right from Spite", textStyle);
    const distance = 24;
    const align = new _src__WEBPACK_IMPORTED_MODULE_1__.Align();
    align.anchorSceneScreen(this).center(kingSprite);
    align.anchor(kingSprite).center(text1).topTo(text1, -distance).center(text2).bottomTo(text2, distance).center(text3).leftTo(text3, -distance).center(text4).rightTo(text4, distance);
    const rect1 = this.add.rectangle(0, 0, 64, 64, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.cssColorToInt)("#be8e1a"));
    const rect2 = this.add.rectangle(0, 0, 64, 64, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.cssColorToInt)("#be8e1a"));
    const rect3 = this.add.rectangle(0, 0, 64, 64, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.cssColorToInt)("#be8e1a"));
    const rect4 = this.add.rectangle(0, 0, 64, 64, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.cssColorToInt)("#be8e1a"));
    const rectDistance = 8;
    align.anchor(text1).center(rect1).topTo(rect1, -rectDistance);
    align.anchor(text2).center(rect2).bottomTo(rect2, rectDistance);
    align.anchor(text3).center(rect3).leftTo(rect3, -rectDistance);
    align.anchor(text4).center(rect4).rightTo(rect4, rectDistance);
  }
}


/***/ }),

/***/ "./demo/config.ts":
/*!************************!*\
  !*** ./demo/config.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "phaserConfig": () => (/* binding */ phaserConfig)
/* harmony export */ });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DemoScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DemoScene */ "./demo/DemoScene.ts");


const scaleConfig = {
  mode: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scale.FIT),
  autoCenter: (phaser__WEBPACK_IMPORTED_MODULE_0___default().Scale.CENTER_BOTH),
  parent: "game",
  width: 960,
  height: 640
};
const phaserConfig = {
  type: (phaser__WEBPACK_IMPORTED_MODULE_0___default().AUTO),
  backgroundColor: "#4488aa",
  transparent: true,
  scale: scaleConfig,
  scene: [new _DemoScene__WEBPACK_IMPORTED_MODULE_1__.DemoScene(_DemoScene__WEBPACK_IMPORTED_MODULE_1__.DemoScene.name)]
};


/***/ }),

/***/ "./demo/index.ts":
/*!***********************!*\
  !*** ./demo/index.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../package.json */ "./package.json");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./demo/config.ts");



console.log(`Hello, Demo ${_package_json__WEBPACK_IMPORTED_MODULE_1__.version}!`);
new phaser__WEBPACK_IMPORTED_MODULE_0__.Game(_config__WEBPACK_IMPORTED_MODULE_2__.phaserConfig);


/***/ }),

/***/ "./demo/utils.ts":
/*!***********************!*\
  !*** ./demo/utils.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssColorToInt": () => (/* binding */ cssColorToInt)
/* harmony export */ });
function cssColorToInt(cssColor) {
  try {
    return parseInt(cssColor.replace("#", "0x"));
  } catch (e) {
    console.warn("cssColorToInt: use cssColor with # prefix ");
    return 14606046;
  }
}


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
      aB: anchor.getBounds(),
      iB: item.getBounds()
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




/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@kvisaz/phaser-align","version":"0.1.0","description":"Align utilities for Phaser 3","main":"dist/index.js","types":"dist/index.d.ts","scripts":{"start":"webpack serve --config webpack.demo.js","build":"tsc","build:demo":"webpack --config webpack.demo.js"},"keywords":["phaser"],"author":"","license":"ISC","devDependencies":{"@types/node":"18.14.2","typescript":"5.5.4","phaser":"3.80.1","webpack":"5.75.0","webpack-cli":"5.0.1","webpack-dev-server":"4.1.0","esbuild-loader":"3.0.1","@types/jest":"29.5.7","copy-webpack-plugin":"11.0.0","css-loader":"6.6.0","dotenv":"5.0.1","html-webpack-plugin":"5.3.2","jest":"29.7.0","mini-css-extract-plugin":"2.4.4","parcel-bundler":"1.12.3","prettier":"2.8.4","regenerator-runtime":"0.13.9","sass":"1.33.0","sass-loader":"12.4.0","ts-jest":"29.1.1","ts-loader":"9.2.6"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./demo/index.ts"));
/******/ }
]);
//# sourceMappingURL=index.js.map