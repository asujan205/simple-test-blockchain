declare global {
  interface Window {
    ethereum: any;
  }
}

export const connectWallet = async (): Promise<{
  address: string;
}> => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
      };
    }
  } else {
    return {
      address: "",
    };
  }
};
