export const links = {
    join: "https://linktr.ee/mass.ai",
    discord: "https://discord.com/invite/47e96wJEVK",
    linkedin: "https://www.linkedin.com/company/mass-ai",
    calendar: `https://calendar.google.com/calendar/render?cid=${encodeURIComponent("officers.mass.ai@gmail.com")}`,
};

export const about =
    "We are UMass Amherst's premier student organization for students passionate about machine learning and artificial intelligence. Whether you're interested in learning the fundamentals or eager to work on hands-on projects, this is the place for you!";

export const placementsBlurb =
    "From cutting-edge university labs and big tech to unicorns, quant firms, and seed-stage AI startups, our members are laying the foundations of modern AI systems.";

export const placements = [
    { name: "MIT", logo: "/images/MIT_Logo.png" },
    { name: "Nvidia", logo: "/images/Nvidia_Logo.png" },
    { name: "Lyft", logo: "/images/Lyft_Logo.png" },
    { name: "Meta", logo: "/images/Meta_Logo.png" },
    { name: "Citadel", logo: "/images/Citadel_Logo.png" },
];

export type ScheduleItem = { date: string; title: string; speakers: string; off?: boolean };

export const schedule: ScheduleItem[] = [
    { date: "2026-09-23", title: "Opening Meeting", speakers: "Adam, Kushaan & Aryaman" },
    { date: "2026-09-30", title: "Neural Network Basics: AlexNet", speakers: "Herbert & Yonathan" },
    { date: "2026-10-07", title: "Natural Language Processing", speakers: "Adam" },
    { date: "2026-10-14", title: "VLMs / Mechanistic Interpretability", speakers: "Guest Speaker" },
    { date: "2026-10-21", title: "Intro to LLMs, Part 1: RNNs", speakers: "Abhijay" },
    { date: "2026-10-28", title: "Intro to LLMs, Part 2: Transformers (Attention Is All You Need) & Finetuning", speakers: "Skye & Yonathan" },
    { date: "2026-11-04", title: "Agentic Coding: Coding Harnesses, MCP, RAG, A2A & Vector DBs", speakers: "Hue & Skye" },
    { date: "2026-11-11", title: "Hardware + Medical Vision AI", speakers: "Junaid & Bhargava" },
    { date: "2026-11-18", title: "AI Safety", speakers: "Ashutosh & Yash" },
    { date: "2026-11-25", title: "No meeting: Thanksgiving Break", speakers: "", off: true },
    { date: "2026-12-02", title: "Reinforcement Learning", speakers: "Kushaan" },
    { date: "2026-12-09", title: "World Models", speakers: "Kushaan" },
];

export function isPast(iso: string) {
    return iso < new Date().toISOString().slice(0, 10);
}

export function formatDate(iso: string) {
    return new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export const nextLecture = () => schedule.find((l) => !l.off && !isPast(l.date));

// Curated external material ("Start here"), grouped the way MIT AI Alignment's resources page is.
export const startHere = [
    {
        group: "Foundations",
        items: [
            { name: "Neural Networks", by: "3Blue1Brown", kind: "Video series", url: "https://www.3blue1brown.com/topics/neural-networks" },
            { name: "Neural Networks: Zero to Hero", by: "Andrej Karpathy", kind: "Video course", url: "https://karpathy.ai/zero-to-hero.html" },
            { name: "Practical Deep Learning for Coders", by: "fast.ai", kind: "Course", url: "https://course.fast.ai/" },
            { name: "Dive into Deep Learning", by: "Zhang et al.", kind: "Free textbook", url: "https://d2l.ai/" },
        ],
    },
    {
        group: "Go deeper",
        items: [
            { name: "CS231n: Deep Learning for Computer Vision", by: "Stanford", kind: "Course", url: "https://cs231n.stanford.edu/" },
            { name: "CS224n: NLP with Deep Learning", by: "Stanford", kind: "Course", url: "https://web.stanford.edu/class/cs224n/" },
            { name: "LLM Course", by: "Hugging Face", kind: "Course", url: "https://huggingface.co/learn/llm-course" },
            { name: "Spinning Up in Deep RL", by: "OpenAI", kind: "Guide", url: "https://spinningup.openai.com/" },
        ],
    },
    {
        group: "Classic reads",
        items: [
            { name: "The Illustrated Transformer", by: "Jay Alammar", kind: "Blog post", url: "https://jalammar.github.io/illustrated-transformer/" },
            { name: "Attention Is All You Need", by: "Vaswani et al.", kind: "Paper", url: "https://arxiv.org/abs/1706.03762" },
        ],
    },
];
