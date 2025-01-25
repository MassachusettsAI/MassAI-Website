<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion";

    export let lectures = [
        {
            title: "Introduction to Reinforcement Learning",
            date: "November 10, 2024",
            videoUrl: "https://www.youtube.com/watch?v=1-TvSgOuAH4&t=4s",
            resources: [
                { name: "Lecture Slides", url: "https://docs.google.com/document/d/17SzkJD5bTLbTe5NuJjDG-teeIQsNhm0D_6l7NXUKrZc/edit?tab=t.0" },
            ]
        },
        {
            title: "Introduction to Deep Reinforcement Learning",
            date: "November 10, 2024",
            videoUrl: "https://www.youtube.com/watch?v=dHa3Ju-QsDs&t=22s",
            resources: [
                { name: "Lecture Slides", url: "https://docs.google.com/document/d/17SzkJD5bTLbTe5NuJjDG-teeIQsNhm0D_6l7NXUKrZc/edit?tab=t.0" },
            ]
        },
        {
            title: "Introduction to Imitation Learning",
            date: "November 10, 2024",
            videoUrl: "https://www.youtube.com/watch?v=07Y9xnwNk1w&t=8s",
            resources: [
                { name: "Lecture Slides", url: "https://docs.google.com/presentation/d/1ZNcRx5P04liyKTB39_RAylJONGmkrs-Fof2Xs8hOjac/edit?usp=sharing" },
            ]
        }
    ];

    function getEmbedUrl(url) {
        if (url.includes('watch?v=')) {
            const videoId = url.split('watch?v=')[1].split('&')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
</script>

<div class="text-center">
  <h2 class="font-fraunces text-5xl mb-10 font-bold dark:text-white">Lectures</h2>
</div>

<Accordion.Root class="dark:text-white max-w-3xl mx-auto">
  {#each lectures as lecture}
    <Accordion.Item value={lecture.title}>
      <Accordion.Trigger class="dark:text-white text-xl">
        {lecture.title}
      </Accordion.Trigger>
      <Accordion.Content class="text-md">
        <div class="lecture-date mb-4">{lecture.date}</div>
        <div class="relative w-full h-[500px] md:h-[315px] mb-4">
          <iframe
              title={lecture.title}
              class="w-full h-full"
              src={getEmbedUrl(lecture.videoUrl)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
          ></iframe>
        </div>
        <div>
          <h3 class="font-semibold mb-2">Resources:</h3>
          {#each lecture.resources as resource}
            <a
                class="block text-blue-500 hover:underline mb-1"
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
            >
              {resource.name}
            </a>
          {/each}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  {/each}
</Accordion.Root>