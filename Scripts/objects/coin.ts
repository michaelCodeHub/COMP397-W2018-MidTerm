module objects {
  export class Coin extends objects.GameObject {
    // private instance variables

    // public properties

    // constructors
    constructor() {
      super("coin");
      this.Start();
    }

    // private methods

    // public methods
    public Start(): void {

    }

    public Update(): void {
      this.CheckBounds();
    }

    public CheckBounds():void {
      switch (managers.Game.currentScene) {
        case config.Scene.PLAY:
          if(this.y > (480 + this.height)) {
            this.alpha = 1;
          }
          break;
        case config.Scene.LEVELTWO:
          if(this.x <= 5) {
            this.alpha = 1;
          }
          break;

        case config.Scene.LEVELTHREE:
        if(this.x >= 635) {
          this.alpha = 1;
        }
        break;
      }
    }
  }
}
