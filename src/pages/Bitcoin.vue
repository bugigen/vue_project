<template>
  <div class="bitcoin">
    <template v-if="responseCrypto">
      <h3>Top list of cryptocurrencies</h3>
      <div class="grid">
        <div class="grid-item header">№</div>
        <div class="grid-item header">Cryptocurrency</div>
        <div class="grid-item header">RUB</div>
        <div class="grid-item header">USD</div>
        <div class="grid-item header">EUR</div>
        <div class="grid-item">1</div>
        <div class="grid-item">tBTC</div>
        <div class="grid-item">{{ computedTbtcRub }}</div>
        <div class="grid-item">{{ computedTbtcUsd }}</div>
        <div class="grid-item">{{ computedTbtcEur }}</div>
        <div class="grid-item">2</div>
        <div class="grid-item">Bitcoin</div>
        <div class="grid-item">{{ computedBtcRub }}</div>
        <div class="grid-item">{{ computedBtcUsd }}</div>
        <div class="grid-item">{{ computedBtcEur }}</div>
        <div class="grid-item">3</div>
        <div class="grid-item">Wrapped Bitcoin</div>
        <div class="grid-item">{{ computedWbtcRub }}</div>
        <div class="grid-item">{{ computedWbtcUsd }}</div>
        <div class="grid-item">{{ computedWbtcEur }}</div>
        <div class="grid-item">4</div>
        <div class="grid-item">yearn.finance</div>
        <div class="grid-item">{{ computedYfiRub }}</div>
        <div class="grid-item">{{ computedYfiUsd }}</div>
        <div class="grid-item">{{ computedYfiEur }}</div>
        <div class="grid-item">5</div>
        <div class="grid-item">Digg</div>
        <div class="grid-item">{{ computedDiggRub }}</div>
        <div class="grid-item">{{ computedDiggUsd }}</div>
        <div class="grid-item">{{ computedDiggEur }}</div>
      </div>
      <button class="btn btn-outline-dark me-2" @click="toggleChart">Bar chart</button>
      <button class="btn btn-outline-primary me-2" @click="toggleChart">Line chart</button>
      <button class="btn btn-outline-success me-2" @click="toggleChart">Doughnut chart</button>
      <template v-if="isEnabledBar === true">
        <the-chart
          :type="bar"
          :data="barData"
          :options="barOptions"
          :scales="barScales"
        ></the-chart>
      </template>
      <template v-else-if="isEnabledLine === true">
        <the-chart
          :type="line"
          :data="lineData"
          :options="lineOptions"
          :scales="lineScales"
        ></the-chart>
      </template>
      <template v-else>
        <the-chart
          :type="doughnut"
          :data="doughnutData"
          :options="doughnutOptions"
          :style="{width: '500px'}"
        ></the-chart>
      </template>
    </template>
  </div>
</template>

<script>
import TheChart from "@/components/TheChart";
import { ref } from "vue";

let responseDataRub = ref([]);
let responseDataUsd = ref([]);
let responseDataEur = ref([]);
let labels = ref(["tBTC (TBTC)", "Bitcoin (BTC)", "Wrapped Bitcoin (WBTC)", "yearn.finance (YFI)", "Digg (DIGG)"]);

