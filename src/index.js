import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us! (This is incorrect grammar??)</div>;

ReactDOM.render(<App />, document.getElementById('main'));

// // import $ from 'jquery';


// // const $ = require('jquery');
// import $ from 'jquery';
// import './style.scss';

// let num = 0;

// const timetracker = setInterval(
//   () => {
//     $('#main').html(`You've been on this page for ${num} seconds!`);
//     num += 1;
//   }, 1000,
// );

// timetracker();


// /* got help from samiha datta regarding the order of declarations and functions. For some reason I declared my let variables
// after calling my functions, so the page kept saying "on this page for 'undefined/NaN' seconds" */
