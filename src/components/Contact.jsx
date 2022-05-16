import React from "react";
import styles from "./gg.module.css";
import { BsTelephone, BsCalendar3 } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {  AiOutlineHome } from "react-icons/ai";

export const Contact = ({dob,phone,email,address}) => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <BsCalendar3 color="blue" size="15px" />
        <span>{dob}</span>
      </div>
      <div className={styles.contactInfo}>
        <BsTelephone color="blue" size="15px" />
        <span>{phone}</span>
      </div>
      <div className={styles.contactInfo}>
        <HiOutlineMail color="blue" size="17px" />
        <span>{email}</span>
      </div>
      <div className={styles.contactInfo}>
        <AiOutlineHome color="blue" size="17px" />
        <span>{address}</span>
      </div>
    </div>
  );
};

export default Contact;
