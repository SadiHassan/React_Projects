import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM Naming Convention
    <div className="App">
      <Header />
      <div className = "app__body">
        <Sidebar />
      </div>
      {/* Side bar */}
      {/* React Router --> Chat Screen */}

    </div>
  );
}

export default App;
