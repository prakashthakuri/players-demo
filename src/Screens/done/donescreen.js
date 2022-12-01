import React, { useEffect, useState } from "react";
import classes from "./donescreen.module.css";
import Card from "../../components/Card";
import { allplayer } from "../../services/API";

function Donescreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    AllPlayers();
  }, []);

  const AllPlayers = async () => {
    try {
      const response = await allplayer();
      setData(response.data.message);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={classes.mainComponent}>
      <div className={classes.subContainer}>
        <div className={classes.headingContainer}>Profiles</div>
        <div className={classes.cardMainContainer}>
          {data.map((item, index) => {
            return (
              <Card
                index={index}
                item={item}
                date_of_birth={item.date_of_birth}
                description={item.description}
                gender={item.gender}
                location={item.location}
                name={item.name}
                team={item.team}
                sports={item.sports[0]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Donescreen;
