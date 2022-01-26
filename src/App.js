import NewsFeed from "./Components/NewsFeed";
import CurrencyConverter from "./Components/currencyConverter";

const App = () => {
  return (
    <div className="App">
      <h1>Crypto Dashboard</h1>
      <div className="app-wrapper">
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
};

export default App;
