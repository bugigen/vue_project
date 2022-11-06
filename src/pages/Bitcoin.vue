<template>
  <div class="bitcoin">
    <template v-if="responseCrypto">
      Bitcoin = {{ responseCrypto.BTC.USD }} dollars <br>
      Bitcoin = {{ responseCrypto.BTC.RUB }} rubles
    </template>
  </div>
</template>

<script>
export default {
  name: "BitcoinPage",
  data() {
    return {
      responseCrypto: null
    };
  },
  methods: {
    getCrypto() {
      let xhr = new XMLHttpRequest();
      let url = new URL("https://min-api.cryptocompare.com/data/pricemulti");

      url.searchParams.set("fsyms", "BTC,ETH,SOL");
      url.searchParams.set("tsyms", "USD,EUR,RUB");
      url.searchParams.set("api_key", "83394a2fa0d3865d7082de2e3b92867a0aca3a9a1f1abc9d28da1e3830fe0121");

      xhr.open("GET", url);
      xhr.responseType = "json";

      xhr.send();

      xhr.onload = () => {
        if (xhr.status !== 200) {
          console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
          this.responseCrypto = xhr.response;
          // console.log(xhr.response);
        }
      };

      xhr.onerror = () => {
        console.log('Something went wrong');
      }
    }
  },
  mounted() {
    this.getCrypto();
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.bitcoin {
  background: url(@/assets/images/Bitcoin.jpg) 50% 50% no-repeat;
  @include background();
  color: var(--color-bg-task);
}
</style>
