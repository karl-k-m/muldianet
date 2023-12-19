import "./ProjectBox.css"
import githubLogo from "../../assets/images/github-mark-white.png"

function ProjectBox(props) {
    return (
        <div className={"projectBox_wrapper"}>
            <div className={"projectBox_container"}>
                <img className={"projectBox_image"} src={props.image} alt={"Project demo"} />
                <div className={"projectBox_text"}>
                    <h3 className={"text_divider"}>{props.title}</h3>
                    <p>{props.description}</p>
                    <a className={"github_link"} href={props.link} target="_blank" rel="noreferrer"><img className={"github_logo"} src={githubLogo} alt={"Project Demo"}/> <p className={"pText"}> Project on GitHub</p></a>
                    <hr className={"bottomHr"} />
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;