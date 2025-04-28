import React, { useEffect, useRef } from "react";

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const lerpColor = (color1: string, color2: string, t: number): string => {
      const c1 = parseInt(color1.slice(1), 16);
      const c2 = parseInt(color2.slice(1), 16);

      const r1 = (c1 >> 16) & 0xff;
      const g1 = (c1 >> 8) & 0xff;
      const b1 = c1 & 0xff;

      const r2 = (c2 >> 16) & 0xff;
      const g2 = (c2 >> 8) & 0xff;
      const b2 = c2 & 0xff;

      const r = Math.round(r1 + t * (r2 - r1));
      const g = Math.round(g1 + t * (g2 - g1));
      const b = Math.round(b1 + t * (b2 - b1));

      return `rgb(${r}, ${g}, ${b})`;
    };

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: { x: number; y: number };
      colorProgress: number;
      colorDirection: number;

      constructor(
        x: number,
        y: number,
        radius: number,
        velocity: { x: number; y: number }
      ) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocity = velocity;
        this.colorProgress = Math.random(); 
        this.colorDirection = Math.random() < 0.5 ? 1 : -1; 
        this.color = "#ffffff";
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        if (!canvas) return;

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        
        if (this.x < 0 || this.x > canvas.width) this.velocity.x *= -1;
        if (this.y < 0 || this.y > canvas.height) this.velocity.y *= -1;

        
        this.colorProgress += 0.01 * this.colorDirection;

       
        if (this.colorProgress > 1) {
          this.colorProgress = 1;
          this.colorDirection *= -1;
        }
        if (this.colorProgress < 0) {
          this.colorProgress = 0;
          this.colorDirection *= -1;
        }

        this.color = lerpColor("#ffffff", "#154061d5", this.colorProgress);

        this.draw();
      }
    }

    let particles: Particle[] = [];

    const createParticles = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 50 : 150;

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 0.6 + 0.8;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const velocity = {
          x: (Math.random() - 0.5) * 0.9,
          y: (Math.random() - 0.5) * 0.9,
        };

        particles.push(new Particle(x, y, radius, velocity));
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100 && ctx) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update());
      connectParticles();
      requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none"
    />
  );
};

export default Particles;
