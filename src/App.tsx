import React from "react";
import "./App.css";
import TopCreators from "./features/TopCreators/components/TopCreators/TopCreators";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./common/ErrorFallback";

const App: React.FC = () => {
  return (
    <div className="content">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <TopCreators></TopCreators>
      </ErrorBoundary>
    </div>
  );
};

export default App;
