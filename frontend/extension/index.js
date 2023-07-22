import { AuthProvider } from "@arcana/auth";
let localAppAddress = "xar_test_89138bc25e7a62763351f0bac74751157d423db3";
const auth = new AuthProvider(localAppAddress, {
  network: {
    authUrl: "http://localhost:8080",
    walletUrl: "http://localhost:3000",
    gatewayUrl: "https://gateway001-testnet.arcana.network",
  },
  /*chainConfig: {
     chainId: 80001,
     rpcUrl: 'https://rpc.ankr.com/polygon_mumbai',
   },*/
  alwaysVisible: true,
  position: "right",
  theme: "dark",
  setWindowParameter: true,
});

(async () => {
  console.log("init form extension");
  await auth.init();
  await auth.loginWithSocial("google");
  let provider = await auth.loginWithSocial("google");
  window.ethereum = provider;
  window.ethereum.enable = async function () {
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  };
  window.ethereum.send = async function (method, params) {
    return await window.ethereum.request({
      method: method,
      params: params,
    });
  };
})();
