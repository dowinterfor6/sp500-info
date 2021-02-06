<script>
  export let chipLabel;

  let selected = false;
</script>

<div class="chip" class:selected on:click={() => (selected = !selected)}>
  {chipLabel}
</div>

<style lang="scss">
  @import "../common.scss";

  .chip {
    margin: 15px 0;
    height: 32px;
    border-radius: 16px;
    border: 1px solid $grey;
    padding: 0 12px;
    // TODO: IE support?
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s background;

    &.selected {
      background: $grey;
    }
  }
</style>
