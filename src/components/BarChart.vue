<template>
  <div class="container">
    <!--    <canvas id="chart"></canvas>-->
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "BarChart",
  props: {
    type: String,
    data: {},
    options: {},
    scales: {},
  },
  methods: {
    getChart() {
      document.querySelector(".container").innerHTML = "<canvas id=\"chart\"></canvas>";
      const chr = document.querySelector("#chart");
      window.chart = new Chart(chr, {
        type: this.type,
        data: this.data,
        options: this.options,
        scales: this.scales,
      });
      if (window.chart !== null) {
        window.chart.destroy();
      }
      window.chart = new Chart(chr, {
        type: this.type,
        data: this.data,
        options: this.options,
        scales: this.scales,
      });
      // chart;
    }
  },
  async mounted() {
    this.getChart();
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>