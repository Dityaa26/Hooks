import React from "react";
import './Home.css'

const Home = () => {
  return (
    <>
      <h2>ReactJS Hooks</h2>
      <div className="paragraphs">
        <p>
          In This App You See Working Example Of Different Hooks In ReactJS.
        </p>
        <p>Use Navigation Bar Menus To See Example.</p>
        <p>
          Use{" "}
          <a href="https://react.dev/reference/react" target="_blank">
            <code>react.dev</code>
            
          </a>
          {' '}
          To Learn More About Hooks.
        </p>
      </div>
    </>
  );
};

export default Home;
