import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
