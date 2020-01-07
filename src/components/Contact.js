import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

   state = {
      showContactInfo: false
   };
   // contact info 가 display: none 상태에서 문서 load
   render() {
      const { name, email, phone } = this.props.contact;
      const { showContactInfo } = this.state;
      // destructuring
      return (
         <div className="card card-body mb-3">
            <h4>
               <i
                  onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
                  className="fas fa-address-book"
                  style={{ cursor: 'pointer', marginLeft: '5px' }}
               />
               {` ${name} `}
            </h4>
            {showContactInfo ? (
               <ul className="list-group">
                  <li className="list-group-item">Email : {email} </li>
                  <li className="list-group-item">Phone : {phone} </li>
               </ul>
            ) : null}
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


