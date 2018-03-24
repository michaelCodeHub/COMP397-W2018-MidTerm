module objects {
  export class Ocean extends createjs.Bitmap {
    // private instance variables
    private _dy: number;
    private _dx: number;

    // public properties

    // Constructor
    constructor() {
      super(managers.Game.assetManager.getResult("ocean"));
      this.Start();
    }

    // private methods

    // reset the objects location to some value
    private _reset():void {
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
    }

    // move the object to some new location
    private _move():void {
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
    }

    // check to see if some boundary has been passed
    private _checkBounds():void {
      console.log(this.x);
      switch (managers.Game.currentScene) {
        case config.Scene.PLAY:
          if(this.y >= 0) {
            this._reset();
          }
          break;
        case config.Scene.LEVELTWO:
          if(this.x <= 640) {
            this._reset();
          }
          break;
        case config.Scene.LEVELTHREE:
          if(this.x >= 1280 ) {
            this._reset();
          }
          break;
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
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
    }

    // updates the game object every frame
    public Update():void {
      this._move();
      this._checkBounds();
    }
  }
}
