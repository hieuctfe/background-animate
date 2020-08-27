import { Partial, Root } from "./Partical";
import { loadImage, getRandomRgb } from "./helper";
import { Animate } from "./Animate";

////////////////////////////////
const width = window.innerWidth;
const height = window.innerHeight;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
////////////////////////////////
canvas.width = width;
canvas.height = height;
const edge = 150;
////////////////////////////////

// for (let i = 0; i <= 500; i++) {
//   const x = Math.random() * width;
//   const y = Math.random() * height;
//   onMouseMove({ x, y });
// }

// const mouse = new Mouse().listenMouseMouveEvent(onMouseMove);

const treeEffect = new Animate.TreeEffect({ ctx });
