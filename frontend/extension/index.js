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
  let provider;
  function script() {
    window.addEventListener(
      "message",
      function (event) {
        if (event.data.type === "FROM_MY_EXTENSIONS") {
          window.ethereum = event.data.value;
          console.log("window.etherum", window.ethereum);
        }
      },
      false
    );
  }

  function inject(fn) {
    const script = document.createElement("script");
    script.text = `(${fn.toString()})();`;
    document.documentElement.appendChild(script);
  }

  inject(script);
  try {
    await auth.init();
    provider = await auth.loginWithSocial("google");
    console.log("provider", provider);
    console.log("login", await auth.isLoggedIn());
    // await auth.showWallet();
    window.postMessage({ type: "FROM_MY_EXTENSIONS", text: provider }, "*");
  } catch (e) {
    alert(e);
  }
})();
