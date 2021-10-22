import Main from './components/Main';
import { ContractContextProvider } from './context/ContractContext';

function App() {

  return (
    <ContractContextProvider >
      <Main />
    </ContractContextProvider >
  );
}

export default App;
