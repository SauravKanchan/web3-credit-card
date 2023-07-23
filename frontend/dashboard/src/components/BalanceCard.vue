<script setup lang="ts">
type BalanceCardProps = {
  currency: string;
  amount: number | null;
  title: string;
};

const props = defineProps<BalanceCardProps>();
</script>

<template>
  <div class="balance-card">
    <div class="balance-card__title">{{ props.title }}</div>
    <div class="balance-card__content">
      <div class="balance-card__currency">{{ props.currency }}</div>
      <div class="balance-card__amount">{{ props.amount || "0" }}</div>
    </div>
  </div>
</template>

<style scoped>
.balance-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  border: 1px solid #333;
  border-radius: 0.5rem;
  width: 100%;
  box-shadow: 4px 4px 16px 4px rgba(0, 0, 0, 0.25);
}

.balance-card__title {
  text-align: left;
  font-weight: 500;
}

.balance-card__content {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 2rem;
  font-weight: 700;
}
</style>
