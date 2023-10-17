import ToDoItem from "./ToDoItem";
import ToDo from "./ToDo.json";
const ToDoList = () => {
 return(
   <>
     <h3>ToDo List</h3>
     <ul className="list-group">
       {
         ToDo.map(ToDo => {
           return(<ToDoItem todo={ToDo}/>);
         })
       }
     </ul>
   </>
 );
}
export default ToDoList;