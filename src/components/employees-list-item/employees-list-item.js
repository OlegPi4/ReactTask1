import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component  {
   constructor(props) {
      super(props);
      this.state = {
         
      }
   }
   
   render() {
      const { name, salary, onDelete, onToggleProp, increase, rise, addNewSalary } = this.props;
            
      let classElemLi = "list-group-item d-flex justify-content-between"; 
      if (increase) {
         classElemLi += ' increase';
      } 
      if (rise) {
         classElemLi += ' like';
      }
   
      return (
         <li className={classElemLi}>
            <span className="list-group-item-label"
                  onClick={onToggleProp} data-toggle='rise'>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}
                  onChange={addNewSalary} />
            <div className="d-flex justify-content-center align-items-center">
               <button type='button'
                     className="btn-cookie btn-sm"
                     onClick={onToggleProp} data-toggle='increase'>
                  <i className="fas fa-cookie"></i>
               </button>
               <button type='button'
                     className="btn-trash btn-sm"
                     onClick={onDelete}>
                  <i className="fas fa-trash"></i>
               </button>
               <i className="fas fa-star"></i>
            </div>
         </li>
      )
      
   }

}


export default EmployeesListItem;