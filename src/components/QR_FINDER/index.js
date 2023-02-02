import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const memeLinks = [
  "http://drive.google.com/uc?export=view&id=1OsCG_5uPeAO1uJyLam0CWt9kGPNatGLx",
  "http://drive.google.com/uc?export=view&id=1Onm7ee4y1JJTaaCdGQ-btxelLHH8ociO",
  "http://drive.google.com/uc?export=view&id=1O_AojyXwyPQNzx5Mmilr6FC-oz7gYU2o",
  "http://drive.google.com/uc?export=view&id=1OjcViZKDBtQyw1QEjQfjyS5kPbYxZRkO",
  "http://drive.google.com/uc?export=view&id=1OW5CjcJoxpXWoZM4-F6nywBWVKSBWjmj",
  "http://drive.google.com/uc?export=view&id=1O_4UnOTZQD6MwVPZDOxkxpJpP257tjvZ",
  "http://drive.google.com/uc?export=view&id=1OSMdT425YTpicpFQ4qjZl_ShL_OS89t0",
  "http://drive.google.com/uc?export=view&id=1OP1v1ljgpyG3ycg1HNvzCBj5-zKqNcep",
  "http://drive.google.com/uc?export=view&id=1OKg_8QOlFXh7ccsoC-9HXotmUbq_22yK",
  "http://drive.google.com/uc?export=view&id=1OKKE4iyPflLy81l6dXAD_uoX8wBWavgl",
];
const QR_FINDER = () => {
  const [src, setSrc] = useState("");
  const [toggler, setToggler] = useState(true);
  const [name, setName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Enter your name first");
      return;
    }
    let code = searchParams.get("code");
    if (code === "fake") {
      setSrc(memeLinks[Math.floor(Math.random() * 10)]);
      setToggler(false);
    } else {
      axios
        .get("https://sheetdb.io/api/v1/gwifantqnel4w")
        .then((res) => {
          let details;
          res.data.forEach((element, ind) => {
            if (element.Code === code) details = element;
          });
          if (details.Name !== "") {
            setSrc(
              "http://drive.google.com/uc?export=view&id=1XKyyWXBuKWe_JNhnjG9gd1G7PE2vV3Gt"
            );
          } else {
            console.log(details);
            axios
              .patch(`https://sheetdb.io/api/v1/gwifantqnel4w/Code/${code}`, {
                Name: name,
              })
              .then((res) =>
                setSrc(
                  "http://drive.google.com/uc?export=view&id=1VaxnMaR4hcb6z7RAT3P41Kz1AIz_bQ2i"
                )
              )
              .catch((err) => console.log(err));
          }
          setToggler(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={styles.Qr_container}>
      <h1 className={styles.heading}> QR FINDER</h1>
      {toggler && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input_name}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button className={styles.btn}>Submit</button>
        </form>
      )}
      {!toggler && (
        <img
          alt=""
          src={src}
          width="500"
          height="500"
          className={styles.image}
        />
      )}
    </div>
  );
};

export default QR_FINDER;
