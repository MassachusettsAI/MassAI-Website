<script lang="ts">
    import { eBoardMembers, alumni } from "$lib/data/people";
</script>

<div class="text-center mb-10">
    <h1 class="font-fraunces font-extrabold text-5xl">Leadership</h1>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 dark:text-white">
    {#each eBoardMembers as member}
        <div class="bg-white dark:bg-slate-900 shadow-lg rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1">
            <div class="flex flex-col items-center">
                <img src={member.picture} alt={member.name} class="w-auto h-24 rounded-full mb-4 object-contain max-w-none" />
                <h2 class="text-xl font-bold">{member.name}</h2>
                <h3 class="text-gray-600 dark:text-gray-400">{member.title}</h3>
                <p class="text-center mt-4">{member.bio}</p>
            </div>
        </div>
    {/each}
</div>


<div class="text-center mt-24 mb-10">
    <h1 class="font-fraunces font-extrabold text-5xl">Alumni</h1>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 dark:text-white">
    {#each alumni as alum}
        <div class="bg-white dark:bg-slate-900 shadow-lg rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1">
            <div class="flex flex-col items-center">
                <img src={alum.picture} alt={alum.name} class="w-auto h-24 rounded-full mb-4 object-contain max-w-none" />
                <h2 class="text-xl font-bold">{alum.name}</h2>
                <h3 class="text-gray-600 dark:text-gray-400 text-center">{alum.position}</h3>
            </div>
        </div>
    {/each}
</div>
