import style from "../styling/Modal.module.css";

function Modal() {
  return (
    <>
      <div className={style.mybox}>
        <form className={style.mybox1}>
          <h3>Headline</h3>
          <input
            type="text"
            className={style.headline}
            placeholder="Enter Headline"
          ></input>
          <h3>Description</h3>
          <textarea
            type="text"
            className={style.description}
            placeholder="Enter Description"
          ></textarea>
          <button className={style.discard}>Discard</button>
          <button className={style.submit}>Submit</button>
        </form>
      </div>
    </>
  );
}
export default Modal;
