// components/GearAvatar.jsx
"use client";
import { useEffect, useRef } from "react";

// export default function GearAvatar({ name = "Your Name", role = "Developer", gearColor="", circleColor="" }) {
export default function GearAvatar({
  name = "Your Name",
  gearColor,
  circleColor,
}) {
  const canvasRef = useRef(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const cx = 150,
      cy = 150;
    const numTeeth = 12;
    const outerR = 110;
    const innerR = 88;
    const toothW = 0.18;
    const holeR = 28;
    const topCircleR = 72;
    const topCircleBorder = 76;
    let rafId;

    function draw(rot) {
      ctx.clearRect(0, 0, 300, 300);

      // Rotating gear
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.beginPath();
      for (let i = 0; i < numTeeth; i++) {
        const base = (i / numTeeth) * Math.PI * 2;
        const a1 = base - toothW,
          a2 = base - toothW * 0.5;
        const a3 = base + toothW * 0.5,
          a4 = base + toothW;
        i === 0
          ? ctx.moveTo(Math.cos(a1) * innerR, Math.sin(a1) * innerR)
          : ctx.lineTo(Math.cos(a1) * innerR, Math.sin(a1) * innerR);
        ctx.lineTo(Math.cos(a2) * outerR, Math.sin(a2) * outerR);
        ctx.lineTo(Math.cos(a3) * outerR, Math.sin(a3) * outerR);
        ctx.lineTo(Math.cos(a4) * innerR, Math.sin(a4) * innerR);
        ctx.arc(0, 0, innerR, a4, ((i + 1) / numTeeth) * Math.PI * 2 - toothW);
      }
      ctx.closePath();
      // Gear fill
      ctx.fillStyle = "#001733";
      ctx.fill();
      ctx.strokeStyle = "#001733";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, holeR, 0, Math.PI * 2);
      // Hole
      ctx.fillStyle = "#0f172a";
      ctx.fill();
      ctx.restore();

      // Border ring
      ctx.beginPath();
      ctx.arc(cx, cy, topCircleBorder, 0, Math.PI * 2);
      ctx.fillStyle = "#001733";
      ctx.fill();

      // Top circle
      ctx.beginPath();
      ctx.arc(cx, cy, topCircleR, 0, Math.PI * 2);
      ctx.fillStyle = "#89a5c0";
      ctx.fill();

      // Text
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#001733";
      ctx.font = "600 1vw sans-serif";
      //   ctx.fillText(name, cx, cy - 10);
      ctx.fillText(name, cx, cy);
      //   ctx.fillStyle = "#60a5fa";
      //   ctx.font = "12px sans-serif";
      //   ctx.fillText(role, cx, cy + 10);
    }

    function loop() {
      angleRef.current += 0.02;
      draw(angleRef.current);
      rafId = requestAnimationFrame(loop);
    }
    loop();
    return () => cancelAnimationFrame(rafId);
    //   }, [name, role]);
  }, [name]);

  return (
    <div className="flex items-center justify-center">
      <canvas ref={canvasRef} width={300} height={300} />
    </div>
  );
}
