<script setup lang="ts">
import { ref } from "vue";
import { useAccountStore } from "../store/account.store";
// import { useTransactionsStore } from "../store/transactions.store";
import BaseModal from "./BaseModal.vue";
import { useToast } from "vue-toastification";

const accountStore = useAccountStore();
// const transactionsStore = useTransactionsStore();
const depositAmount = ref(null as null | number);
const toast = useToast();
const emit = defineEmits(["close"]);

async function handleDeposit() {
  if (depositAmount.value === null) {
    return;
  }
  await accountStore.addDeposit(depositAmount.value);
  toast.success("Trustlessly funds withdrawn");
}
</script>

<template>
  <BaseModal dismissable @close="emit('close')">
    <div class="connect-wallet">
      <h2 class="connect-wallet__title">Deposit</h2>
      <label class="connect-wallet__description" for="deposit">
        Enter Deposit Amount (in USD)
      </label>
      <form class="connect-wallet__content" @submit.prevent="handleDeposit">
        <input
          type="number"
          id="deposit"
          placeholder="Enter deposit amount"
          v-model="depositAmount"
        />
        <button class="connect-wallet__button primary-button">Deposit</button>
      </form>
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
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
}

.connect-wallet__description {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  width: 100%;
  display: block;
}

input {
  width: 100%;
  border: 1px solid #333;
  border-radius: 0.5rem;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
