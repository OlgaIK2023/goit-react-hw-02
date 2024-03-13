// import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({name, image, location, stats: { followers, likes, views } , tag }) => {
    return (
        <div className={css.profileContainer}>
  <div>
    <img className={css.profileImage}
      src= {image}
      alt="User avatar"
    />
    <p className={css.profileName}> {name} </p>
    <p className={css.profileTag}>{tag}</p>
    <p className={css.profileLocation}>{location}</p>
  </div>

  <ul className={css.statsTable}>
    <li className={css.statsItemFollowers}>
      <span>Followers </span>
      <span className={css.statsNumbers}>{followers}</span>
    </li>
    <li className={css.statsItemViews}>
      <span>Views </span>
      <span className={css.statsNumbers}>{views}</span>
    </li>
    <li className={css.statsItemLikes}>
      <span>Likes </span>
      <span className={css.statsNumbers}>{likes}</span>
    </li>
  </ul>
</div>
    );
}

export default Profile;