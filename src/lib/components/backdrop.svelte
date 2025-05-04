<script lang="ts">
    import { onMount } from "svelte";
    onMount(() => {
        const canvas = document.getElementById('mlCanvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let particlesArray = [];
        const numberOfParticles = 130;
        const maxDistance = 100; // Maximum distance for drawing lines between particles
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
        function getRandomRedColor() {
            // const colors = [
            //     '#FF0000',
            //     '#DC143C',
            //     '#B22222',
            //     '#8B0000',
            //     '#FF4500'
            // ];
            const colors = [
                '#00FFFF',  // Bright Cyan
                '#008B8B',  // Dark Cyan
                '#00BFFF',  // Deep Sky Blue
                '#1E90FF',  // Dodger Blue
                '#00F5FF'   // Vivid Cyan
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        function connect() {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < maxDistance) {
                        const opacity = 1 - (distance / maxDistance);
                        // ctx.strokeStyle = `rgba(255, 0, 0, ${opacity * 0.2})`; // Red lines with opacity
                        ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.2})`; // Cyan lines
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
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
                let color = getRandomRedColor();
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            connect();

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

<section id="hero" class="relative h-[calc(100vh-4rem)] bg-black text-white flex items-center justify-center">
    <!-- animation -->
    <div class="absolute inset-0 overflow-hidden">
      <canvas id="mlCanvas" class="w-full h-full"></canvas>
    </div>

    <!-- message -->
    <div class="relative z-10 text-center">
      <h1 class="font-fraunces font-extrabold text-7xl mb-4 text-red-200">Welcome to the Future of AI/ML</h1>
      <p class="text-xl max-w-lg mx-auto">
        Dive into the world of artificial intelligence and machine learning at UMass Amherst!
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
    #mlCanvas {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    #hero h1 {
      background: linear-gradient(90deg,rgb(182, 33, 33),rgb(187, 38, 38));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }


  </style>
