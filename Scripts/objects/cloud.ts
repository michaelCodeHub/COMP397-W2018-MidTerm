module objects {
  export class Cloud extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("cloud");
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this.Reset();
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset():void {
      switch (managers.Game.currentScene) {
        case config.Scene.PLAY:
          this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
          this.y = -this.height;
          this._dx = Math.floor((Math.random() * 4) - 2);
          this._dy = Math.floor((Math.random() * 5) + 5);
          break;
        case config.Scene.LEVELTWO:
          this.x = 640;
          this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
          this._dx = Math.floor((Math.random() * 4) + 5);
          this._dy = Math.floor((Math.random() * 5) - 2);
          break;
        case config.Scene.LEVELTHREE:
          this.x = 0;
          this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
          this._dx = Math.floor((Math.random() * 4) + 5);
          this._dy = Math.floor((Math.random() * 5) - 2);
        break;
      }
    }

    // move the object to some new location
    public Move():void {
      switch (managers.Game.currentScene) {
        case config.Scene.PLAY:
          this.y += this._dy;
          this.x += this._dx;
          break;
        case config.Scene.LEVELTWO:
          this.y += this._dy;
          this.x -= this._dx;
          break;
        case config.Scene.LEVELTHREE:
          this.y += this._dy;
          this.x += this._dx;
          break;
      }
    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // check lower bounds
      switch (managers.Game.currentScene) {
        case config.Scene.PLAY:
          if(this.y >= 480 + this.height) {
            this.Reset();
          }
          break;
        case config.Scene.LEVELTWO:
          if(this.x <= 0) {
            this.Reset();
          }
          break;
        case config.Scene.LEVELTHREE:
          if(this.x >= this.width + 640) {
            this.Reset();
          }
          break;
      }
    }
  }
}
