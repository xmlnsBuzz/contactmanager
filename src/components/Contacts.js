import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {
   deleteContact = id => {
      const { contacts } = this.state;
      const newContacts = contacts.filter(contact => contact.id !== id);
      this.setState({
         contacts: newContacts
      });
   };

   render() {
      return (
         <Consumer>
            {value => {
               const { contacts } = value;
               return (
                  <React.Fragment>
                     {/* <h1>{contacts.name}</h1> */}
                     <div>
                        {contacts.map(contact => (
                           <Contact
                              key={contact.id}
                              contact={contact}
                              deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                           />
                        ))}
                     </div>
                  </React.Fragment>
               );
            }}
         </Consumer>
      )


   }
}

export default Contacts;
