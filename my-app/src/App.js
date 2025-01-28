import React from 'react';
import Teams from './proReactBrief/teams';
import "./proReactBrief/style.css";
import "./proReactBrief/login.css";
import "./proReactBrief/singup";
import Login from './proReactBrief/login';
// import Singup from './proReactBrief/singup';  
import TeamMembers from './proReactBrief/staff';  
function App() {
return (
<div className="App">

<div>
<Teams /><br/>
<style/> <br/>
<Login /> <br/> <hr/>
 {/* <Singup/><br/> */}
<TeamMembers/><br/>
</div>

</div>
);
}
export default App;


