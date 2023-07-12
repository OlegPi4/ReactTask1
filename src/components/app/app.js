import { Component } from 'react';

import AppInfo from '../app-info/app-info.js';
import SearhPanel from '../search-panel/search-panel.js';
import AppFilter from '../app-filter/app-filter.js';
import EmployeesList from '../employees-list/employees-list.js';
import EmployeesAddForm from '../employees-add-form/employees-add-form.js';

import './app.css';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: [
            { name: "Anton Petrov", salary: 1400, increase: false, rise: true, id: 1 },
            { name: "Ted Ivanov", salary: 1700, increase: true, rise: false, id: 2 },
            { name: "Julia Roberts", salary: 900, increase: false, rise: false, id: 3 }
         ],
         term: '',
         filter: 'all'
      }
      this.maxId = 4;
   }   
   deleteItem = (id) => {
      this.setState(({ data }) => {
         return {
            data: data.filter(item => item.id !== id)
         }
      })
   }
   onToggleProp = (id, prop) => {
      
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id === id) {
               return {...item, [prop]: !item[prop]}
            }
            return item;
         })
      }))
   }

   //добавление записи
   addItem = (name, salary) => {
      const newItem = {
         name,
         salary,
         increase: false,
         rise: false,
         id: this.maxId++
      }
      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      });
   }

   searchEmp = (items, term) => {
      if (term.length === 0) {
         return items;
      }
      return items.filter(item => {
         return item.name.indexOf(term) > -1
      })
   }
   onUpdateSearch = (term) => {
      this.setState({ term: term });
   }

   filterPost = (items, filter) => {
      switch (filter) {
         case 'rise':
            return items.filter(item => item.rise);
         case 'moreThen1000':
            return items.filter(item => item.salary > 1000);
            case 'premium':
               return items.filter(item => item.increase);
         default:
            return items
      }
   }
   onFilterSelect = (filter) => {
      this.setState({ filter });
   }

   addNewSalary = (id, newSalary) => {
      console.log(id);
      console.log(newSalary);
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id === id) {
               return {...item, salary: +newSalary.slice(0, -1)}
            }
            return item;
         })
      }))
   }

   render() {
      const { data, term, filter } = this.state;
      const employees = this.state.data.length;
      const increased = this.state.data.filter(item => item.increase).length;
      const visibleData = this.filterPost(this.searchEmp(data, term), filter);
      return (
         <div className="app">
            <AppInfo employees={employees} increased={increased} />
         
            <div className="search-panel">
               <SearhPanel onUpdateSearch={this.onUpdateSearch}/>
               <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>

            <EmployeesList
               data={visibleData}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp}
               addNewSalary={this.addNewSalary}/>
            <EmployeesAddForm onAdd={this.addItem}/>
         </div>
      );
   }
}

export default App;