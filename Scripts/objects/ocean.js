var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Ocean = /** @class */ (function (_super) {
        __extends(Ocean, _super);
        // public properties
        // Constructor
        function Ocean() {
            var _this = _super.call(this, managers.Game.assetManager.getResult("ocean")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // reset the objects location to some value
        Ocean.prototype._reset = function () {
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY:
                    this.y = -960;
                    break;
                case config.Scene.LEVELTWO:
                    this.x = 1280;
                    break;
                case config.Scene.LEVELTHREE:
                    this.x = 640;
                    break;
            }
        };
        // move the object to some new location
        Ocean.prototype._move = function () {
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY:
                    this.y += this._dy;
                    break;
                case config.Scene.LEVELTWO:
                    this.x -= this._dx;
                    break;
                case config.Scene.LEVELTHREE:
                    this.x += this._dx;
                    break;
            }
        };
        // check to see if some boundary has been passed
        Ocean.prototype._checkBounds = function () {
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY:
                    if (this.y >= 0) {
                        this._reset();
                    }
                    break;
                case config.Scene.LEVELTWO:
                    if (this.x <= 640) {
                        this._reset();
                    }
                    break;
                case config.Scene.LEVELTHREE:
                    if (this.x >= 1280) {
                        this._reset();
                    }
                    break;
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Ocean.prototype.Start = function () {
            this._dy = 5;
            this._dx = 5;
            this._reset();
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY:
                    break;
                case config.Scene.LEVELTWO:
                    this.rotation = 90;
                    break;
                case config.Scene.LEVELTHREE:
                    this.rotation = 90;
                    break;
            }
        };
        // updates the game object every frame
        Ocean.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map