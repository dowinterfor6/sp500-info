<script>
  import { onMount } from "svelte";
  import { getSp500Data } from "./util/sp500ApiUtil";
  import CompanyList from "./components/CompanyList.svelte";
  import Header from "./components/Header.svelte";
  import { companyInformationStore } from "./store/store";
  import Chip from "./components/Chip.svelte";

  onMount(async () => {
    const data = await getSp500Data();
    $companyInformationStore = data;
  });
</script>

<main>
  <Header />
  <div class="chip-container">
    <Chip chipLabel={"Watchlist"} />
  </div>
  <CompanyList />
</main>

<style lang="scss">
  @import "./common.scss";

  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    padding: 0;
    margin: 0;
  }

  :global(h1, h2, h3, h4, h5) {
    // font-family: "Montserrat", sans-serif;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }

  :global(p, span, div, ul, li) {
    font-family: "Roboto", sans-serif;
  }

  main {
    height: 100%;
    padding: 0;
  }

  .chip-container {
    padding: 0 $pagePadding;
  }
</style>
