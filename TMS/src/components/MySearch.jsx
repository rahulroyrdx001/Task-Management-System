import MyCreate from "./MyCreate";
function MySearch() {
  return (
    <>
      <form>
        <input
          className="Searchbox"
          type="text"
          placeholder="Search here!"
        ></input>
        <button className="Searchbtn">Search</button>
        <MyCreate></MyCreate>
      </form>
    </>
  );
}
export default MySearch;
