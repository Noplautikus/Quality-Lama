<template>
  <div class="settings">
    <span class="heading">Einstellungen</span>
    <div class="settings-inputs">
      <CustomInput
        v-for="input in inputs"
        :key="input.inputclass"
        :class="input.inputclass"
        :placeholder="input.placeholder"
        v-model="input.model"
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

    const inputs = ref([
      {
        inputclass: 'companyname',
        placeholder: 'Firmenname',
        model: userSettings.value.companyname,
      },
      {
        inputclass: 'ceo',
        placeholder: 'Inhaber',
        model: userSettings.value.ceo,
      },
      {
        inputclass: 'street',
        placeholder: 'Straße',
        model: userSettings.value.street,
      },
      {
        inputclass: 'houseNumber',
        placeholder: 'HS-NR.',
        model: userSettings.value.houseNumber,
      },
      {
        inputclass: 'postcode',
        placeholder: 'PLZ',
        model: userSettings.value.postcode,
      },
      {
        inputclass: 'location',
        placeholder: 'Ort',
        model: userSettings.value.location,
      },
      {
        inputclass: 'phone',
        placeholder: 'Tel.-NR.',
        model: userSettings.value.phone,
      },
      {
        inputclass: 'taxId',
        placeholder: 'UmsatzsteuerID',
        model: userSettings.value.taxId,
      },
      {
        inputclass: 'iban',
        placeholder: 'IBAN',
        model: userSettings.value.iban,
      },
      {
        inputclass: 'bank',
        placeholder: 'Bank',
        model: userSettings.value.bank,
      },
      {
        inputclass: 'bic',
        placeholder: 'BIC',
        model: userSettings.value.bic,
      },
    ]);

    return {
      inputs,
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
