import MyCreate from "./MyCreate";
import style from "../styling/MySearch.module.css";
import { IoSearchSharp } from "react-icons/io5";
function MySearch() {
  return (
    <>
      <div className={style.snavigation}>
        <form className={style.searchbox}>
          <input
            className={style.searchtxt}
            type="text"
            placeholder="Search here!"
          ></input>
          <div className={style.sicon}>
            <IoSearchSharp className={style.searchicon} />
          </div>
        </form>
        <MyCreate></MyCreate>
      </div>
    </>
  );
}
export default MySearch;
