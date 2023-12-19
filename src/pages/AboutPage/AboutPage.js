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
                        <p>I'm a Computer Science student at the University of Tartu and a passionate software developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam architecto at, cupiditate, dolore doloremque dolorum esse eveniet ipsum iusto natus nostrum quas quasi qui, sapiente similique sunt temporibus ullam.</p>
                    </div>
                    <br />
                    <div class={"about_block wat"}>
                        <h1 className={"text_divider"}>What exactly do I do?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa debitis dignissimos eum facilis fugiat harum magni minima molestias nulla numquam, odio, quae quam, sed sunt veritatis voluptas voluptatem voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae eaque eum ipsam labore placeat sapiente totam velit. Accusamus consequatur dolorum error quos suscipit. Consectetur cupiditate incidunt quisquam soluta ullam.</p>
                    </div>
                    <br />
                    <div class={"about_block goals"}>
                        <h1 className={"text_divider"}>What am I looking to achieve?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa debitis dignissimos eum facilis fugiat harum magni minima molestias nulla numquam, odio, quae quam, sed sunt veritatis voluptas voluptatem voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae eaque eum ipsam labore placeat sapiente totam velit. Accusamus consequatur dolorum error quos suscipit. Consectetur cupiditate incidunt quisquam soluta ullam.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutPage;