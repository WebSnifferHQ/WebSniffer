<script>
  export let label = "";
  export let submit_button_text = "";
  export let on_submit = (_urlToCheck) => {};

  let urlToCheck = "";
</script>

<form
  on:submit|preventDefault={() => {
    on_submit(urlToCheck);
  }}
>
  <div class="search_wrap">
    <label for="url">{label}</label>
    <div class="search_box">
      <input class="input" id="url" bind:value={urlToCheck} />
      <button class="btn btn_common" type="submit">{submit_button_text}</button>
    </div>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .search_wrap {
    max-width: 736px;
    /* margin: 38px auto; */
    padding: 0px;
  }

  .search_wrap .search_box {
    position: relative;
    width: 100%;
    height: 2rem;
    margin-top: .5rem;
    padding: 0;
  }

  .search_wrap .search_box .input {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 98%;
    height: 100%;
    /* padding: 10px 20px; */
    border-radius: 1px;
    font-size: 18px;
    outline: none;
  }

  .search_wrap .search_box .btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 2.4rem;
    background: #1143ca;
    color: white;
    z-index: 1;
    cursor: pointer;
    border: none;
  }

  .search_wrap .search_box .btn:hover {
    background: #708bd2;
  }
</style>
