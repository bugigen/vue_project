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
      {{ responseDataRub }} <br>
      {{ responseDataUsd }} <br>
      <button class="btn btn-outline-secondary" @click="toggleBarLine">Line chart</button>
      <template v-if="isEnabled === true">
      <bar-chart
        :type="bar"
        :data="barData"
        :options="options"
        :scales="scales"
      ></bar-chart>
      </template>
      <template v-else>
        <bar-chart
          :type="line"
          :data="lineData"
          :options="options"
          :scales="scales"
        ></bar-chart>
      </template>
    </template>
  </div>
</template>

<script>
import BarChart from "@/components/BarChart";
// import LineChart from "@/components/LineChart";
import { ref } from "vue";

let responseDataRub = ref([]);
let responseDataUsd = ref([]);

export default {
  name: "BitcoinPage",
  components: {
    BarChart,
    // LineChart
  },
  data() {
    return {
      responseCrypto: null,
      isEnabled: true,
      barName: "Bar Chart",
      bar: "bar",
      barData: {
        labels: ["tBTC (TBTC)", "Bitcoin (BTC)", "Wrapped Bitcoin (WBTC)", "yearn.finance (YFI)", "Digg (DIGG)"],
        datasets: [{
          label: "Top list cryptocurrencies in rubles",
          data: responseDataRub,
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
      },
      options: {
        responsive: true
      },
      scales: {
        y: {
          beginAtZero: true
        }
      },
      line: "line",
      lineData: {
        labels: ["tBTC (TBTC)", "Bitcoin (BTC)", "Wrapped Bitcoin (WBTC)", "yearn.finance (YFI)", "Digg (DIGG)"],
        datasets: [{
          label: "Top list cryptocurrencies in dollars",
          data: responseDataUsd,
          borderColor: "rgba(245, 229, 27, 1.0)",
          backgroundColor: "rgba(255, 236, 139, 0.2)",
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
            responseDataRub.value.push(this.responseCrypto[item].RUB);
            responseDataUsd.value.push(this.responseCrypto[item].USD);
          }
          // console.log(responseDataUsd.value)
        }
      };

      xhr.onerror = () => {
        console.log("Something went wrong");
      };
    },
    toggleBarLine() {
      this.isEnabled = !this.isEnabled;
    }
  },
  setup() {
    return {
      responseDataRub,
      responseDataUsd
    };
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
