<script>
  import { onDestroy } from "svelte";

  import { companyInformationStore } from "../store/store";
  import ListHeader from "./ListHeader.svelte";
  import ListItem from "./ListItem.svelte";

  let companyInformation = {};
  const unsubscribeFromCompanyInformationStore = companyInformationStore.subscribe(
    (val) => (companyInformation = val)
  );

  // TODO: Apply filtering, will probably have to golf it
  $: parsedCompanyInfo = Object.keys(companyInformation).map((tickerSymbol) => {
    return companyInformation[tickerSymbol];
  });

  onDestroy(() => {
    unsubscribeFromCompanyInformationStore();
  });
</script>

<section>
  <ul>
    <ListHeader />
    {#if Object.keys(companyInformation).length > 0}
      {#each parsedCompanyInfo as companyInfo}
        <ListItem {companyInfo} />
      {/each}
    {:else}
      <div class="loading">Loading...</div>
    {/if}
  </ul>
</section>

<style lang="scss">
  @import "../common.scss";

  section {
    padding: 10px $pagePadding;
    height: 100%;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
</style>
