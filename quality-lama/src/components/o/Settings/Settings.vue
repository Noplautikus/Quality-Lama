<template>
  <div class="settings">
    <span class="heading">Einstellungen</span>
    <div class="settings-inputs">
      <div class="left-side-inputs">
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
      </div>
      <div class="right-side-inputs">
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
        <CustomButton
          :type="'success'"
          :text="'Speichern'"
          @click="saveUserSettings"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
import notificationService from '@/services/notificationService';
import CustomInput from '../../a/CustomInput.vue';
import CustomButton from '../../a/CustomButton.vue';

export default {
  components: {
    CustomInput,
    CustomButton,
  },
  setup() {
    const store = useStore();

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

    function saveUserSettings() {
      store.commit('SAVE_USER_SETTINGS', userSettings);

      notificationService.showSuccessNotification('Erfolgreich gespeichert');
    }

    return {
      userSettings,
      saveUserSettings,
      store,
    };
  },
  mounted() {
    this.userSettings = this.store.getters.getUserSettings;
  },
};
</script>

<style lang="scss" scoped>
.settings {
  .settings-inputs {
    display: flex;
    justify-content: space-evenly;

    .left-side-inputs {
      .el-input {
        margin-bottom: 6px;
      }
    }

    .right-side-inputs {
      .el-input {
        margin-bottom: 6px;
      }
      .el-button {
        width: 200px;
        margin-top: 93px;
      }
    }
  }
}
</style>