export default {
  name: "BitcoinPage",
  components: {
    TheChart
  },
  data() {
    return {
      responseCrypto: null,
      isEnabledBar: true,
      isEnabledLine: false,
      isEnabledDoughnut: false,
      barName: "Bar Chart",
      bar: "bar",
      barData: {
        labels: labels,
        datasets: [{
          label: "RUB",
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
      barOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Cryptocurrencies (RUB)"
          }
        }
      },
      barScales: {
        y: {
          beginAtZero: true
        }
      },
      line: "line",
      lineData: {
        labels: labels,
        datasets: [{
          label: "USD",
          data: responseDataUsd,
          borderColor: "rgb(245,67,27)",
          backgroundColor: "rgba(255, 236, 139, 0.2)",
          borderWidth: 2
        }]
      },
      lineOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "Cryptocurrencies (USD)"
          }
        }
      },
      lineScales: {
        y: {
          beginAtZero: true
        }
      },
      doughnut: "doughnut",
      doughnutData: {
        labels: labels,
        datasets: [{
          label: "EURO",
          data: responseDataEur,
          borderColor: [
            "rgba(17, 50, 64, 1.0)",
            "rgba(94, 72, 0, 1.0)",
            "rgba(171, 122, 232, 1.0)",
            "rgba(27, 25, 169, 1.0)",
            "rgba(141, 47, 108, 1.0)"
          ],
          backgroundColor: [
            "rgba(17, 50, 64, 0.4)",
            "rgba(94, 72, 0, 0.4)",
            "rgba(171, 122, 232, 0.4)",
            "rgba(27, 25, 169, 0.4)",
            "rgba(141, 47, 108, 0.4)"
          ],
          borderWidth: 2,
          hoverOffset: 4
        }]
      },
      doughnutOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Cryptocurrencies (EUR)"
          }
        }
      }
    };
  },
  computed: {
    computedTbtcRub() {
      return this.responseCrypto.TBTC.RUB.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedTbtcUsd() {
      return this.responseCrypto.TBTC.USD.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedTbtcEur() {
      return this.responseCrypto.TBTC.EUR.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedBtcRub() {
      return this.responseCrypto.BTC.RUB.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedBtcUsd() {
      return this.responseCrypto.BTC.USD.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedBtcEur() {
      return this.responseCrypto.BTC.EUR.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedWbtcRub() {
      return this.responseCrypto.WBTC.RUB.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedWbtcUsd() {
      return this.responseCrypto.WBTC.USD.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedWbtcEur() {
      return this.responseCrypto.WBTC.EUR.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedYfiRub() {
      return this.responseCrypto.YFI.RUB.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedYfiUsd() {
      return this.responseCrypto.YFI.USD.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedYfiEur() {
      return this.responseCrypto.YFI.EUR.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedDiggRub() {
      return this.responseCrypto.DIGG.RUB.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedDiggUsd() {
      return this.responseCrypto.DIGG.USD.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    },
    computedDiggEur() {
      return this.responseCrypto.DIGG.EUR.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
    }
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
          console.log(this.responseCrypto);
          for (let item in this.responseCrypto) {
            responseDataRub.value.push(this.responseCrypto[item].RUB);
            responseDataUsd.value.push(this.responseCrypto[item].USD);
            responseDataEur.value.push(this.responseCrypto[item].EUR);
          }
        }
      };

      xhr.onerror = () => {
        console.log("Something went wrong");
      };
    },
    toggleChart(e) {
      switch (e.target.className) {
        case "btn btn-outline-dark me-2":
          this.isEnabledBar = true;
          this.isEnabledLine = false;
          this.isEnabledDoughnut = false;
          break;
        case "btn btn-outline-primary me-2":
          this.isEnabledLine = true;
          this.isEnabledBar = false;
          this.isEnabledDoughnut = false;
          break;
        default:
          this.isEnabledDoughnut = true;
          this.isEnabledBar = false;
          this.isEnabledLine = false;
      }
      document.querySelector(".btn").scrollIntoView({
        behavior: "smooth"
      });
    }
  },
  setup() {
    return {
      responseDataRub,
      responseDataUsd,
      responseDataEur
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
  position: relative;
  //background: url(@/assets/images/Bitcoin.jpg) 50% 50% no-repeat;
  background: var(--color-bg-light-blue);
  @include background();
  font-size: 0.9em;
  overflow: auto;

  h3 {
    margin: 10px auto;
  }

  .grid {
    width: 90%;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 50px repeat(4, 1fr);
    border: 1px solid var(--color-font);

    .grid-item {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--color-font);
      padding: 5px;
      background: var(--color-tbody);
    }

    .header {
      background: var(--color-thead);
    }
  }
}
</style>
