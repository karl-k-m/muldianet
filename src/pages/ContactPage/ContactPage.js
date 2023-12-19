import {useEffect, useState} from "react";
import "./ContactPage.css";
import githubLogo from "../../assets/images/github-mark-white.png"
import linkedinLogo from "../../assets/images/linkedin.png"

function ContactPage() {
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
        <div className={"contact_wrapper"}>
            <div className={isVisible ? "content" : "content fadeOut"}>
                <div className={"contact_container"}>
                    <h1 className={"text_divider"}>Contact</h1>
                    <div className={"contact_icons"}>
                        <a href={"https://github.com/karl-k-m"}><img src={githubLogo} alt={"https://github.com/karl-k-m"}/></a>
                        <a href={"https://www.linkedin.com/in/karl-kustav-muldia/"}><img src={linkedinLogo} alt={"https://www.linkedin.com/in/karl-kustav-muldia/"}/></a>
                    </div>
                    <div className={"contact_info"}>
                        <p>
                            For any questions or inquiries, you can contact me at <a href={"mailto:karl.k.muldia@gmail.com"}>karl.k.muldia@gmail.com</a>
                        </p>
                    </div>
                    <hr style = {{color: "silver",
                        border: "none",
                        height: "1.5px",
                        background: "silver",}}/>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;