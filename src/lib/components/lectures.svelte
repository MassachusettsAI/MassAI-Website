<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion";

    export let lectures = [
        {
            title: "Linear Regression",
            date: "Sept 15, 2024",
            videoUrl: "https://www.youtube.com/watch?v=CtsRRUddV2s",
            resources: [
                { name: "Lecture Slides", url: "https://docs.google.com/presentation/d/11aCbIRESe8AFEdSRV7NR3MSYzFPR7VOrAtpt1UBbD3k/edit?usp=sharing" },
            ]
        },
        {
            title: "Natural Language Processing & Transformers",
            date: "Oct 10, 2024, 2024",
            videoUrl: "https://www.youtube.com/watch?v=wjZofJX0v4M",
            resources: [
                { name: "Lecture Slides", url: "https://docs.google.com/presentation/d/1_Ka4xxVkcposHTfyMAPelDVm0Gim47xtAdxbN1hzjBc/edit?usp=sharing" },
            ]
        },
        {
            title: "Neural Networks",
            date: "October 20, 2024",
            videoUrl: "https://www.youtube.com/watch?v=jmmW0F0biz0",
            resources: [
                { name: "Lecture Slides", url: "https://docs.google.com/presentation/d/1kpWqDDNQ3mwsyamMgjVBqBbyXhBujRQoWL4Kbe12QrU/edit?usp=sharing" },
            ]
        },
        {
            title: "Computer Vision",
            date: "Nov 3, 2024, 2024",
            videoUrl: "https://www.youtube.com/watch?v=KuXjwB4LzSA&t=510s",
            resources: [
                { name: "Lecture Slides", url: "https://docs.google.com/presentation/d/1Z4zyjYRMc2mmLlQyTKxwEj4R9sEPgtUKIOQWUmHt6eQ/edit?usp=sharing" },
            ]
        },
        {
            title: "Introduction to Reinforcement Learning",
            date: "November 10, 2024",
            videoUrl: "https://www.youtube.com/watch?v=1-TvSgOuAH4",
            resources: [
                { name: "Lecture Slides", url: "https://docs.google.com/document/d/17SzkJD5bTLbTe5NuJjDG-teeIQsNhm0D_6l7NXUKrZc/edit?tab=t.0" },
            ]
        },
        {
            title: "Introduction to Deep Reinforcement Learning",
            date: "November 10, 2024",
            videoUrl: "https://www.youtube.com/watch?v=dHa3Ju-QsDs",
            resources: [
                { name: "Lecture Slides", url: "https://docs.google.com/document/d/17SzkJD5bTLbTe5NuJjDG-teeIQsNhm0D_6l7NXUKrZc/edit?tab=t.0" },
                { name: "Google Colab", url: "https://colab.research.google.com/drive/1yuzuty_aUSq1pTBUzssUvEF5u6jN4o2h" },
            ]
        },
        {
            title: "Introduction to Imitation Learning",
            date: "November 10, 2024",
            videoUrl: "https://www.youtube.com/watch?v=07Y9xnwNk1w",
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
  <h2 class="font-fraunces font-extrabold text-5xl mb-10 dark:text-white">Lecture Recordings and Slides</h2>
</div>

<Accordion.Root class="dark:text-white max-w-3xl mx-auto [&>*]:border-b-2 [&>*]:border-gray-600 dark:[&>*]:border-gray-300">
<!--<Accordion.Root class="dark:text-white max-w-3xl mx-auto">-->
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
