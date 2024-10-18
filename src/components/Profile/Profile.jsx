import css from "./Profile.module.css";
import PropTypes from "prop-types";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
    return (
        <div className={css.profileBox}>
      <div>
        <img className={css.mainImage} src={image} alt="User avatar" />
        <p className={css.nameTitle}>{name}</p>
        <p className={css.nicknameTitle}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.listItem}>
          <span className={css.listTitle}>Followers</span>
          <span className={css.listAmount}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listTitle}>Views</span>
          <span className={css.listAmount}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listTitle}>Likes</span>
          <span className={css.listAmount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.string,
    stats: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};
