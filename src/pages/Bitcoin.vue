<template>
  <div class="bitcoin">
    <template v-if="responseCrypto">
      tBTC = {{ responseCrypto.TBTC.USD }} dollars, &nbsp;
      tBTC = {{ responseCrypto.TBTC.RUB }} rubles <br>
      Bitcoin = {{ responseCrypto.BTC.USD }} dollars, &nbsp;
      Bitcoin = {{ responseCrypto.BTC.RUB }} rubles <br>
      Wrapped Bitcoin = {{ responseCrypto.WBTC.USD }} dollars, &nbsp;
      Wrapped Bitcoin = {{ responseCrypto.WBTC.RUB }} rubles <br>
      yearn.finance = {{ responseCrypto.YFI.USD }} dollars, &nbsp;
      yearn.finance = {{ responseCrypto.YFI.RUB }} rubles <br>
      Digg = {{ responseCrypto.DIGG.USD }} dollars, &nbsp;
      Digg = {{ responseCrypto.DIGG.RUB }} rubles <br>
      {{responseData}}
      <bar-chart :type="bar" :data="barData"></bar-chart>
    </template>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";
import {ref} from "vue";

let responseData = ref([]);

export default {
  name: "BitcoinPage",
  components: {
    BarChart
  },
  setup() {
    return {responseData};
  },
  data() {
    return {
      responseCrypto: null,
      // responseData: [],
      barName: "Bar Chart",
      bar: "bar",
      barData: {
        labels: ["tBTC (TBTC)", "Bitcoin (BTC)", "Wrapped Bitcoin (WBTC)", "yearn.finance (YFI)", "Digg (DIGG)"],
        datasets: [{
          label: "Top list cryptocurrencies",
          data: responseData,
          backgroundColor: [
            "rgba(17, 50, 64, 0.4)",
            "rgba(94, 72, 0, 0.4)",
            "rgba(171, 122, 232, 0.4)",
            "rgba(27, 25, 169, 0.4)",
            "rgba(141, 47, 108, 0.4)"
          ],
          borderColor: [
            "rgba(17, 50, 64, 1.0)",
            "rgba(94, 72, 0, 1.0)",
            "rgba(171, 122, 232, 1.0)",
            "rgba(27, 25, 169, 1.0)",
            "rgba(141, 47, 108, 1.0)"
          ],
          borderWidth: 2
        }]
      }
    };
  },
  methods: {
    getCrypto() {
      let xhr = new XMLHttpRequest();
      let url = new URL("https://min-api.cryptocompare.com/data/pricemulti");

      url.searchParams.set("fsyms", "tBTC,BTC,WBTC,YFI,DIGG");
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
          for (let item in this.responseCrypto) {
            responseData.value.push(this.responseCrypto[item].RUB);
          }
          // console.log(responseData);
        }
      };

      xhr.onerror = () => {
        console.log("Something went wrong");
      };
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
  //background: url(@/assets/images/Bitcoin.jpg) 50% 50% no-repeat;
  background: var(--color-bg-light-blue);
  @include background();
  //color: var(--color-bg-task);
  font-size: 0.9em;
  overflow: auto;
}
</style>
