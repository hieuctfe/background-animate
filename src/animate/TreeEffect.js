import { Mouse } from "../Mouse";
import { Root } from "../Partical";
import { getRandomRgb } from "../helper";
export class TreeEffect {
  constructor({ ctx, edge = 80 }) {
    console.log(ctx);
    this.ctx = ctx;
    this.edge = edge;
    this.init();
  }
  init() {
    console.log('init')
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
