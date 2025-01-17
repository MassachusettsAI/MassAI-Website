<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const canvas = document.getElementById('mlCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
      constructor(public x: number, public y: number, public directionX: number, public directionY: number, public size: number, public color: string) {}

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * (window.innerWidth - size * 2);
        let y = Math.random() * (window.innerHeight - size * 2);
        let directionX = Math.random() * 0.5 - 0.25;
        let directionY = Math.random() * 0.5 - 0.25;
        let color = 'rgba(255, 255, 255, 0.5)';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach(particle => {
        particle.update();
      });
    }

    init();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });
  });
</script>

<section id="hero" class="relative h-screen bg-black text-white flex items-center justify-center">
  <!-- animation -->
  <div class="absolute inset-0 overflow-hidden">
    <canvas id="mlCanvas" class="w-full h-full"></canvas>
  </div>

  <!-- message -->
  <div class="relative z-10 text-center">
    <h1 class="text-6xl font-extrabold mb-4">Welcome to the Future of ML/AI</h1>
    <p class="text-xl max-w-lg mx-auto">
      Dive into the world of machine learning and artificial intelligence with us!
    </p>
  </div>
</section>

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-x: hidden;
  }

  #hero {
    background: radial-gradient(circle, rgba(35,35,35,1) 0%, rgba(20,20,20,1) 100%);
    overflow: hidden;
  }

  /* animation background */
  #mlCanvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  #hero h1 {
    background: linear-gradient(90deg, #ff6a00, #ee0979);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
