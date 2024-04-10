import MySearch from "./MySearch";
import MyLogo from "./MyLogo";
import MyProfile from "./MyProfile";
import style from "../styling/MyNavbar.module.css";
function MyNavbar() {
  return (
    <>
      <div className={style.mynavbar}>
        <MyLogo></MyLogo>
        <MySearch></MySearch>
        <MyProfile></MyProfile>
      </div>
    </>
  );
}
export default MyNavbar;
