import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { VideoCall, Apps, Notifications } from "@material-ui/icons";
import "./Buttons.css";

const Buttons = () => {
  return (
    <div className="buttons">
      <div className="buttons__icon">
        <IconButton>
          <VideoCall />
        </IconButton>
      </div>
      <div className="buttons__icon">
        <IconButton>
          <Apps />
        </IconButton>
      </div>
      <div className="buttons__icon">
        <IconButton>
          <Badge color="secondary" badgeContent={4}>
            <Notifications />
          </Badge>
        </IconButton>
      </div>
      <div className="buttons__avatar">
        <Avatar />
      </div>
    </div>
  );
};

export default Buttons;
