import {useEffect, useState} from "react";
import "./AboutPage.css";

function AboutPage() {
    useEffect(() => {
        document.title = document.title.toString().split(" | ")[0] + " | About";
    }, []);

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        return () => {
            setIsVisible(false);
        };
    }, []);

  return (
    <div className={"about_wrapper"}>
        <div className={isVisible ? "content" : "content fadeOut"}>
            <div className={"about_container"}>
                <div className={"about__text"}>
                    <div class={"about_block lsl"}>
                        <h1 className={"text_divider"}>Long Story Short</h1>
                        <p>
                            I am a computer science student at the University of Tartu and a someone who has always been big fan of all things technology. My path to computer science started when I was about thirteen, when I started experimenting with Minecraft mod development (truth be told I wasn't very good).
                            <br /><br />
                            I also enjoy gaming, though these days I don't have as much time for it as I used to. To be honest, I more or less play the exact same things I played 8 years ago - Minecraft, Counter Strike, R6S.
                        </p>
                    </div>
                    <br />
                    <div class={"about_block wat"}>
                        <h1 className={"text_divider"}>What exactly do I do?</h1>
                        <div className={"content_wrapper"}>
                            <p className={"text_section"}>
                                These days I mostly focus on back-end development, though I am working to also improve my front-end skill set. Day-to-day I mostly work with C#, Java and Python, though other things do sometimes come into the mix.
                                <br/><br/>
                                I have worked with a number of languages and technologies in the past, and still do. However, I am not really one to bounce from framework to framework or language to language often. Generally, I believe that one of the most important parts of software development is choosing the right tool for the job.
                                <br/><br/>
                                I am also a big fan of single-board microcontroller development. Think Arduino, Raspberry Pi and similar boards. Tinkering with electronics is a good way to get to work on something physical when most of your day is spent on software.
                            </p>
                            <div className={"grid"} align="center">
                                <img width="50" src="https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png" alt="C#" title="C#"/>
                                <img width="50" src="https://user-images.githubusercontent.com/25181517/121405754-b4f48f80-c95d-11eb-8893-fc325bde617f.png" alt=".NET Core" title=".NET Core"/>
                                <img width="50" src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png" alt="Java" title="Java"/>
                                <img width="50" src="https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png" alt="Spring Boot" title="Spring Boot"/>
                                <img width="50" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" title="Python"/>
                                <img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
                                <img width="50" src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png" alt="Angular" title="Angular"/>
                                <img width="50" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="JavaScript" title="JavaScript"/>
                                <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
                                <img width="50" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" title="PostgreSQL"/>
                                <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa" alt="Linux" title="Linux"/>
                                <img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/a57a85ba-e2dd-4036-85b6-7e1532391627" alt="Arduino" title="Arduino"/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class={"about_block goals"}>
                        <h1 className={"text_divider"}>What are my goals?</h1>
                        <p>
                            Right now, my two highest priorities are to finish my degree and land a job or an internship in the tech field. After that's dealt with, I'd like to travel as much as my responsibilities permit me.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutPage;