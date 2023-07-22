import { AuthProvider } from "@arcana/auth";
let localAppAddress = "xar_test_89138bc25e7a62763351f0bac74751157d423db3";
const auth = new AuthProvider(localAppAddress, {
  network: {
    authUrl: "http://localhost:8080",
    walletUrl: "http://localhost:3000",
    // gatewayUrl: "https://gateway-dev.arcana.network",
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
  let provider = await auth.init();
  await auth.loginWithSocial("google");
  await auth.isLoggedIn();
  window.ethereum = provider;
})();
