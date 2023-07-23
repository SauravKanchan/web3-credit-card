<script setup lang="ts">
import { useTransactionsStore } from "../store/transactions.store";

const transactionStore = useTransactionsStore();
</script>

<template>
  <div class="transactions">
    <div style="text-align: left; font-weight: 500">Transactions</div>
    <div style="width: 100%">
      <div class="transaction" style="font-weight: 600">
        <div>#</div>
        <div>Chain</div>
        <div>Hash</div>
        <div>Amount</div>
        <div>Receiver</div>
        <div>Date</div>
      </div>
      <div style="width: 100%; max-height: 120px; overflow: auto">
        <div
          class="transaction"
          v-for="(transaction, index) in transactionStore.transactions"
          :key="index"
        >
          <div>{{ index + 1 }}</div>
          <div class="ellipsis" style="text-transform: capitalize">
            {{ transaction.chain }}
          </div>
          <div class="ellipsis" :title="transaction.hash">
            {{ transaction.hash }}
          </div>
          <div class="ellipsis">{{ transaction.amount }}</div>
          <div class="ellipsis" :title="transaction.receiver">
            {{ transaction.receiver }}
          </div>
          <div class="ellipsis">{{ transaction.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transactions {
  overflow-x: auto;
  padding: 1.25rem;
  border: 1px solid #333;
  box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
}

.transaction {
  display: grid;
  padding-block: 0.25rem;
  width: 100%;
  max-width: 1280px;
  column-gap: 1rem;
  grid-template-columns: 40px 100px 400px 120px 400px 180px;
  text-align: left;
}
</style>
