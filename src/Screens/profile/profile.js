import React, { useState } from "react";
import Modal from "../../components/modal/modal";
import classes from "./profile.module.css";

const Profile = ({ closeForm, item }) => {
  return (
    <Modal>
     <div  className={classes.mainComponent}>
      <div className={classes.imageComponent}>
       <div style={{color:'#176fc5'}}>Details</div>

        <img
          style={{ height: "90%", width: "100%" }}
          src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
          alt="Dummy Profile Image Jpg, HD Png Download@kindpng.com"
        />
      </div>
      <div className={classes.rightComponent}>
        <div className={classes.detailComponent}>
          <div className={classes.leftDetailComponent}>Name: {item.name}</div>
          <div className={classes.rightDetailComponent}>
            Date of birth: {item.date_of_birth}
          </div>
        </div>
        <div className={classes.detailComponent}>
          <div className={classes.leftDetailComponent}>Gender: {item.gender}</div>
          <div className={classes.rightDetailComponent}>Team: {item.team}</div>
        </div>
        <div className={classes.detailComponent}>
          <div className={classes.leftDetailComponent}>
            Location: {item.location}
          </div>
          <div className={classes.rightDetailComponent}>Sports: {item.sports}</div>
        </div>
        <div className={classes.detailComponent}>
          <div className={classes.bottomComponent}>
            Description: {item.description}
          </div>
        </div>
     <button onClick={closeForm} className={classes.button}>Close</button>
      </div>
    </div>
    </Modal>
  );
};

export default Profile;
