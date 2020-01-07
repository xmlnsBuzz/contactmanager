import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

   state = {};

   onShowClick = (id, e) => {
      console.log(id)
   }

/*       static propTypes = {
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
   };
 */
   render() {
      const { name, email, phone } = this.props.contact; // destructuring
      return (
         <div className="card card-body mb-3">
            <h4>
               {`${name} `}
               <i
                  onClick={this.onShowClick.bind(this, 1)}
                  className="fas fa-sort-down" style={{cursor: 'pointer', marginLeft: '5px'}}
               />
            </h4>
            <ul className="list-group">
               <li className="list-group-item">Email : { email } </li>
               <li className="list-group-item">Phone : { phone } </li>
            </ul>
         </div>
         
      );
   }
}


Contact.propTypes = {
   contact: PropTypes.object.isRequired,
   
}

export default Contact;


/*
class Contact extends Component {
   render() {
      return (
         <div>
            <h4>{this.props.name}</h4>
            <ul>
               <li>Email : {this.props.email}</li>
               <li>Phone : {this.props.phone}</li>
            </ul>

         </div>
      )
   }
}
 */


