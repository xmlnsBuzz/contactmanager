import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Contact extends Component {

   state = {
      showContactInfo: false
   };
   // contact info 가 display: none 상태에서 문서 load

   onDeleteClick = (id, dispatch) => {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
   }

   render() {
      const { id, name, email, phone } = this.props.contact;
      const { showContactInfo } = this.state;
      // destructuring
      return (
         <Consumer>
            {value => {
               const { dispatch } = value;
               return (
                  <div className="card card-body mb-3">
                     <h4>
                        {` ${name} `}
                        <i
                           onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
                           className="fa fa-chevron-down"
                           style={{ cursor: 'pointer', marginLeft: '5px' }}
                        />
                        <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                           onClick={this.onDeleteClick.bind(this, id, dispatch)}
                        />
                     </h4>
                     {showContactInfo ? (
                        <ul className="list-group">
                           <li className="list-group-item">Email : {email} </li>
                           <li className="list-group-item">Phone : {phone} </li>
                        </ul>
                     ) : null}
                  </div>
               )
            }}
         </Consumer>
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


