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
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        // Constructor
        function Plane() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Plane.prototype._animationEnded = function () {
            if (this.alpha == 0) {
                this.alpha = 1;
                this.planeFlash.alpha = 0;
            }
        };
        // public methods
        // Initializes variables and creates new objects
        Plane.prototype.Start = function () {
            this.planeFlash = new objects.PlaneFlash();
            this.planeFlash.alpha = 1;
            this.planeFlash.on("animationend", this._animationEnded.bind(this), false);
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY:
                    this.x = 320;
                    this.y = 430;
                    break;
                case config.Scene.LEVELTWO:
                    this.rotation = 90;
                    this.planeFlash.rotation = 90;
                    this.x = this.width;
                    this.y = 240;
                    break;
                case config.Scene.LEVELTHREE:
                    this.rotation = -90;
                    this.planeFlash.rotation = -90;
                    this.x = 640 - this.width;
                    this.y = 240;
                    break;
            }
        };
        // updates the game object every frame
        Plane.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Plane.prototype.Reset = function () {
        };
        // move the object to some new location
        Plane.prototype.Move = function () {
            // mouse controls
            // this.x = objects.Game.stage.mouseX;
            // keyboard controls
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY:
                    if (managers.Game.keyboardManager.moveLeft) {
                        this.x -= 5;
                    }
                    if (managers.Game.keyboardManager.moveRight) {
                        this.x += 5;
                    }
                    break;
                case config.Scene.LEVELTWO:
                    if (managers.Game.keyboardManager.moveForward) {
                        this.y -= 5;
                    }
                    if (managers.Game.keyboardManager.moveBackward) {
                        this.y += 5;
                    }
                    break;
                case config.Scene.LEVELTHREE:
                    if (managers.Game.keyboardManager.moveForward) {
                        this.y -= 5;
                    }
                    if (managers.Game.keyboardManager.moveBackward) {
                        this.y += 5;
                    }
                    break;
            }
            this.planeFlash.x = this.x;
            this.planeFlash.y = this.y;
        };
        // check to see if some boundary has been passed
        Plane.prototype.CheckBounds = function () {
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY:
                    // right boundary
                    if (this.x >= 640 - this.halfWidth) {
                        this.x = 640 - this.halfWidth;
                    }
                    // left boundary
                    if (this.x <= this.halfWidth) {
                        this.x = this.halfWidth;
                    }
                    break;
                case config.Scene.LEVELTWO:
                    // top boundary
                    if (this.y >= 480 - this.halfWidth) {
                        this.y = 480 - this.halfWidth;
                    }
                    // bottom boundary
                    if (this.y <= this.halfWidth) {
                        this.y = this.halfWidth;
                    }
                    break;
                case config.Scene.LEVELTHREE:
                    // top boundary
                    if (this.y >= 480 - this.halfWidth) {
                        this.y = 480 - this.halfWidth;
                    }
                    // bottom boundary
                    if (this.y <= this.halfWidth) {
                        this.y = this.halfWidth;
                    }
                    break;
            }
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map