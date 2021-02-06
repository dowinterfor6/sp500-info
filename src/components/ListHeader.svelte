<li>
  <div class="bookmark" />
  <div class="ticker-symbol">Ticker</div>
  <div class="price">Price</div>
  <div class="volume">Volume</div>
  <div class="dividend-yield">Dividend Yield</div>
  <div class="expand" />
</li>

<style lang="scss">
  @import "../common.scss";

  li {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: $companyListColumns;
    padding: $listElPadding;
    // border-top-left-radius: 4px;
    // border-top-right-radius: 4px;
    border: 1px solid $grey;
    background: white;

    div {
      text-align: center;
    }
  }
</style>
