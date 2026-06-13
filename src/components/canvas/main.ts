import { draw } from './canvas';

const canvas = document.getElementById('c') as HTMLCanvasElement;
const layer  = document.getElementById('link-layer') as HTMLDivElement;

const render = () => draw(canvas, layer);
render();
window.addEventListener('resize', render);

canvas.addEventListener('selectstart', e => e.preventDefault());
canvas.addEventListener('contextmenu', e => e.preventDefault());
canvas.addEventListener('dragstart',   e => e.preventDefault());
