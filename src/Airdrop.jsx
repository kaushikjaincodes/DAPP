import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function AirDrop(){
    const wallet = useWallet();
    const {connection} = useConnection();
    // const pk = wallet.publicKey;
    // define the function in  the component body
     
    async function sendAirDropToUser(){
        const amount = parseFloat(document.getElementById("paise").value)
        await connection.requestAirdrop(wallet.publicKey,amount*LAMPORTS_PER_SOL);
        alert(`airdroppd sol ${amount}`);
    }
    return <div>
        {/* Hi {wallet.publicKey.toString()} */}
        <input type="text" placeholder="Amonut" id="paise"></input>
        <button onClick={sendAirDropToUser}>Send Airdrop</button>
    </div>
}