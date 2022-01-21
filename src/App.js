import { 
  BrowserRouter as Router
  ,Switch
  ,Route
 } from "react-router-dom";
 
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <h1>HOME</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
