import { useWallet } from "@solana/wallet-adapter-react";
import { ed25519 } from "@noble/curves/ed25519";
import bs58 from "bs58";
import React from "react";
// we require noble/curves for the cryptographc operations
function SignMsg() {
  const { publicKey, signMessage } = useWallet();

  async function sign() {
    if (!publicKey) {
      alert("wallet not connected");
      return;
    }

    if (!signMessage) {
      alert("Wallet Does not support sign message");
      return;
    }

    const message = document.getElementById("msg").value;
    const encodedMsg = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMsg);

    if (!ed25519.verify(signature, encodedMsg, publicKey.toBytes())) {
      alert("Message Sign wrong!");
      return;
    }
    alert(`Message signature: ${bs58.encode(signature)}`);
  }
  return (
    <div>
      <input id="msg" type="text" placeholder="Message" />
      <button onClick={sign}>Sign Message</button>
    </div>
  );
}

export default SignMsg;
