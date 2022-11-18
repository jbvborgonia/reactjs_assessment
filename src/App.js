import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/Home";
import AddUser from "./component/AddUser";
import PageNotFound from "./component/PageNotFound";
import EditUser from "./component/EditUser";
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
function App() {
  return (
     <Router>
     <div className="container">
  
     <AddUser/>
     <Home></Home>

     {/* <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/add" component={AddUser}></Route>
      <Route exact path="*" component={PageNotFound}></Route>
     </Switch> */}
    </div>
    </Router>
  );
}

export default App;
