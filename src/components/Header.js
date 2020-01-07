import React from 'react';
// import PropTypes from 'prop-types';

/* 
function Header() {
   return (
      <div>
         <h1>Contact Manager</h1>
      </div>
   )
}
*/

// 위의 comment와 동일하다.

const Header = (props) => {
   const { branding } = props;
   return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
         <div className="container">
            <a href="/" className="navbar-brand">
               {branding}
            </a>
            <div>
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                     <a href="/" className="nav-link">Home</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

/* 
Header.defaultProps = {
   branding: "My App"
}
 */

// App.js의 <Header />에 attr이 없을 때 기본(defaultProps)으로 사용될 contents

/* Header.PropTypes = {
   branding: PropTypes.string.isRequired
} ?????*/

export default Header;
