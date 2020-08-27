import React, {useContext} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import NumberAgreeForm from "./components/NumberAgreeForm";
import Summary from "./components/Summary";
import {DataContext} from "./context/data-context";
import SubmitForm from "./components/SubmitForm";

function App() {
    const dataContext = useContext(DataContext);

    let routes = <Switch>
        <Route exact path={'/summary'} component={Summary}/>
        <Route exact path={'/agree'} component={NumberAgreeForm}/>
        <Route exact path={'/'} component={SubmitForm}/>
    </Switch>

  return (
    <div>
        <BrowserRouter>
            {dataContext.redirects && <Redirect to={'/agree'} from={'/'}/>}
            {routes}
        </BrowserRouter>
    </div>
  );
}

export default App;
