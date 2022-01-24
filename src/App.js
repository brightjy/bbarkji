import { useForm } from "react-hook-form";
import { 
  BrowserRouter as Router
  ,Switch
  ,Route
 } from "react-router-dom";
import Home from "./routes/Home";
 
export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}