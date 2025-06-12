from crewai import Agent
import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
llm=ChatOpenAI()
load_dotenv()

blog_researcher=Agent(
    role="Blog researcher from youtbe videos",
    goal="Get the relevent vidoe contetn for the topic{topic} from youtbe channel ",
    verbose=True,
    llm=llm,
    memory=True,
    backstory=("Expert in undertanding youtube vidoes and extracting the relevent content for the topic"),
    tools=[],
    allow_delegation=True
)

content_writer = Agent(
    role="Content writer and blog creator",
    goal="Write engaging and SEO-friendly content based on the research provided for the topic {topic}",
    verbose=True,
    llm=llm,
    memory=True,
    backstory=(
        "A skilled content strategist and writer who crafts compelling narratives, optimized blogs, and well-structured articles "
        "from raw research and bullet points. Expert in tone, flow, readability, and target audience adaptation."
    ),
    tools=[],
    allow_delegation=False
)
