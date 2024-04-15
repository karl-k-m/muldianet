import "./gotoandplay2024.css";

function gotoandplay2024() {
    return (
        <div className={"youtube_wrapper"}>
            <iframe className={"youtube_video"}
                width="800"
                height="450"
                src="https://www.youtube.com/embed/Jhc-2-RBBQA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
    );
}

export default gotoandplay2024;