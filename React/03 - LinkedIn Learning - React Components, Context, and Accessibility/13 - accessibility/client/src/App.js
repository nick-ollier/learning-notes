import React from 'react';
import './App.css';

function App() {
  return (
    <header>
      <h1>Hello World</h1>
      <nav>
        <a href="#home">Home</a>
        <img srg="/img/img.jpg" alt="" />
      </nav>
      <form role="search">
        <input type="search" name="search" aria-label="Search for Products"></input>
      </form>
    </header>
  );
}

// https://reactjs.org/docs/accessibility
// https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd
// some examples:
// anchor tags require contents
// image alt tags are required for accessibility - if decorative, leave empty.
// use semantic tags
// aria https://www.w3.org/TR/wai-aria/
// role="navigation" - Not required on a <nav> tag as it's already assumed
export default App;
