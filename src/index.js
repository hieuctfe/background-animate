import { Animate } from "./animate";

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

const treeEffect = new Animate.TreeEffect({ ctx, edge });
