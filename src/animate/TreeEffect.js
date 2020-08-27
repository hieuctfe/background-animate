import { Mouse } from "../model/Mouse";
import { Root } from "../model/Partical";
import { getRandomRgb } from "../helper";
export class TreeEffect {
  constructor({ ctx, edge = 80 }) {
    console.log(ctx);
    this.ctx = ctx;
    this.edge = edge;
    this.init();
  }
  init() {
    const mouse = new Mouse().listenMouseMouveEvent(
      this.onMouseMove.bind(this)
    );
  }
  onMouseMove({ x, y }) {
    const rootX = x;
    const rootY = y;
    const root = new Root({
      x,
      y,
      rootX,
      rootY,
      rgba: getRandomRgb(),
      ctx: this.ctx,
      distance: this.edge,
    });
    root.draw();
  }
}
