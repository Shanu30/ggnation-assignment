import React from "react";
import { useState, useEffect } from "react";
import styles from "./gg.module.css";
import Contact from "./Contact";
import Social from "./Social";

const Profile = () => {

  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    let res = await fetch("http://localhost:3000/user_data");
    let data = await res.json();
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);


  return (
    <div className={styles.gradient}>
      {userData.map((item) => {
        return (
          <div className={styles.container} key={item.id}>
            <div className={styles.img}>
              <img src={item.image} alt={item.name} />
            </div>

            <div className={styles.info}>
              <p>HELLO EVERYBODY, I AM</p>
              <h1>{item.name.toUpperCase()}</h1>
              <h5>{item.designation}</h5>
              <p>{item.detail}</p>

              <Contact
                dob={item.dob}
                phone={item.phone}
                email={item.email}
                address={item.address}
              />
              <Social />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
