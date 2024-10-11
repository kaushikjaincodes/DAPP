import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import {
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
  } from "@solana/web3.js";
import React from 'react'

function SendSol() {
    const {connection} = useConnection();
    const wallet = useWallet(); 

    async function send() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amt").value;
        const transaction = new Transaction();
        transaction.add(
            SystemProgram.transfer({
            fromPubKey : wallet.publicKey,
            toPubKey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        })
    );

        await wallet.sendTransaction(transaction,connection);
        alert(`Sent ${amount} sol to + ${to}`);
    }
  return (
    <div>
      <input id="to" type="text" placeholder="To" />
      <input id="amt" type="text" placeholder="Amount" />
      <button onClick={send}>Send</button>
    </div>
  )
}

export default SendSol