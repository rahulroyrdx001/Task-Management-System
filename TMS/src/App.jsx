import MyNavbar from "./components/MyNavbar";
import style from "../src/App.module.css";
import MyWorkingarea from "./components/MyWorkingarea";
import MyAnalytics from "./components/MyAnalytics";
function App() {
  return (
    <>
      <div className={style.mybackground}></div>
      <MyNavbar></MyNavbar>
      <div className={style.tracking}>
        <MyAnalytics></MyAnalytics>
        <MyWorkingarea></MyWorkingarea>
      </div>
    </>
  );
}
export default App;
