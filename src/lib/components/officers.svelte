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
            bio: "I'm an undergrad studying math and researching in neural computation and artificial life. I'm interested in all things AI from language models to spiking neural networks."
        },
        {
            name: "Shriya Gautam",
            title: "Vice President of Outreach",
            picture: "/images/shriya_gautam.jpeg",
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
        },
        {
            name: "Nathan Wolf",
            title: "Events Coordinator",
            picture: "/images/ml-logo-border.jpeg",
            bio: ""
        },
        {
            name: "Mark Iyer",
            title: "Events Coordinator",
            picture: "/images/ml-logo-border.jpeg",
            bio: ""
        },
        {
            name: "Rehan Taneja",
            title: "Project Lead",
            picture: "/images/ml-logo-border.jpeg",
            bio: "Hey,I'm Rehan! I'm an AI enthusiast, part-time model tuner and full-time overfitter. When I'm not making machines learn, I'm probably debugging why they won’t. Passionate about building cool AI projects, optimizing hyperparameters, and pretending my code worked on the first try. If you see me staring at my screen it's definitely not because I'm confused(send snacks)."
        },
        {
            name: "Aryaman Goenka",
            title: "Project Lead",
            picture: "/images/ml-logo-border.jpeg",
            bio: "Hi, I’m Aryaman Goenka! I’m a curious and driven Computer Science freshman at UMass Amherst, passionate about building tech that makes an impact. Whether it’s crafting AI-driven apps, designing neural network tools, or diving into hackathons, I thrive at the intersection of creativity and problem-solving. I love experimenting, learning, and collaborating on projects that push boundaries. Let’s innovate, build, and make cool things happen together!"
        },
        {
            name: "Eric Nunes",
            title: "Project Lead",
            picture: "/images/ml-logo-border.jpeg",
            bio: "Howdy, I'm Eric! Originally from Austin, TX, I'm a first-year grad student in the MSCS program after having graduated from Texas A&M with my Bachelor's in Spring 2024, and I'm excited to serve as a project lead this semester! Outside of computer science, my other interests are in hiking and music (you can also find me active on WMUA-FM). Looking forward to an amazing semester with y'all!"
        },
        {
            name: "Jonathan Liu",
            title: "Marketing Coordinator",
            picture: "/images/jonathan_liu.jpg",
            bio: "Hey everyone, I’m Jonathan! I’m a freshman CS major with an interest in AI/ML, particularly natural language processing and computer vision. I’m excited to use AI to solve real-world problems in the future. I’m also looking forward to serving as a MassAI marketing coordinator this semester and can’t wait to meet you all!"
        }
    ];
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

