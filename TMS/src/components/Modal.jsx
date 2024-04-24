import { useState } from "react";
import style from "../styling/Modal.module.css";
import axios from "axios";

function Modal() {
  const [user, setUser] = useState({
    headline: "",
    description: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(e.target.value);
  };

  const postData = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      axios.post("http://localhost:8000/", { user });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={style.mybox}>
        <form method="POST" className={style.mybox1}>
          <h3>Headline</h3>
          <input
            name="headline"
            type="text"
            onChange={handleInput}
            value={user.headline}
            className={style.headline}
            placeholder="Enter Headline"
          ></input>
          <h3>Description</h3>
          <textarea
            name="description"
            typeof="text"
            onChange={handleInput}
            value={user.description}
            className={style.description}
            placeholder="Enter Description"
          ></textarea>
          <button className={style.discard}>Discard</button>
          <button type="submit" className={style.submit} onClick={postData}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Modal;
