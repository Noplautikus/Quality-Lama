<template>
  <span class="heading">Rechnung Erstellen</span>
  <div class="bill-informations" v-if="page == 0">
    <div class="left-side">
      <div class="bill-information">
        <span class="heading-small common-heading">Allgemeine Informationen</span>
        <CustomInput
          class="billnumber"
          :placeholder="'Rechnungsnummer'"
          v-model="bill.billNumber"
        />
        <CustomInput
          class="paymentcondition"
          :placeholder="'Zahlungsbedingung'"
          v-model="bill.paymentConditions"
        />
      </div>
    </div>
    <div class="right-side">
      <div class="costumer-information">
        <span class="heading-small">Kunde</span>
        <CustomInput
          class="customer-name"
          :placeholder="'Name'"
          v-model="bill.costumer.name"
        />
        <CustomInput
          class="costumer-street"
          :placeholder="'Straße'"
          v-model="bill.costumer.street"
        />
        <CustomInput
          class="costumer-housenumber"
          :placeholder="'HS-NR.'"
          v-model="bill.costumer.houseNumber"
        />
        <CustomInput
          class="costumer-postcode"
          :placeholder="'PLZ'"
          v-model="bill.costumer.postcode"
        />
        <CustomInput
          class="costumer-location"
          :placeholder="'Ort'"
          v-model="bill.costumer.location"
        />
      </div>
    </div>
  </div>
  <div class="arrow arrow-left" v-if="page != 0" @click="decreasePage">
    <ArrowButton :direction="'left'"/>
  </div>
  <div class="arrow arrow-right" v-if="page == 0" @click="increasePage">
    <ArrowButton :direction="'right'"/>
  </div>
</template>

<script>
import { ref } from 'vue';
import CustomInput from '../../a/CustomInput.vue';
import ArrowButton from '../../a/ArrowButton.vue';

export default {
  components: {
    CustomInput,
    ArrowButton,
  },
  setup() {
    const page = ref(0);

    const bill = ref({
      billNumber: null,
      date: null,
      paymentConditions: null,
      costumer: {
        name: null,
        street: null,
        houseNumber: null,
        postcode: null,
        location: null,
      },
      articles: [],
      overallPrice: null,
    });

    const article = ref({
      quantity: null,
      name: null,
      pricePerPiece: null,
      priceForAll: null,
    });

    function increasePage() {
      page.value += 1;
    }

    function decreasePage() {
      page.value -= 1;
    }

    return {
      bill,
      article,
      page,
      increasePage,
      decreasePage,
    };
  },
};
</script>

<style lang="scss" scoped>
.bill-informations {
  display: flex;
  justify-content: space-evenly;

  .el-input {
  margin-bottom: 6px;
}
}

.arrow {
  position: absolute;
  bottom: 232px;
}

.arrow-right {
  right: 32px;
}

.arrow-left {
  left: 32px;
}
</style>
