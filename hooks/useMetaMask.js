import { useEffect, useState } from "react";

export default useMetaMask = () => {
  const [account, setAccount] = useState("");
  const [error, setError] = useState("");

  const checkEthereumExists = () => {
    if (!ethereum) {
      setError("Please Install MetaMask.");
      return false;
    }
    return true;
  };
  const getConnectedAccounts = async () => {
    setError("");
    try {
      const accounts = await ethereum.request({
        method: "eth_accounts",
      });
      console.log(accounts);
      setAccount(accounts[0]);
    } catch (err) {
      setError(err.message);
    }
  };
  const connectWallet = async () => {
    setError("");
    if (checkEthereumExists()) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        setAccount(accounts[0]);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    if (checkEthereumExists()) {
      ethereum.on("accountsChanged", getConnectedAccounts);
      getConnectedAccounts();
    }
    return () => {
      ethereum.removeListener("accountsChanged", getConnectedAccounts);
    };
  }, []);

  return { account, connectWallet, error };
};
