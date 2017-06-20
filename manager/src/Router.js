import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth" initial>
        <Scene key="login" component={LoginForm} title="Please Login Fucker" />
      </Scene>

      <Scene key="main">
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          rightTitle="+"
          onRight={() => Actions.employeeCreate()}
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create an Employee" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Emoloyee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
