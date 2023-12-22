"use client";
import * as Babel from "@babel/standalone";
import React, { useState, useEffect, Suspense } from "react";

function createComponentFromJSX(jsxString: string) {
  // Transpile the JSX string to JavaScript using Babel
  const result = Babel.transform(jsxString, { presets: ["react"] });
  const code = result ? result.code : null;

  // Create a new function that returns the transpiled code
  // Note: This uses 'new Function' which can have security implications
  const componentFunction = new Function("React", "return " + code);

  // Call the function with React as an argument to get the component
  const component = componentFunction(React);

  // Return the component
  return component;
}

function App({ onClick }: { onClick: () => void }) {
  const [componentUrl, setComponentUrl] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the component URL from the API
    fetch("https://api.example.com/component-url")
      .then((response) => response.text())
      .then(setComponentUrl);
  }, []);

  // Use React.lazy to create a lazy-loaded component
  const MyComponent = componentUrl
    ? createComponentFromJSX(componentUrl)
    : null;
  return (
    <div className="App">
      <header className="App-header">
        {MyComponent ? (
          <MyComponent onClick={onClick} />
        ) : (
          <div>Loading...</div>
        )}
      </header>
    </div>
  );
}

export default App;
