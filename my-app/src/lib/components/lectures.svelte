<script>
  export let lectures = [
    {
      title: "Introduction to Reinforcement Learning",
      date: "November 10, 2024",
      videoUrl: "https://www.youtube.com/watch?v=dHa3Ju-QsDs&t=22s",
      resources: [
        { name: "Lecture Slides", url: "https://example.com/lecture-slides" },
        { name: "Related Article", url: "https://example.com/related-article" }
      ]
    }, 
    {
      title: "Introduction to Deep Reinforcement Learning",
      date: "November 10, 2024",
      videoUrl: "https://www.youtube.com/watch?v=dHa3Ju-QsDs&t=22s",
      resources: [
        { name: "Lecture Slides", url: "https://example.com/lecture-slides" },
        { name: "Related Article", url: "https://example.com/related-article" }
      ]
    }, 
    {
      title: "Introduction to Imitation Learning",
      date: "November 10, 2024",
      videoUrl: "https://www.youtube.com/watch?v=dHa3Ju-QsDs&t=22s",
      resources: [
        { name: "Lecture Slides", url: "https://example.com/lecture-slides" },
        { name: "Related Article", url: "https://example.com/related-article" }
      ]
    }
  ];

  let openLecture = null;

  function toggleLecture(index) {
    openLecture = openLecture === index ? null : index;
  }
</script>

<style>
  .lecture-container {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }
  .lecture-item {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  .lecture-title {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lecture-title::after {
    content: '\25BC';
    font-size: 0.8em;
    margin-left: 10px;
    transition: transform 0.3s;
  }
  .lecture-title.open::after {
    transform: rotate(180deg);
  }
  .lecture-date {
    font-style: italic;
    margin-bottom: 10px;
  }
  .lecture-resources {
    margin-top: 10px;
  }
  .resource-link {
    display: block;
    margin: 5px 0;
    color: #007acc;
    text-decoration: none;
  }
  .resource-link:hover {
    text-decoration: underline;
  }
  .lecture-content {
    display: none;
  }
  .lecture-content.open {
    display: block;
  }
  .lecture-video a {
    text-decoration: none;
    color: inherit;
  }
</style>

<div class="text-center my-12">
    <h2 class="text-3xl font-bold">Lectures:</h2>
</div>
<div class="lecture-container">
  {#each lectures as lecture, index}
    <div class="lecture-item">
      <div class="lecture-title {openLecture === index ? 'open' : ''}" on:click={() => toggleLecture(index)}>{lecture.title}</div>
      <div class="lecture-content {openLecture === index ? 'open' : ''}">
        <div class="lecture-date">{lecture.date}</div>
        <div class="lecture-video">
          <a href={`https://www.youtube.com/watch?v=${lecture.videoUrl.split('/embed/')[1]}`} target="_blank" rel="noopener noreferrer">
            <iframe title="{lecture.title}" width="560" height="315" src={lecture.videoUrl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </a>
        </div>
        <div class="lecture-resources">
          <h3>Resources:</h3>
          {#each lecture.resources as resource}
            <a class="resource-link" href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>
