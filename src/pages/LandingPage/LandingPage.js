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

            <div className={"landing__text"}>
              <h1>Hi, I'm Karl!</h1>
              <p>I'm a Computer Science student at the University of Tartu and a passionate software developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam architecto at, cupiditate, dolore doloremque dolorum esse eveniet ipsum iusto natus nostrum quas quasi qui, sapiente similique sunt temporibus ullam.</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default LandingPage;