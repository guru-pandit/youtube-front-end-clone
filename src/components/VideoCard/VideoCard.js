import "./VideoCard.css";

const VideoCard = () => {
  return (
    <div className="videocard">
      <div className="videocard__image">
        <img
          src="https://i.ytimg.com/vi/rFw6bo4Rjtk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCguvrHV8OXCfT453yFGRJF6WPBeQ"
          alt="Video Card"
        />
      </div>
      <div className="videocard__info">
        <div className="videocard__avatar">
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnhl9tn60x84WurEneL2VtYpy9ezOkbxxhXFALlf=s68-c-k-c0x00ffffff-no-rj"
            alt="Avatar"
          />
        </div>
        <div className="videocard__infoText">
          <h3>Artificial Intelligence Course Artificial Intelligence Course</h3>
          <p>LetsUpgrade</p>
          <p>22K views . 2 Days ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
