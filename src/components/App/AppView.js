import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import Core from '../Core';

const AppView = (props) => (
  <Router history={props.history}>
    <Core />
  </Router>
);

AppView.propTypes = {
  history: PropTypes.object.isRequired,
}

export default AppView;

{/* <div>
  <form>
    <div className="email">
      Email: <input type="text" />
    </div>
    <div className="password">
      password: <input type="text" />
    </div>
  </form>
</div> */}

// const fetchData = () => {
//   return fetch('http://localhost:5000/api');
// }
  // React.useEffect(() => {
  //   fetchData()
  //     .then((res) => {
  //       console.log('ressss is:', res.body);
  //     })
  // }, []);