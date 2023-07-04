import AppInfo from '../app-info/app-info.js';
import SearhPanel from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmployeesList from '../employees-list/employees-list.js';
import EmployeesAddForm from '../employees-add-form/employees-add-form.js';

import './app.css';

function App() {

   const data = [
      { name: "Anton Petrov", salary: 1400, increase: true, id: 1 },
      { name: "Ted Ivanov", salary: 1700, increase: false, id: 2 },
      { name: "Julia Roberts", salary: 900, increase: true, id: 3 },
   ];

   return (
      <div className="app">
         <AppInfo />
         
         <div className="search-panel">
            <SearhPanel/>
            <AppFilter/>
         </div>

         <EmployeesList data={data} />
         <EmployeesAddForm/>
      </div>
   );
}

export default App;