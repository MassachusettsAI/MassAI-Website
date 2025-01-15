<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<div class="flex justify-center">
  <Accordion.Root class="m-14 max-w-3xl w-full">
    <Accordion.Item value="item-1">
      <Accordion.Trigger class="text-2xl text-emerald-500 w-full">
        <div class="w-full flex items-center justify-center">
          <span class="flex-1 text-center">Project Track</span>
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        The project track is where you make projects :>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Trigger class="text-2xl text-indigo-500 w-full">
        <div class="w-full flex items-center justify-center">
          <span class="flex-1 text-center">Research Track</span>
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        The research track is where you read cool research papers and maybe other things?? :&
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-3">
      <Accordion.Trigger class="text-2xl text-rose-500 w-full">
        <div class="w-full flex items-center justify-center">
          <span class="flex-1 text-center">Competition Track</span>
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        The competition track is where you compete in short ML model coding competitions &lt):o
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
</div>