import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletDisconnectButton,
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { AirDrop } from './Airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css'
import Showbalance from './Showbalance';
import SendSol from './SendSol';
import SignMsg from './SignMsg';
//AirDrop
function App() {
  return (
    // these are basically components, prop drilling se bachati hai , we use providers
    // the empty wallet array will store the all the wallets which use wallet standaerds
    // endpoint is a rpc url
    // autoconnect apne aap wallet ko rerquest bhejega
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/UWV_xTZY-jjlJCF_z0wnS18d1LxkKUKr"}> 
    <WalletProvider wallets={[]} autoConnect> 
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
            <AirDrop></AirDrop>
            <Showbalance></Showbalance>
            <SendSol></SendSol>
            <SignMsg></SignMsg>
        </WalletModalProvider>
    </WalletProvider>
</ConnectionProvider>
  )
}

export default App
