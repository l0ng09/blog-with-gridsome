<template>
  <div class="layout sticky-header">
    <header class="header sticky" data-v-7e33895e="">
      <div class="container" data-v-7e33895e="">
        <div class="left" data-v-7e33895e="">
          <g-link
            to="/"
            aria-current="page"
            class="home-link active--exact active"
            data-v-7e33895e=""
          >
            <img
              src="/img/logo.svg"
              alt="Nichlas W. Andersen"
              class="logo"
              data-v-7e33895e=""
            />
          </g-link>
        </div>
        <nav class="nav right" data-v-7e33895e="">
          <g-link to="/journal" class="nav__link" data-v-7e33895e="">
            Journal
          </g-link>
          <g-link to="/contact" class="nav__link" data-v-7e33895e="">
            Say Hi!
          </g-link>
        </nav>
      </div>
    </header>

    <slot />

    <footer data-v-07acb5f8="" class="footer">
      <div data-v-07acb5f8="" class="container">
        <span data-v-07acb5f8="">Copyright © 2021</span>
      </div>
    </footer>
  </div>
</template>

<style>
</style>
