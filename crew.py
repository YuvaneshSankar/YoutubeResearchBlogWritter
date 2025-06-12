from crewai import Crew,Process
from agents import blog_researcher,content_writer
from tasks import research_task,writing_task

crew=Crew(
    agents=[blog_researcher, content_writer],
    tasks=[research_task, writing_task],
    process=Process.sequential,
    memory=True,
    cache=True,
    max_rpm=100,
    share_crew=True
)

result=crew.kickoff(inputs={'topic':"The Psychology Behind Viral Challenges and Generosity in MrBeast Videos","youtube_channel_handle":"@MrBeast"})