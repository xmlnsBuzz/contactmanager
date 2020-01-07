import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
   constructor() {
      super();
      this.state = {
         contacts: [
            {
               id: 1,
               name: 'John Doe',
               email: 'jdoe@gmail.com',
               phone: '555-555-5555'
            },
            {
               id: 2,
               name: 'Karen Williams',
               email: 'karen@gmail.com',
               phone: '222-222-2222'
            },
            {
               id: 3,
               name: 'Henry Johnson',
               email: 'henry@gmail.com',
               phone: '111-111-1111'
            }
         ]
      }
   }
   render() {
      const { contacts } = this.state;
      return (
         <React.Fragment>
            <h1>{contacts.name}</h1>
            <div>
               {contacts.map(contact => ( // map이 중요한 개념이니 알아볼 것.
                  <Contact
                     key={contact.id}
                     contact={contact}
                  />
               ))}
            </div>
         </React.Fragment>
      )
   }
}

export default Contacts;
