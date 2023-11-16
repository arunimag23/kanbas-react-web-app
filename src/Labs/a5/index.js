import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  const API_BASE = process.env.REACT_APP_API_BASE;
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="http://localhost:4000/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
          <h2>Simple API Examples</h2>
          <EncodingParametersInURLs /> 
          <WorkingWithObjects />
          <WorkingWithArrays />
        </div>
      </div>
    );
  }
  export default Assignment5;