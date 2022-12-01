import React, { useState } from "react";
import classes from "./card.module.css";
import Profile from "../Screens/profile/profile";

const Card = ({
  date_of_birth,
  description,
  gender,
  location,
  name,
  team,
  sports,
  index,
  item,
}) => {
  const [contactModal, setContactModal] = useState(false);
  const switchContactModal = () => {
    setContactModal(!contactModal);
  };

  return (
    <>
      <div onClick={switchContactModal} className={classes.mainComponent}>
        <div className={classes.imageComponent}>
          <img
            style={{ height: "100%", width: "100%" }}
            src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
            alt="Dummy Profile Image Jpg, HD Png Download@kindpng.com"
          />
        </div>
        <div className={classes.rightComponent}>
          <div className={classes.detailComponent}>
            <div className={classes.leftDetailComponent}>Name: {name}</div>
            <div className={classes.rightDetailComponent}>
              Date of birth: {date_of_birth}
            </div>
          </div>
          <div className={classes.detailComponent}>
            <div className={classes.leftDetailComponent}>Gender: {gender}</div>
            <div className={classes.rightDetailComponent}>Team: {team}</div>
          </div>
          <div className={classes.detailComponent}>
            <div className={classes.leftDetailComponent}>
              Location: {location}
            </div>
            <div className={classes.rightDetailComponent}>Sports: {sports}</div>
          </div>
          <div className={classes.detailComponent}>
            <div className={classes.bottomComponent}>
              Description: {description}
            </div>
          </div>
        </div>
      </div>
      {contactModal && <Profile item={item} closeForm={switchContactModal} />}
    </>
  );
};

export default Card;
