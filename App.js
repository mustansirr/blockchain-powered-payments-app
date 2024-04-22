import React, {useEffect} from 'react';
import Navigation from './navigation/Navigation';
import web3 from './web3';

export default function App() {
  useEffect(() => {
    async function fetchBlockNumber() {
      try {
        const blockNumber = await web3.eth.getBlockNumber();
        console.log('Latest block number:', blockNumber);
      } catch (error) {
        console.error('Error fetching block number:', error);
      }
    }

    fetchBlockNumber();
  }, []);

  return (
  <Navigation />
  );
};