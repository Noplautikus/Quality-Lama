<template>
  <div class="settings">
    <span class="heading">Einstellungen</span>
    <div class="settings-inputs">
      <CustomInput
        class="companyname"
        :placeholder="'Firmenname'"
        v-model="userSettings.companyname"
      />
      <CustomInput
        class="ceo"
        :placeholder="'Inhaber'"
        v-model="userSettings.ceo"
      />
      <CustomInput
        class="street"
        :placeholder="'Straße'"
        v-model="userSettings.street"
      />
      <CustomInput
        class="houseNumber"
        :placeholder="'HS-NR.'"
        v-model="userSettings.houseNumber"
      />
      <CustomInput
        class="postcode"
        :placeholder="'PLZ'"
        v-model="userSettings.postcode"
      />
      <CustomInput
        class="location"
        :placeholder="'Ort'"
        v-model="userSettings.location"
      />
      <CustomInput
        class="phone"
        :placeholder="'Tel-NR.'"
        v-model="userSettings.phone"
      />
      <CustomInput
        class="taxId"
        :placeholder="'Umsatzsteuer ID'"
        v-model="userSettings.taxId"
      />
      <CustomInput
        class="iban"
        :placeholder="'IBAN'"
        v-model="userSettings.iban"
      />
      <CustomInput
        class="bank"
        :placeholder="'Bank'"
        v-model="userSettings.bank"
      />
      <CustomInput
        class="bic"
        :placeholder="'BIC'"
        v-model="userSettings.bic"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import CustomInput from '../../a/CustomInput.vue';

export default {
  components: {
    CustomInput,
  },
  setup() {
    const userSettings = ref({
      companyname: null,
      ceo: null,
      street: null,
      houseNumber: null,
      postcode: null,
      location: null,
      phone: null,
      taxId: null,
      iban: null,
      bank: null,
      bic: null,
    });

    return {
      userSettings,
    };
  },
};
</script>

<style lang="scss" scoped>
.settings {
  .settings-inputs {

  }
}
</style>
