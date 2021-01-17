import { Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { faTwitter } from '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconContext } from "react-icons";
import { FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa';

const SnsButtons = (props) => {
    return (
        <div className={props.snsButtons}>
        <Toolbar className={props.snsToolBar}>
          <IconButton edge="start" className={props.snsMark} color="inherit" aria-label="menu">
            <FaTwitter />
          </IconButton>
          <IconButton edge="start" className={props.snsMark} color="inherit" aria-label="menu">
            <FaInstagram />
          </IconButton>
          <IconButton edge="start" className={props.snsMark} color="inherit" aria-label="menu">
            <FaFacebook />
          </IconButton>
        </Toolbar>
      </div>
    );
}

export default SnsButtons;