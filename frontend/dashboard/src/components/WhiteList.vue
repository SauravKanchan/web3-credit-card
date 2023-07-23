<script setup lang="ts">
import { useWhitelistStore } from "../store/whitelist.store";
import { ref } from "vue";
import { Chain } from "../types";
import { useToast } from "vue-toastification";

const address = ref("");
const selectedChain = ref("Polygon");
const toast = useToast();

const whitelistStore = useWhitelistStore();

async function handleAddWhitelist() {
  await whitelistStore.addToWhiteList(
    address.value,
    selectedChain.value.toLowerCase() as Chain
  );
  toast.success("Address added to whitelist successfully");
  address.value = "";
  selectedChain.value = "Polygon";
}
</script>

<template>
  <div class="whitelist">
    <div style="text-align: left; font-weight: 500">Whitelist</div>
    <form class="add-whitelist" @submit.prevent="handleAddWhitelist">
      <input
        id="address"
        type="text"
        placeholder="0x000...."
        v-model.trim="address"
      />
      <select placeholder="Select chain" v-model="selectedChain">
        <option selected value="Polygon">Polygon</option>
        <option value="Arbitrum">Arbitrum</option>
        <option value="Gnosis">Gnosis</option>
      </select>
      <button class="primary-button" :disabled="!selectedChain || !address">
        Add
      </button>
    </form>
    <div class="added-whitelist">
      <div style="text-align: left; font-weight: 500">Added</div>
      <div
        class="tx"
        v-for="whitelisted in whitelistStore.whitelist"
        :key="JSON.stringify(whitelisted)"
      >
        <div class="ellipsis" style="min-width: 28rem; text-align: left">
          {{ whitelisted.address }}
        </div>
        <div style="text-transform: capitalize">{{ whitelisted.chain }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.whitelist {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.25rem;
  border: 1px solid #333;
  box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  width: 100%;
  gap: 0.5rem;
}

.add-whitelist {
  display: flex;
  width: 100%;
  gap: 1rem;
}

input {
  border: 1px solid #333;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 50%;
}

select {
  border: 1px solid #333;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 20%;
}

button {
  width: calc(30% - 2rem);
}

.added-whitelist {
  margin-top: 0.5rem;
}

.tx {
  display: flex;
  gap: 1.25rem;
}
</style>
