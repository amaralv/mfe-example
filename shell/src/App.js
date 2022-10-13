import React from 'react';
import './App.css';
const ProductApp = React.lazy(
  () => import('product/App')
);

function App() {
  return (
    <div className="shell-app">
      Hello from Shell App
      <React.Suspense fallback='Loading...'>
        <ProductApp />
      </React.Suspense>
    </div>
  );
}

export default App;
