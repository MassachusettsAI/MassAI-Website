<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import Calendar from "$lib/components/calendar.svelte"
</script>

<div class="flex justify-center">
  <Accordion.Root class="m-0 max-w-3xl w-full">
    <Accordion.Item value="item-1">
      <Accordion.Trigger class="text-2xl text-gray-500 w-full">
        <div class="w-full flex items-center justify-center">
          <span class="flex-1 text-center">Past Events</span>
        </div>
      </Accordion.Trigger>
      <Accordion.Content>
        <Card.Root class="bg-gray-50">
          <Calendar timeframe="past" />
        </Card.Root>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
</div>