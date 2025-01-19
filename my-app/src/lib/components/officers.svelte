<script lang="ts">
    const eBoardMembers = [
        {
            name: " Donald Winkelman",
            title: "President of Outreach",
            picture: "/images/donnie.png",
            bio: "Hi y’all, I’m Donnie! I’m in the MS CS program at UMass and delving further into deep learning! I’ve done some research in interpretability and safety (exploring how models think) alongside experiments with computer vision models. I enjoy reading papers in medicine and ML and want to specialize in medical AI to increase diagnostic accuracy, surgical accuracy, enable the development of more complex laboratory-made proteins, and much more. Look forward to meeting y'all!"
        },
        {
            name: " Aryaman Tepal",
            title: "President of Education",
            picture: "/images/aryaman.png",
            bio: "Coming soon..."
        },
        {
            name: "Niko Lorantos",
            title: "Vice President of Education",
            picture: "/images/niko.jpg",
            bio: "Niko Lorantos is an honors student studying computational mathematics and minoring in philosophy. He is interested in all things AI, from industry trends to niche research topics. He is currently involved in artificial life research at Amherst College."
        },
        {
            name: "Shriya Gautam",
            title: "Vice President of Outreach",
            picture: "/images/ml-logo-border.png",
            bio: "Coming soon..."
        },
        {
            name: "Adriana Caraeni",
            title: "Events Coordinator / Lecturer",
            picture: "/images/adriana.jpg",
            bio: "Honors Dual Degree in CS + Math plus Business Minor. I like rollerblading, biking, dancing, skiiing,  ..."
        }
    ];
</script>

<div class="text-center my-12">
    <h1 class="text-3xl font-bold">Leadership</h2>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
    {#each eBoardMembers as member}
        <div class="bg-white shadow-lg rounded-lg p-6">
            <div class="flex flex-col items-center">
                <img src={member.picture} alt={member.name} class="w-24 h-24 rounded-full mb-4" />
                <h2 class="text-xl font-bold">{member.name}</h2>
                <h3 class="text-gray-600">{member.title}</h3>
                <p class="text-center mt-4">{member.bio}</p>
            </div>
        </div>
    {/each}
</div>

