import ModuleList from "./ModuleList";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaPlus } from 'react-icons/fa';
import {BiDotsVerticalRounded} from 'react-icons/bi'
function Modules() {
  return (
    <div>
      <div className = "col">
            <div className ="d-flex">
                <ul className ="nav nav-tabs float-end">
                    <li>
                        <button type="button" className="btn btn-light" style={{marginRight:"10px"}}>Collapse All</button>
                    </li>
                    <li>
                        <button type="button" className="btn btn-light" style={{marginRight:"10px"}}>View Progress</button>
                    </li>
                    <li>
                    <Dropdown>
                      <Dropdown.Toggle variant = "Secondary" id="dropdown-basic" style={{marginRight:"10px"}}>
                          Publish All
                      </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item >Action</Dropdown.Item>
                            <Dropdown.Item >Another action</Dropdown.Item>
                            <Dropdown.Item >Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li>
                        <button type="button" className="btn btn-danger"> <span style={{marginRight:"10px"}}><FaPlus /></span>Module</button>
                    </li>
                        <button type="button" className="btn btn-light"><BiDotsVerticalRounded /></button>
                    <li>
                      
                    </li>
                  </ul>
                </div>
              </div>
      <ModuleList />
    </div>
  );
}
export default Modules;