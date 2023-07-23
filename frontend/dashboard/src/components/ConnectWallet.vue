<script setup lang="ts">
import { useAccountStore } from "../store/account.store";
import { useTransactionsStore } from "../store/transactions.store";
import { useWhitelistStore } from "../store/whitelist.store";
import BaseModal from "./BaseModal.vue";

const accountStore = useAccountStore();
const transactionsStore = useTransactionsStore();
const whitelistStore = useWhitelistStore();

async function handleConnectWallet() {
  await accountStore.connectWallet();
  await transactionsStore.fetchTransactions();
  await whitelistStore.fetchWhitelist();
}
</script>

<template>
  <BaseModal :dismissable="false">
    <div class="connect-wallet">
      <h2 class="connect-wallet__title">Credit card</h2>
      <div class="connect-wallet__content">
        <p class="connect-wallet__description">
          Making assets interoperable & chain agnostic
        </p>
        <button
          class="connect-wallet__button primary-button"
          @click.stop="handleConnectWallet"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  </BaseModal>
</template>

<style scoped>
.connect-wallet__title {
  margin: 0 0 1.25rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.connect-wallet__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.connect-wallet__description {
  margin: 0 0 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
}
</style>
