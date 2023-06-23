import './App.css';

import React, { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


function App() {

  const [open, setOpen] = React.useState(false);

  return (
    <><div className="App">
      <header className="App-header">

        <a
          className="App-link"
          href="https://www.google.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello, World!
        </a>
      </header>
    </div>
      <button type="button" onClick={() => setOpen(true)}>
        View Images
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
            { src: "\WeddingSite\action.jpg" },

        ]}
      /> 
    </>

  );

}

export default App;
