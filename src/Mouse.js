export class Mouse {
  constructor() {}
  listenMouseMouveEvent(callback) {
    window.addEventListener("mousemove", (event) => {
      this.x = event.x;
      this.y = event.y;
      callback({ x: this.x, y: this.y });
    });
  }
}
