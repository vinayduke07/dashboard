import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import MyAssets from './components/MyAssets';
import Transaction from './components/Transaction';
import News from './components/News';
import Announcement from './components/Announcement';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard">
          <Overview />
          <div className="content-columns">
            <div className="left-column">
              <MyAssets />
              <Transaction />
            </div>
            <div className="right-column">
              <News />
              <Announcement />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
