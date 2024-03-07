import './App.css'
import Header from './components/Header.js'
import Balance from './components/Balance.js'
import IncomeExpences from './components/IncomeExpences.js';
import TransactionList from './components/TransactionList.js';
import AddTransaction from './components/AddTransaction.js';

import { GlobalProvider } from './context/GlobalState.js';
function App() {
  return (
    <GlobalProvider>
      <Header name="tracker"/>
      <div className='container'>
        <Balance/>
        <IncomeExpences/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
