<script>
  export let companyInfo;

  let bookmarked = false;
  let expanded = false;
  let timeSeries = companyInfo.TIME_SERIES?.values;
  let description = {
    short: `${companyInfo.OVERVIEW?.Description?.substring(0, 100)}...`,
    full: companyInfo.OVERVIEW?.Description,
  };
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
    <div class="bookmark" on:click={() => (bookmarked = !bookmarked)}>
      {#if bookmarked}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          ><path d="M0 0h24v24H0z" fill="none" /><path
            d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
          /></svg
        >
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          ><path d="M0 0h24v24H0V0z" fill="none" /><path
            d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"
          /></svg
        >
      {/if}
    </div>
    <div class="ticker-symbol">
      {companyInfo.OVERVIEW?.Symbol}
    </div>
    <div class="price">
      {formatter.format(closePrice)}
      <div class="price-change" class:price-drop={priceChange?.val <= 0}>
        {priceChange?.val > 0 ? "+" : ""}{priceChange?.val} ({priceChange?.percent}%)
      </div>
    </div>
    <div class="volume">
      {timeSeries ? timeSeries[0].volume : "N/A"}
    </div>
    <div class="dividend-yield">
      {companyInfo.OVERVIEW?.DividendYield}
    </div>
    <div class="expand" class:expanded on:click={() => (expanded = !expanded)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        ><path d="M24 24H0V0h24v24z" fill="none" opacity=".87" /><path
          d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
        /></svg
      >
    </div>
  </section>
  <section class="detail" class:show={expanded}>
    <div class="left">
      <div class="name">{companyInfo.OVERVIEW?.Name}</div>
      <!-- Country/exchange, sector, industry -->
      <!-- TODO: Shorten with readmore -->
      <div class="description">{description.short}</div>
    </div>
    <div class="right">
      <div class="net-income">{companyInfo.INCOME_STATEMENT?.netIncome}</div>
    </div>
  </section>
  <!-- {JSON.stringify(companyInfo)} -->
</li>

<style lang="scss">
  @import "../common.scss";

  li {
    // border-top: 1px solid $grey;
    border-bottom: 1px solid $grey;
    border-left: 1px solid $grey;
    border-right: 1px solid $grey;
    // height: 50px;

    .brief {
      height: 100%;
      // height: 48px;
      min-height: 52px;
      font-size: 16px;
      padding: $listElPadding;
      display: grid;
      grid-template-columns: $companyListColumns;
      align-items: center;

      .ticker-symbol {
        text-align: center;
      }

      .price,
      .volume,
      .dividend-yield {
        display: flex;
        // Supposed to be easier to compare numbers
        // justify-content: flex-end;
        justify-content: center;
      }

      .price {
        .price-change {
          font-size: 12px;
          margin-left: 5px;

          color: green;

          &.price-drop {
            color: red;
          }
        }
      }

      .bookmark,
      .expand {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .expand {
        transition: 0.2s all;

        &.expanded {
          transform: rotateZ(180deg);
        }
      }
    }

    .detail {
      max-height: 0;
      transition: 0.2s max-height;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left,
      .right {
        padding: $listElPadding;
      }

      &.show {
        max-height: 100vh;
      }
    }
  }
</style>
