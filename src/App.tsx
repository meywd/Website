import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

function App() {
  const [count, setCount] = useState(0);
  const appInsights = new ApplicationInsights({
    config: {
      connectionString:
        "InstrumentationKey=327b2fa2-1a30-4108-b126-7c103bec2772;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/",
    },
  });
  appInsights.loadAppInsights();
  appInsights.trackPageView();

  return (
    <div className="App">
      <div>
        <div className="circle">
          <iframe src="\badge.html"></iframe>
        </div>
      </div>
      <span className="comingsoon">
        <b>coming soon...</b>
      </span>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
