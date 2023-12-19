import "./LandingPage.css";
import pfpImage from "../../assets/images/pfp_nb_zoom.png";
import {useEffect, useState} from "react";
function LandingPage() {
    useEffect(() => {
        document.title = document.title.toString().split(" | ")[0];
    }, []);

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        return () => {
            setIsVisible(false);
        };
    }, []);

  return (
    <div className={"landing_wrapper"}>
        <div className={isVisible ? "content" : "content fadeOut"}>
          <div className={"landing_container"}>
            <img className={"pfp"} src={pfpImage} alt={"Portrait"} />

            <div className={"landing_text"}>
              <h1>Hi, I'm Karl!</h1>
              <p>I'm a Computer Science student at the University of Tartu and a passionate software developer. I am currently working on a few projects, which you can check out on the Projects page. I am also looking for a job or an internship, so if you are interested, please contact me via the Contact page. For more info on me, see the About page.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default LandingPage;