import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({avatar, name, isOnline}) {
    const isOnLine = clsx(
        css.onlineInfo,
        isOnLine ? css.friendsIsOnline : css.friendsIsOffline
    );

    return (
        <div>
    <img className={css.friendsImg} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendsName}>{name}</p>
            <p className={isOnLine}>{isOnLine ? "Online" : "OffLine"}</p>
  </div>)
}
      
  
  
