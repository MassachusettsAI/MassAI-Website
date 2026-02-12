<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import * as Accordion from "$lib/components/ui/accordion";
    import CompetitionTrack from "$lib/components/tracks/competition_track.svelte"
    import ProjectTrack from "$lib/components/tracks/project_track.svelte"
    import ResearchTrack from "$lib/components/tracks/research_track.svelte"
    import WorkshopTrack from "$lib/components/tracks/workshop_track.svelte"
</script>
<div class="mb-6">
  <h1 class="font-fraunces font-extrabold text-5xl text-center dark:text-white">Tracks</h1>
</div>
<div class="dark:text-white flex justify-center">
  <Accordion.Root class="m-1 max-w-3xl w-full [&>*]:border-b-2 [&>*]:border-gray-600 dark:[&>*]:border-gray-300" value="item-1">
<!--  <Accordion.Root class="m-1 max-w-3xl w-full" value="item-1">-->
    <Accordion.Item value="item-1">
      <Accordion.Trigger class="text-2xl text-emerald-500 w-full">
        <div class="w-full flex items-center justify-center">
          <span class="flex-1 text-center">Projects</span>
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        <ProjectTrack />
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Trigger class="text-2xl text-indigo-500 w-full">
        <div class="w-full flex items-center justify-center">
          <span class="flex-1 text-center">Reading Group</span>
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        <ResearchTrack />
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-3">
      <Accordion.Trigger class="text-2xl text-rose-500 w-full">
        <div class="w-full flex items-center justify-center">
          <span class="flex-1 text-center">Competitions</span>
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        <CompetitionTrack />
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-4">
      <Accordion.Trigger class="text-2xl text-fuchsia-500 w-full">
        <div class="w-full flex items-center justify-center">
          <span class="flex-1 text-center">Workshops</span>
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        <WorkshopTrack />
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
</div>