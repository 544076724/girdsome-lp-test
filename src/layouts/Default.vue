<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header> -->

    <header class="header sticky" data-v-7e33895e="">
      <div class="container" data-v-7e33895e="">
        <div class="left" data-v-7e33895e="">
          <g-link :to="'/'" class="home-link active" data-v-7e33895e="">
            <img src="/logo.svg" alt="Nichlas W. Andersen" class="logo" data-v-7e33895e="">

          </g-link>

        </div>
        <nav class="nav right" data-v-7e33895e="">
          <g-link :to="'/Magazine/'" class="nav__link" data-v-7e33895e="">
            杂志
          </g-link>
          <g-link :to="'/Feedback/'" class="nav__link" data-v-7e33895e="">
            问好!
          </g-link>
        
        </nav>
      </div>
    </header>

    <slot />
    <footer data-v-07acb5f8="" class="footer">
      <div data-v-07acb5f8="" class="container"><span data-v-07acb5f8="">Copyright © 2021</span></div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
