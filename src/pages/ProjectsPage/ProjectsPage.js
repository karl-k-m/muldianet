import ProjectBox from "../../components/ProjectBox/ProjectBox";
import {useEffect, useState} from "react";
import "./ProjectsPage.css";
import idBruteImage from "../../assets/images/idbrute.png"
import cTweaksImage from "../../assets/images/ctweaks.png"
import muldianetImage from "../../assets/images/muldianet.png"
import elsaImage from "../../assets/images/elsa.png"

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
                    title={"idBruteforcer"}
                    description={"Python program which bruteforces Estonian ID code certs based on Date of Birth and Gender using the public ID API."}
                    image={idBruteImage}
                    link={"https://github.com/karl-k-m/idBruteforcer"}
                />
                <ProjectBox
                    title={"cTweaks"}
                    description={"PaperMC / Spigot (Java) plugin which adds various tweaks and items to enhance survival gameplay. I add new features whenever something in the game annoys me enough."}
                    image={cTweaksImage}
                    link={"https://github.com/karl-k-m/cTweaks"}
                />
                <ProjectBox
                    title={"This"}
                    description={"Insert recursion joke here. This website was made using React and is hosted on GitHub Pages. Source code is available on GitHub."}
                    image={muldianetImage}
                    link={"https://github.com/karl-k-m/muldianet"}
                />
                <ProjectBox
                    title={"Elsa Jaamarestoran Homepage"}
                    description={"Website for a restaurant in Tallinn, Estonia. This website is made with Angular and a demo is hosted on GitHub Pages. WIP."}
                    image={elsaImage}
                    link={"https://github.com/karl-k-m/elsa-website"}
                />
            </div>
        </div>
    );
}

export default ProjectsPage;