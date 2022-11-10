<template>
  <div class="container">
<!--    <canvas id="chart"></canvas>-->
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "LineChart",
  props: {
    type: String,
    data: {}
  },
  methods: {
    getChart() {
      document.querySelector(".container").innerHTML = '<canvas id="chart"></canvas>';
      const chr = document.querySelector("#chart");
      const chart = new Chart(chr, {
        type: this.type,
        data: this.data
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