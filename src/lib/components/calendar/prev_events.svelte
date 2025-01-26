<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import * as Accordion from "$lib/components/ui/accordion";
    import Calendar from "$lib/components/calendar/calendar.svelte"
</script>

<div class="flex justify-center sm:mx-14">
  <Accordion.Root class="max-w-3xl w-full [&>*]:border-b-2 [&>*]:border-gray-600 dark:[&>*]:border-gray-300">
<!--  <Accordion.Root class="max-w-3xl w-full">-->
    <Accordion.Item value="item-1">
      <Accordion.Trigger class="text-2xl text-gray-700 w-full dark:text-gray-200">
        <div class="w-full flex items-center justify-center">
          <span class="font-fraunces font-extrabold flex-1 text-center text-5xl dark:text-white">Past Events</span>
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        <Card.Root class="bg-gray-300 dark:bg-slate-850">
          <Calendar timeframe="past" />
        </Card.Root>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
</div>