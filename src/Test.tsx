import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';

const Test = () => {
  const { connector, library, activate, deactivate, setError, active, account, error } =
    useWeb3React();

  console.log(library);

  const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 1337, 43114] });

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
      {!active ? (
        <button type="button" onClick={connectWallet}>
          버튼
        </button>
      ) : (
        <>
          <span>{account}</span>
          <button type="button" onClick={onClickDeactivate}>
            해제
          </button>
        </>
      )}
    </div>
  );
};

export default Test;
