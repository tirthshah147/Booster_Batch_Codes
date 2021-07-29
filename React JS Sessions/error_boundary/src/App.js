import logo from './logo.svg';
import './App.css';
import BasicApp from './components/BasicApp';
import Arafat from './components/Arafat';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <>
    <ErrorBoundary>
      <BasicApp/>
    </ErrorBoundary>
    <Arafat/>
    
    {/* <ErrorBoundary>
      <Zakir/>
    </ErrorBoundary> */}
    
    </>
    
  );
}

export default App;
