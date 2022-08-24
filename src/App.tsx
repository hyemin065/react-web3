import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import Test from './Test';
import Wallet from './Wallet';

function App() {
  const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => new Web3Provider(provider);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Test />
    </Web3ReactProvider>
  );
}

export default App;
