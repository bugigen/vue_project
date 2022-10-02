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
@import "@/styles/variables.scss";

.bitcoin {
  background: url(@/assets/images/Bitcoin.jpg) 50% 50% no-repeat;
  @include background();
}
</style>
