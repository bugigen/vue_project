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

<style lang="scss" scoped>
@import "@/variables.scss";

.bitcoin {
  text-align: center;
  height: $calcHeight;
  background: url(@/assets/images/Bitcoin.jpg) 50% 50% no-repeat;
  background-size: contain;
}
</style>
