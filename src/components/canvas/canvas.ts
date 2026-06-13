import { SECTIONS, type Entry } from './data';

const BG   = '#0a0a0a';
const RED  = '#c0392b';
const GOLD = '#d4a843';
const LIGHT = '#e0e0e0';
const MUTED = '#888';
const DIM  = '#444';
const BLUE = '#3498db';

interface LinkZone { x: number; y: number; w: number; h: number; href: string }

const linkZones: LinkZone[] = [];

function font(s: Entry, ctx: CanvasRenderingContext2D): void {
  const bold   = s.t === 'h1' || s.t === 'h2' ? 'bold' : 'normal';
  const italic = s.italic ? 'italic' : 'normal';
  ctx.font = `${italic} ${bold} ${s.size ?? 14}px 'Courier New', monospace`;
}

function computeHeight(W: number, ctx: CanvasRenderingContext2D): number {
  let y = 36;
  for (const s of SECTIONS) {
    if (s.t === 'gap') { y += s.size ?? 0; continue; }
    if (s.t === 'rule') { y += 12; continue; }
    font(s, ctx);
    const sz = s.size ?? 14;
    y += sz + (s.t === 'h1' ? 8 : s.t === 'h2' ? 14 : s.t === 'bullet' ? 6 : 6);
  }
  return y + 40;
}

function buildOverlay(layer: HTMLDivElement, W: number, H: number): void {
  layer.style.width  = W + 'px';
  layer.style.height = H + 'px';
  layer.innerHTML = '';
  for (const z of linkZones) {
    const a = document.createElement('a');
    a.href   = z.href;
    a.target = '_blank';
    a.rel    = 'noopener noreferrer';
    Object.assign(a.style, {
      position: 'absolute',
      left: z.x + 'px',
      top:  z.y + 'px',
      width:  z.w + 'px',
      height: z.h + 'px',
      display: 'block',
      opacity: '0',
      cursor: 'pointer',
    });
    layer.appendChild(a);
  }
}

export function draw(canvas: HTMLCanvasElement, layer: HTMLDivElement): void {
  const DPR = window.devicePixelRatio || 1;
  const W   = Math.min(window.innerWidth - 32, 720);
  const ctx = canvas.getContext('2d')!;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  const H = computeHeight(W, ctx);

  canvas.width  = W * DPR;
  canvas.height = H * DPR;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';
  ctx.scale(DPR, DPR);

  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = RED;
  ctx.fillRect(0, 0, 3, H);

  linkZones.length = 0;
  const PAD = 24;
  let y = 36;

  for (const s of SECTIONS) {
    if (s.t === 'gap') { y += s.size ?? 0; continue; }

    if (s.t === 'rule') {
      ctx.strokeStyle = DIM;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(PAD, y - 6);
      ctx.lineTo(W - PAD, y - 6);
      ctx.stroke();
      y += 12;
      continue;
    }

    font(s, ctx);
    const sz = s.size ?? 14;

    if (s.t === 'bullet') {
      ctx.fillStyle = GOLD;
      ctx.fillText('›  ', PAD, y);
      const aw = ctx.measureText('›  ').width;

      const label = (s.label ?? '') + '  ';
      ctx.fillStyle = s.href ? BLUE : LIGHT;
      ctx.fillText(label, PAD + aw, y);
      const lw = ctx.measureText(label).width;

      if (s.href) {
        linkZones.push({ x: PAD + aw, y: y - sz, w: lw, h: sz + 4, href: s.href });
        ctx.strokeStyle = BLUE;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(PAD + aw, y + 2);
        ctx.lineTo(PAD + aw + lw - 4, y + 2);
        ctx.stroke();
      }

      ctx.font = `normal normal ${sz}px 'Courier New', monospace`;
      ctx.fillStyle = MUTED;
      ctx.fillText('— ' + (s.text ?? ''), PAD + aw + lw, y);

      y += sz + 6;
    } else {
      ctx.fillStyle = s.color ?? LIGHT;
      ctx.fillText(s.text ?? '', PAD, y);
      y += sz + (s.t === 'h1' ? 8 : s.t === 'h2' ? 14 : 6);
    }
  }

  buildOverlay(layer, W, H);
}
