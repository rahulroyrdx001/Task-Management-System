import MyNavbar from "./components/MyNavbar";
import style from "../src/App.module.css";
import MyWorkingarea from "./components/MyWorkingarea";
import MyAnalytics from "./components/MyAnalytics";
import WorkingBoard from "./components/WorkingBoard";
import Modal from "./components/Modal";
function App() {
 // const [Modalopen,setModalopen] = useState(false);
  return (
    <>
      <div className={style.mybackground}></div>
      <MyNavbar></MyNavbar>
      <div className={style.tracking}>
        <MyAnalytics></MyAnalytics>
        <MyWorkingarea></MyWorkingarea>
        
      </div>
      
      <div className={style.elements}>
        <div className={style.element1}></div>
        <div className={style.element2}></div>
        <div className={style.element4}></div>
        <div className={style.element5}></div>
        <div className={style.element6}></div>
        <div className={style.element7}></div>
        <div className={style.element3}></div>
      </div>
    </>
  );
}
export default App;
