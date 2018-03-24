module objects {
  export class Island extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("island");
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this._dy = 5;
      this._dx = 5;
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
          break;
        case config.Scene.LEVELTWO:
          this.x = 640;
          this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
          break;
        case config.Scene.LEVELTHREE:
          this.x = 0;
          this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
          break;
      }
    }

    // move the object to some new location
    public Move():void {
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
    public CheckBounds():void {
      switch (managers.Game.currentScene) {
        case config.Scene.PLAY:
          // check lower bounds
          if(this.y >= 480 + this.height) {
            this.Reset();
          }  
          break;
        case config.Scene.LEVELTWO:
          // check left bounds
          if(this.x <= 0) {
            this.Reset();
          }  
          break;
          case config.Scene.LEVELTHREE:
            // check right bounds
            if(this.x >= 640) {
              this.Reset();
            }  
            break;
      }
    }
  }
}
