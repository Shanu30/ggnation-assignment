import React from "react";
import {
    AiFillFacebook,
    AiFillTwitterSquare,
    AiFillLinkedin,
  } from "react-icons/ai";
import styles from "./gg.module.css";

const Social = () => {
  return (
    <div className={styles.socialMediaIcon}>
      <AiFillFacebook color="#ccc" size="30px" />
      <AiFillTwitterSquare color="#ccc" size="30px" />
      <AiFillLinkedin color="#ccc" size="30px" />
    </div>
  );
};

export default Social;
