import { Route, Switch } from "react-router";
import Cadastro from "./pages/Cadastro";
import Interface from "./pages/Interface";
import Login from "./pages/Login";
import Realizado from "./pages/Realizado";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/cadastrar" component={ Cadastro }/>
        <Route path="/interface" component={ Interface }/>
        <Route path='/realizado' component={ Realizado }/>
        <Route path="/" component={ Login }/>
      </Switch>
    </div>
  );
}

export default App;
