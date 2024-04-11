import style from "../styling/workingarea.module.css";
import ToDotittle from "./ToDotittle";
import InProgtittle from "./InProgtittle";
import ReviewTittle from "./ReviewTittle";
import DoneTittle from "./DoneTittle";
function MyWorkingarea() {
  return (
    <>
      <div className={style.warea}>
        <div className={style.worktittle}>
          <div className={style.box} id={style.todo}>Todo</div>
          <div className={style.box} id={style.inporg}>Inprogress</div>
          <div className={style.box} id={style.review}>Review</div>
          <div className={style.box} id={style.done}>Done</div>
        </div>
      </div>
    </>
  );
}
export default MyWorkingarea;
