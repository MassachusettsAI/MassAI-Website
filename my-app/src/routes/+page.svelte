<script>
  import CurEvents from "$lib/components/calendar/cur_events.svelte"
  import PrevEvents from "$lib/components/calendar/prev_events.svelte"
  import Tracks from "$lib/components/tracks/tracks.svelte"
  import Logo from "$lib/components/logo.svelte"
  import Officers from "$lib/components/officers.svelte"
  import AboutUs from "$lib/components/about_us.svelte"
  import Backdrop from "$lib/components/backdrop.svelte"
  import Lectures from "$lib/components/lectures.svelte"
  import * as Menubar from "$lib/components/ui/menubar";
  import { ModeWatcher } from "mode-watcher";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import { toggleMode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button";
</script>

<ModeWatcher />

<!-- Navigation Bar -->
<nav class="bg-gradient-to-r from-red-500 to-red-700 text-white fixed top-0 left-0 w-full z-20 shadow-lg">
  <div class="w-full flex items-center justify-between py-4 px-6 lg:px-12">
    <!-- Logo -->
    <div class="flex items-center space-x-3">
      <img src="images/ml-logo-border.png" alt="ml-logo" class="h-15 w-20" />
      <span class="fira text-3xl bg-gradient-to-l from-umass-black to-umass-maroon bg-clip-text text-transparent font-bold">
        {@html '{MassAI}'}
      </span>
    </div>

    <!-- Navigation Links -->
    <div class="hidden mlg:block">
      <ul class="flex items-center space-x-8">
        <li><a href="#about" class="hover:text-gray-200 transition-colors">About Us</a></li>
        <li><a href="#tracks" class="hover:text-gray-200 transition-colors">Tracks</a></li>
        <li><a href="#events" class="hover:text-gray-200 transition-colors">Events</a></li>
        <li><a href="#lectures" class="hover:text-gray-200 transition-colors">Resources</a></li>
        <li>
          <a href="https://linktr.ee/mass.ai" target="_blank" rel="noopener noreferrer" class="bg-white text-red-600 px-4 py-2 rounded-lg shadow-md font-medium hover:bg-red-100 transition-all">
            Join Us!
          </a>
        </li>
      </ul>
    </div>
    <div class="flex mlg:hidden">
    <div >
      <!-- Mobile Nav -->
      <Menubar.Root class="bg-transparent">
        <Menubar.Menu>
          <Menubar.Trigger>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Menubar.Trigger>
          <Menubar.Content class="bg-red-800 text-white">
            <a href="#about">
              <Menubar.Item>
                About Us
              </Menubar.Item>
            </a>
              <a href="#tracks">
                <Menubar.Item>
                  Tracks
                </Menubar.Item>
              </a>
              <a href="#events">
                <Menubar.Item>
                  Events
                </Menubar.Item>
              </a>
              <a href="#lectures">
                <Menubar.Item>
                  Resources
                </Menubar.Item>
              </a>
              <a href="https://linktr.ee/mass.ai">
                <Menubar.Item>
                  Visit Our Linktree
                </Menubar.Item>
              </a>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar.Root>
    </div>
      <Button class="ml-2" on:click={toggleMode} variant="outline" size="icon">
        <Sun
            class="h-[1.2rem] w-[1.2rem] text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
    <div class="hidden mlg:block">
      <Button class="ml-2" on:click={toggleMode} variant="outline" size="icon">
        <Sun
            class="h-[1.2rem] w-[1.2rem] text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
  </div>
</nav>

<Backdrop />
<ModeWatcher></ModeWatcher>

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


<!-- Lecture Section -->
<section id="lectures" class="bg-gray-200 text-black py-16 px-8">
  <Lectures />
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

  :global(.custom-trigger) {
    background-color: transparent !important;
    outline: none !important;
    box-shadow: none !important;
  }
</style>
