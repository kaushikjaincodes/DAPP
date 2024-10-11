import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react'

function Showbalance() {
    const {connection} = useConnection();
    const wallet = useWallet();

    async function getBalance(){
        if(wallet.publicKey){
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("bal").innerHTML= balance/LAMPORTS_PER_SOL;
        }
    }
    getBalance();
  return (
    <div><p>Balance is<div id="bal"></div></p></div>
  )
}

export default Showbalance