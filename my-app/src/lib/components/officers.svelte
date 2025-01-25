<script lang="ts">
    const eBoardMembers = [
        {
            name: " Donald Winkelman",
            title: "President of Outreach",
            picture: "/images/donnie_winkelman.jpg",
            bio: "Hi y’all, I’m Donnie! I’m in the MS CS program at UMass and delving further into deep learning! I’ve done some research in interpretability and safety (exploring how models think) alongside experiments with computer vision models. I enjoy reading papers in medicine and ML and want to specialize in medical AI to increase diagnostic accuracy, surgical accuracy, enable the development of more complex laboratory-made proteins, and much more. Look forward to meeting y'all!"
        },
        {
            name: " Aryaman Tepal",
            title: "President of Education",
            picture: "/images/aryaman_tepal.jpg",
            bio: "Hi, I'm Aryaman! I'm a sophomore Honors CS + Applied Math major, and I'm looking forward to being the president of education this semester! I've worked on some research in Hyperspectral Image Clustering and Trustworthy AI / ML research. I really love soccer, so I'm currently exploring geometric DL to figure out how Barcelona can concede less goals. That said, I enjoy the math & algorithm side of things quite a bit, so I enjoy working on any applications of ML in real-life! Very excited for this upcoming semester!"
        },
        {
            name: "Niko Lorantos",
            title: "Vice President of Education",
            picture: "/images/niko_lorantos.jpg",
            bio: "Niko Lorantos is an honors student studying computational mathematics and minoring in philosophy. He is interested in all things AI, from industry trends to niche research topics. He is currently involved in artificial life research at Amherst College."
        },
        {
            name: "Shriya Gautam",
            title: "Vice President of Outreach",
            picture: "/images/ml-logo-border.png",
            bio: "Hi! I'm a sophomore CS/Stats major and philosophy minor, and I'm extremely excited to be your VP of Outreach this semester! I'm especially interested in using ML to solve real world problems, especially when combined with other fields of study. Feel free to ask me about any of my previous ML projects!"
        },
        {
            name: "Adriana Caraeni",
            title: "Events Coordinator / Lecturer",
            picture: "/images/adriana_caraeni.jpg",
            bio: "Honors Dual Degree in CS + Math plus Business Minor. I like rollerblading, biking, dancing, skiiing,  ..."
        },
        {
            name: "Trung Dang",
            title: "Lecturer",
            picture: "/images/trung_dang.jpg",
            bio: "Hi, I'm Trung, a senior CS & Math major and Physics minor at UMass Amherst. I am currently a member of DARoS lab researching Reinforcement Learning for robotics. I am particularly interested in self-supervised learning and hierarchical reinforcement learning. Additionally, I am a part-time trader and a quant wanna-be, so if you have any profitable alpha, spill the tea 😉."
        }
    ];
</script>

<div class="text-center mb-10">
    <h1 class="font-fraunces text-4xl font-bold">Leadership</h1>
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

