<script>
  import { onMount } from "svelte";
  import { getSp500Data } from "./util/sp500ApiUtil";
  import CompanyList from "./components/CompanyList.svelte";
  import Header from "./components/Header.svelte";
  import { companyInformationStore } from "./store/store";

  onMount(async () => {
    const data = await getSp500Data();
    $companyInformationStore = data;
  });
</script>

<main>
  <Header />
  <h1>S&P 500 Companies Information</h1>
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
    font-family: "Montserrat", sans-serif;
  }

  :global(p, span, div, ul, li) {
    font-family: "Roboto", sans-serif;
  }

  main {
    height: 100%;
    padding: 0;
    overflow: hidden;

    h1 {
      padding: 0 $pagePadding;
    }
  }
</style>
