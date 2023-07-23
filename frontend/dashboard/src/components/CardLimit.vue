<script setup lang="ts">
import { useAccountStore } from "../store/account.store";
import { Chain } from "../types";
import { useToast } from "vue-toastification";

const accountStore = useAccountStore();
const toast = useToast();

async function handleKeyEnter(event: any) {
  event.target.blur();
}

async function handleSave(event: any, chain: Chain) {
  const card = accountStore.cards.find((card) => card.chain === chain);
  if (card) {
    card.balance = Number(event.target.value);
  }
  await accountStore.saveCards();
  toast.success("Card limit saved successfully");
}
</script>

<template>
  <div class="card-limit">
    <div class="card-limit__chain" style="text-align: left; font-weight: 500">
      Cards
    </div>
    <div
      v-for="card in accountStore.cards"
      :key="JSON.stringify(card)"
      style="display: flex; gap: 1.25rem; margin-block: 0.25rem"
    >
      <div class="card-limit__chain">{{ card.chain }}</div>
      <input
        class="input-card"
        :value="card.balance"
        type="number"
        @keyup.prevent.enter="handleKeyEnter($event)"
        @blur="handleSave($event, card.chain)"
      />
    </div>
  </div>
</template>

<style scoped>
.card-limit {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.25rem;
  border: 1px solid #333;
  box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  width: 100%;
}

.card-limit__chain {
  width: 6rem;
  text-align: left;
  text-transform: capitalize;
}

.input-card {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
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
