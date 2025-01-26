<script>
  import * as Menubar from "$lib/components/ui/menubar";
  import { ModeWatcher } from "mode-watcher";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import { toggleMode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button";
</script>

<ModeWatcher />

<nav class="bg-gradient-to-r from-red-500 to-red-700 text-white fixed top-0 left-0 w-full z-20 shadow-lg dark:from-red-800 dark:to-red-950">
  <div class="w-full flex items-center justify-between px-4 lg:px-12">
    <div class="flex items-center">
      <a href="#top" class="flex items-center">
        <img src="images/ml-logo-border.png" alt="ml-logo" class="h-15 w-20" />
        <span class="font-fraunces font-extrabold text-3xl text-white bg-clip-text text-transparent">
          {@html 'MassAI'}
        </span>
      </a>
    </div>

    <div class="hidden mlg:flex items-center">
      <ul class="flex items-center">
        <li><a href="#about" class="block px-4 py-6 hover:text-slate-400 transition-colors text-lg">About Us</a></li>
        <li><a href="#tracks" class="block px-4 py-6 hover:text-slate-400 transition-colors text-lg">Tracks</a></li>
        <li><a href="#events" class="block px-4 py-6 hover:text-slate-400 transition-colors text-lg">Events</a></li>
        <li><a href="#lectures" class="block px-4 py-6 hover:text-slate-400 transition-colors text-lg">Resources</a></li>
        <li>
          <Button href="https://linktr.ee/mass.ai" target="_blank" rel="noopener noreferrer" class="bg-rose-900 dark:bg-rose-300 text-slate-100 dark:text-rose-950 hover:text-white dark:hover:text-rose-850 dark:hover:bg-rose-200 px-4 py-2 rounded-lg shadow-md font-medium hover:bg-rose-800 transition-all mx-4 text-lg">
            Join Us!
          </Button>
        </li>
      </ul>
      <Button class="ml-4" on:click={toggleMode} variant="outline" size="icon">
        <Sun class="h-[1.2rem] w-[1.2rem] text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
        <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>

    <div class="flex mlg:hidden my-4">
      <Menubar.Root class="bg-transparent">
        <Menubar.Menu>
          <Menubar.Trigger>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Menubar.Trigger>
          <Menubar.Content class="bg-red-800 [&_*]:text-lg text-white fixed top-16 right-4 w-8">
            <a href="#about"><Menubar.Item>About Us</Menubar.Item></a>
            <a href="#tracks"><Menubar.Item>Tracks</Menubar.Item></a>
            <a href="#events"><Menubar.Item>Events</Menubar.Item></a>
            <a href="#lectures"><Menubar.Item>Resources</Menubar.Item></a>
            <a href="https://linktr.ee/mass.ai" target="_blank"><Menubar.Item>Join Us!</Menubar.Item></a>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar.Root>
      <Button class="ml-2" on:click={toggleMode} variant="outline" size="icon">
        <Sun class="h-[1.2rem] w-[1.2rem] text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
        <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
        <span class="sr-only">Toggle theme</span>
      </Button>
    </div>
  </div>
</nav>

<style>
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