<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { ref } from "vue";
import ConnectWallet from "./components/ConnectWallet.vue";
import { useAccountStore } from "./store/account.store";

const BalanceCard = defineAsyncComponent(
  () => import("./components/BalanceCard.vue")
);
const CardLimit = defineAsyncComponent(
  () => import("./components/CardLimit.vue")
);
const Transactions = defineAsyncComponent(
  () => import("./components/Transactions.vue")
);
const WhiteList = defineAsyncComponent(
  () => import("./components/WhiteList.vue")
);
const DepositPopup = defineAsyncComponent(
  () => import("./components/DepositPopup.vue")
);

const accountStore = useAccountStore();
const showDepositPopup = ref(false);
</script>

<template>
  <div class="app">
    <div style="display: flex; flex-direction: column; gap: 1rem">
      <div class="cards">
        <BalanceCard
          currency="$"
          title="Balance"
          :amount="accountStore.balance"
        ></BalanceCard>
        <BalanceCard
          currency="$"
          title="Outstanding"
          :amount="accountStore.outstandingBalance"
        ></BalanceCard>
      </div>
      <div class="buttons">
        <button class="primary-button" @click.stop="showDepositPopup = true">
          Deposit
        </button>
        <button class="primary-button">Withdraw</button>
        <button class="primary-button">Trustless Withdraw</button>
        <button class="primary-button">Pay Bill</button>
      </div>
    </div>
    <div>
      <Transactions></Transactions>
    </div>
    <div class="card-limit-and-whitelist">
      <CardLimit></CardLimit>
      <WhiteList></WhiteList>
    </div>
    <ConnectWallet v-if="!accountStore.isConnected" />
    <DepositPopup v-if="showDepositPopup" @close="showDepositPopup = false" />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  margin: 0 auto;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.buttons > .primary-button {
  width: 16rem;
}

.cards {
  display: flex;
  gap: 1.25rem;
}

.card-limit-and-whitelist {
  display: flex;
  gap: 1.25rem;
}

.card-limit-and-whitelist > :nth-child(1) {
  width: 35%;
}

.card-limit-and-whitelist > :nth-child(2) {
  width: 65%;
}
</style>
