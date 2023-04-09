// import LeftSidebar from "../components/LeftSidebar";
import Nav from "../components/Nav";
import BsItems from "../components/BsItems";
// import Properties from "../components/Properties";

export default function Home() {
  

   
  
  return (
    <>
      <div>
        <Nav/>
      </div>
      <div className="d-flex">
        <div className="bsitems border rounded-3 col-2 m-3"><BsItems/></div>
        <div className="bsitems border rounded-3 col-9 m-3">Main</div>
      </div>
    </>
  );
}