<!-- Footer.svelte -->
<script>
  // export let logoSrc = "/static/images/favicon-32x32.png"; 
  // export let logoAlt = "MassAI Logo";
  export let copyrightText = `© ${new Date().getFullYear()} MassAI. All rights reserved.`;
  export let showSocialLinks = true;
</script>

<footer class="bg-slate-800 text-white py-8 px-8 dark:bg-slate-1050">
  <div class="container mx-auto sm:mx-14">
    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      <!-- Logo and Copyright -->
      <div class="flex flex-col items-center md:items-start">
        <div class="mb-4">
          <img src={logoSrc} alt={logoAlt} class="h-12" />
        </div>
        <p class="text-slate-300">{copyrightText}</p>
      </div>
      
      <!-- Additional Links -->
      <div class="flex flex-col items-center md:items-end">
        <div class="flex gap-4 mb-4">
          <a href="#about" class="text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#tracks" class="text-slate-300 hover:text-white transition-colors">Tracks</a>
          <a href="#events" class="text-slate-300 hover:text-white transition-colors">Events</a>
          <a href="#officers" class="text-slate-300 hover:text-white transition-colors">Officers</a>
        </div>
        
        {#if showSocialLinks}
          <div class="flex gap-4">
            <a href="https://discord.com/invite/47e96wJEVK" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M9 9h6M9 15h6M4.5 19.5l3-3m12 0l3 3M21 15V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"></path><circle cx="8.5" cy="12" r="1.5"></circle><circle cx="15.5" cy="12" r="1.5"></circle></svg>
            </a>
            <a href="https://tr.ee/DDVgoWrbyX" class="text-slate-300 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/mass-ai" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        {/if}
      </div>
    </div>
  </div>
</footer>
