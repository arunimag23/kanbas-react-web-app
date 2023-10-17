import Modules from "../Modules/index.js";

function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <Modules/>
      </div>
      <div className="col-3">
        <span className="justify-content-center"><h6>Status</h6></span>
        <div className="row">
        <button type="button" className="btn btn-light" style={{marginBottom:"10px"}}>Import Existing Content</button>
        </div>
        <div className="row">
        <button type="button" className="btn btn-light" style={{marginBottom:"10px"}}>Import from Commons</button>
        </div>
        <div className="row">
        <button type="button" className="btn btn-light" style={{marginBottom:"10px"}}>Choose From Home Page</button>
        </div>
        <div className="row">
        <button type="button" className="btn btn-light" style={{marginBottom:"10px"}}>View Course Stream</button>
        <h6>To Do</h6>
        <hr/>
        <span style={{color:"red"}}> Grade A1: HTML</span>
        </div>
      </div>
   
    </div>
  );
}

export default Home;