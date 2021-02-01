<li>
  <div class="ticker-symbol">Ticker Symbol</div>
  <div class="name">Name</div>
  <div class="sector">Sector</div>
  <div class="price">Price</div>
  <div class="market-cap">Market Capitalization</div>
  <div class="dividend-yield">Dividend Yield</div>
</li>

<style lang="scss">
  @import "../common.scss";

  li {
    display: grid;
    grid-template-columns: $companyListColumns;
  }
</style>
