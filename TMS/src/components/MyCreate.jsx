import { useState } from "react";
import style from "../styling/MyCreate.module.css"
import Modal from "../components/Modal";

function MyCreate() {
  const [showModal,setshowModal] = useState(false);
  
  return (
    <>
      <button onClick={()=>setshowModal(true)} className={style.createbtn}>Create</button>
      {showModal && <Modal/>}
    </>
  );
}
export default MyCreate;
