import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useEffect } from 'react';

const Wallet = () => {
  const { account, library, active, activate, deactivate, connector } = useWeb3React();

  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114],
  });

  const connectWallet = async () => {
    try {
      await activate(injected, (error) => {
        console.log('error1', error);
        // 크롬 익스텐션 없을 경우 오류 핸들링
        if ('/No Ethereum provider was found on window.ethereum/')
          throw new Error('Metamask 익스텐션을 설치해주세요');
      });
    } catch (err) {
      console.log('err', err);
    }
  };

  const onClickDeactivate = () => {
    deactivate();
  };

  return (
    <div>
      {active ? (
        <>
          <h2>My Wallets</h2>
          <span>
            {account?.substr(0, 8)}...{account?.substr(0, 8)}
          </span>
          <button type="button" onClick={onClickDeactivate}>
            연결해제
          </button>
        </>
      ) : (
        <button type="button" onClick={connectWallet}>
          버튼
        </button>
      )}
    </div>
  );
};

export default Wallet;
