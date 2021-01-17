<template>
  <span class="heading">Alle Rechnungen</span>
  <div class="bills">
    <div @click="createPdf(bill)" class="bill-display" v-for="(bill, index) in bills" :key="index">
      <i class="el-icon-document"></i>
      <span>{{bill.billNumber}}</span>
      <span>{{bill.date}}</span>
      <span>{{bill.costumer.name}}</span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import pdfBillCreationService from '../../../services/pdfBillCreationService';

export default {
  setup() {
    const store = useStore();
    const bills = ref([]);

    function getBills() {
      bills.value = store.getters.getBills;
    }

    function createPdf(bill) {
      pdfBillCreationService.showPdf(bill);
    }

    onMounted(() => {
      getBills();
    });

    return {
      bills,
      createPdf,
    };
  },
};
</script>

<style lang="scss" scoped>
.bills {
  display: flex;
  flex-wrap: wrap;

  .bill-display {
    cursor: pointer;
    width: 130px;
    border: 2px solid;
    border-color: $text-main;
    padding: 10px;
    border-radius: 20px;
    margin-right: 20px;
    margin-bottom: 20px;

    &:hover {
      background-color: $bg-dark-third;
    }

    i {
      font-size: 80px;
    }
  }

  span {
    color: $text-main;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
