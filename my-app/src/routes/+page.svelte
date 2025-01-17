<script>
  import CurEvents from "$lib/components/calendar/cur_events.svelte"
  import PrevEvents from "$lib/components/calendar/prev_events.svelte"
  import Tracks from "$lib/components/tracks/tracks.svelte"
  import Logo from "$lib/components/logo.svelte"
  import Officers from "$lib/components/officers.svelte"
  import AboutUs from "$lib/components/about_us.svelte"
</script>

<!-- Navigation Bar -->
<nav class="bg-gradient-to-r from-red-500 to-red-700 text-white fixed top-0 left-0 w-full z-20">
  <div class="container mx-auto flex items-center justify-between py-4 px-8">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="images/ml-logo-border.png" alt="ml-logo" class="h-15 w-20 mr-2" />
      <span class="fira text-3xl bg-gradient-to-l from-umass-black to-umass-maroon bg-clip-text text-transparent font-bold">
        {@html '{MassAI}'}
      </span>
    </div>
    
    <!-- Navigation Links -->
    <ul class="flex space-x-6">
      <li><a href="#about" class="hover:text-gray-800">About Us</a></li>
      <li><a href="#events" class="hover:text-gray-800">Events</a></li>
      <li><a href="#tracks" class="hover:text-gray-800">Tracks</a></li>
      <li><a href="#contact" class="hover:text-gray-800">Contact</a></li>
    </ul>
  </div>
</nav>




<!-- About Us Section -->
<section id="about" class="bg-gradient-section text-white py-24 px-8 relative overflow-hidden">
  <AboutUs />

</section>

<!-- Tracks Section -->
<section id="tracks" class="bg-white text-black py-0 px-8">
  <Tracks />
</section>

<!-- Events Section -->
<section id="events" class="bg-gray-100 text-black py-0 px-8">
  <CurEvents />
<PrevEvents />
</section>


<!-- Officers Section -->
<section id="officers" class="bg-gray-200 text-black py-1 px-8">
  <Officers />
</section>


<!-- Contact Section -->
<section id="contact" class="bg-gray-200 text-black py-16 px-8">
  <h2 class="text-4xl font-bold text-center mb-8">Contact Us</h2>
  <!--put our socials/email here -->
</section>



<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap');
  
  .fira {
    font-family: 'Fira Mono', sans-serif;
    font-weight: 700;
    font-style: normal;
  }
  
  .animate-gradient {
    background-size: 300% 300%;
    animation: gradientAnimation 8s ease infinite;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .move-gradient {
    pointer-events: none;
    transition: transform 0.1s;
  }

  .bg-gradient-section:hover .move-gradient {
    transform: scale(1.1);
  }

  /* navbar styling */
  nav {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  nav li {
    margin: 0;
  }

  nav a {
    text-decoration: none;
    color: white;
    transition: color 0.3s ease;
  }
</style>
