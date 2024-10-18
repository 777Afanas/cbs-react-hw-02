import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({avatar, name, isOnline}) {
    const isOnLine = clsx(
        css.onlineInfo,
        isOnline ? css.friendsIsOnline : css.friendsIsOffline
    );

    return (
        <div>
    <img className={css.friendsImg} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendsName}>{name}</p>
            <p className={isOnLine}>{isOnline ? "Online" : "OffLine"}</p>
  </div>)
}
      
FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
  
