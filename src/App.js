import React from 'react'
import Jobs from './Compnents/Jobs/JobsPage/Jobs';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import { Detail } from './Compnents/Jobs/JobsDetail/Detail';
import { Form } from './Compnents/Jobs/jobForm/Form';
function App() {
  return (
   <div>
     <Router>
       <Switch>
       <Route exact path="/applyForm">
           <Form/>
         </Route>
         <Route exact path="/jobDetails">
           <Detail/>
         </Route>
         <Route path="/">
           <Jobs/>
         </Route>
       </Switch>
     </Router>
   </div>
  );
}

export default App;
