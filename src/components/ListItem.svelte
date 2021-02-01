<script>
  export let companyInfo;

  let timeSeries = companyInfo.TIME_SERIES?.values;
  // TODO: Is there a better way to do this?
  // $: latestPrice = timeSeries ? timeSeries[0] : {};
  // $: priceChange =
  //   latestPrice.open && latestPrice.close
  //     ? latestPrice.close - latestPrice.open
  //     : 0;

  let latestPrice, priceChange, closePrice;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  if (timeSeries) {
    latestPrice = timeSeries[0];
    closePrice = parseFloat(latestPrice.close);
    let prevPrice = timeSeries[1];
    priceChange = {
      val: parseFloat(latestPrice.close - prevPrice.close).toFixed(2),
      percent: (
        parseFloat(latestPrice.close - prevPrice.close) / closePrice
      ).toFixed(2),
    };
  }
</script>

<li>
  <section class="brief">
    <div class="ticker-symbol">
      {companyInfo.OVERVIEW?.Symbol}
    </div>
    <div class="name">
      {companyInfo.OVERVIEW?.Name}
    </div>
    <div class="sector">
      {companyInfo.OVERVIEW?.Sector}
    </div>
    <div class="price">
      {formatter.format(closePrice)}
      <div class="price-change">
        {priceChange?.val > 0
          ? "+"
          : ""}{priceChange?.val}({priceChange?.percent}%)
      </div>
    </div>
    <div class="market-cap">
      {formatter.format(companyInfo.OVERVIEW?.MarketCapitalization)}
    </div>
    <div class="dividend-yield">
      {companyInfo.OVERVIEW?.DividendYield}
    </div>
  </section>
  <!-- {JSON.stringify(companyInfo)} -->
</li>

<style lang="scss">
  @import "../common.scss";

  li {
    border-top: 1px solid $grey;
    height: 50px;

    section {
      height: 100%;
      padding: 10px 0;
      display: grid;
      grid-template-columns: $companyListColumns;
      align-items: center;

      .price {
        display: flex;

        .price-change {
          margin-left: 5px;
        }
      }
    }
  }
</style>
