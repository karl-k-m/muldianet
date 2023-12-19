import ProjectBox from "../../components/ProjectBox/ProjectBox";
import pfpImage from "../../assets/images/pfp_nb_zoom.png";
import {useEffect, useState} from "react";
import "./ProjectsPage.css";

function ProjectsPage() {
    useEffect(() => {
        document.title = document.title.toString().split(" | ")[0] + " | Projects";
    }, []);

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        return () => {
            setIsVisible(false);
        };
    }, []);

    return (
        <div className={"projects_wrapper"}>
            <div className={isVisible ? "content" : "content fadeOut"}>
                <ProjectBox
                    title={"Project 1"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias"}
                    image={pfpImage}
                    link={"https://github.com"}
                />
                <ProjectBox
                    title={"Project 1"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias"}
                    image={pfpImage}
                    link={"https://github.com"}
                />
                <ProjectBox
                    title={"Project 1"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias"}
                    image={pfpImage}
                    link={"https://github.com"}
                />
                <ProjectBox
                    title={"Project 1"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias"}
                    image={pfpImage}
                    link={"https://github.com"}
                />
                <ProjectBox
                    title={"Project 1"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias"}
                    image={pfpImage}
                    link={"https://github.com"}
                />
            </div>
        </div>
    );
}

export default ProjectsPage;