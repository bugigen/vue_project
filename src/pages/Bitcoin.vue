<template>
  <div class="bitcoin">
    Bitcoin <br>
    Website: CryptoCompare.com
  </div>
</template>

<script>
export default {
  name: "BitcoinPage"
};
</script>

<style scoped>
.bitcoin {
  text-align: center;
  height: calc(100vh - 40px);
  background: url(@/assets/images/Bitcoin.jpg) 50% 50% no-repeat;
  background-size: contain;
}
</style>
