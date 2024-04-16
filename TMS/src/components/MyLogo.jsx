import style from "../styling/MyLogo.module.css"
import logo from "../assets/logo.png"
function MyLogo() {
  return (
    <>
      <div className={style.logo}>
        <img src={logo}/>
      </div>
    </>
  );
}
export default MyLogo;
