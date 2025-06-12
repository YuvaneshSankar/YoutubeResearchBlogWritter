from crewai import Task
from tools import yt_tool
from agents import blog_researcher, content_writer

research_task = Task(
    description=(
        "Analyze the YouTube channel {youtube_channel_handle} and retrieve highly relevant and informative video content "
        "related to the blog topic '{topic}'. Extract insights, examples, and factual takeaways from the most appropriate videos."
    ),
    expected_output=(
        "A well-structured research summary based on YouTube video content, organized into 3 detailed paragraphs:\n"
        "1. Introduction to the topic with context from the videos\n"
        "2. Main insights, statistics, or techniques discussed in the videos\n"
        "3. Concluding thoughts or key takeaways from the creator's perspective"
    ),
    agent=blog_researcher,
    tools=[yt_tool]
)

writing_task = Task(
    description=(
        "Use the research summary provided on the topic '{topic}' to write an engaging and SEO-optimized blog post. "
        "Ensure the tone is reader-friendly and informative, while maintaining clarity and coherence throughout the content."
    ),
    expected_output=(
        "A complete blog post in 3-4 paragraphs:\n"
        "1. A compelling introduction with a hook to draw readers in\n"
        "2. A body section expanding on insights and information in a structured flow\n"
        "3. A conclusion that summarizes key takeaways and optionally includes a CTA (Call to Action)"
    ),
    agent=content_writer,
    async_execution=False,
    output_file="blog_post.md"
)

