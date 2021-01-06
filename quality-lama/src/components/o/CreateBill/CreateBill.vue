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
  <div class="article-information" v-if="page != 0">
    <div class="article-input">
      <CustomInput
        class="article-name"
        :placeholder="'Artikel Bezeichnung'"
        v-model="article.name"
      />
      <div class="article-center-input">
        <CustomNumberInput
          class="article-quantity"
          :placeholder="'Anzahl'"
          v-model="article.quantity"
        />
        <CustomButton
          :type="'success'"
          :text="'Artikel Hinzufügen'"
          @click="addArticleToBill()"
        />
      </div>
      <CustomNumberInput
        class="article-price"
        :placeholder="'Stückpreis'"
        v-model="article.pricePerPiece"
      />
    </div>
    <div class="article-display">
      <div v-for="(article, index) in bill.articles" v-bind:key="index" class="displayed-article">
        <span>{{article.quantity}}x</span>
        <span>{{article.name}}</span>
        <span>{{formatPrice(article.pricePerPiece)}} €</span>
        <span>{{formatPrice(article.priceForAll)}} €</span>
        <span><i class="el-icon-remove-outline" @click="removeArticle(index)"></i></span>
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
import CustomNumberInput from '../../a/CustomNumberInput.vue';
import ArrowButton from '../../a/ArrowButton.vue';
import CustomButton from '../../a/CustomButton.vue';

export default {
  components: {
    CustomInput,
    ArrowButton,
    CustomButton,
    CustomNumberInput,
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

    function calculatePriceForAll() {
      return article.value.quantity * article.value.pricePerPiece;
    }

    function resetArticleObject() {
      article.value.quantity = null;
      article.value.name = null;
      article.value.pricePerPiece = null;
      article.value.priceForAll = null;
    }

    function addArticleToBill() {
      article.value.priceForAll = calculatePriceForAll();
      bill.value.articles.push({ ...article.value });
      resetArticleObject();
    }

    function formatPrice(value) {
      const val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function removeArticle(index) {
      bill.value.articles.splice(index, 1);
    }

    return {
      bill,
      article,
      page,
      increasePage,
      decreasePage,
      calculatePriceForAll,
      addArticleToBill,
      formatPrice,
      removeArticle,
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

.article-information {
  .article-input {
    display: flex;
    justify-content: space-evenly;

    .article-center-input {
      .el-button {
        margin-top: 32px;
      }
    }
  }
  .article-display {
    width: 70%;
    height: 164px;
    margin: 46px auto 0;
    border: 1px solid $bg-dark-main;
    border-radius: 8px;
    background-color: $bg-dark-third;
    padding: 16px;
    overflow: auto;

    .displayed-article {
      display: flex;
      color: $text-main;
      font-size: 18px;

      span {
        margin-right: 24px;
        margin-bottom: 3px;

        &:last-of-type {
          margin-left: auto;
        }
      }

      i:hover {
        cursor: pointer;
        color: red;
      }
    }
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
