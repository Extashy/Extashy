<template>
  <footer class="App-footer">
    <p class="Footer-text">
      Original template is made with ❤️ by
      <a class="Footer-link" href="https://github.com/aabidsofi19/neva-portfolio-template/" target="_blank" rel="noopener noreferrer nofollow">
        Aabid Sofi
      </a>
    </p>
    <p class="Footer-text">
      Designed and developed with ❤️ by
      <a class="Footer-link" href="https://github.com/extashy/extashy/" target="_blank" rel="noopener noreferrer nofollow">
        Dmitriy Pokatilo
      </a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss">
.App-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 0 10px 10px;

  .Footer-text {
    font-size: 1em;
    color: #4e4e50;

    .Footer-link {
      font-size: 1em;
      color: #950740;
    }
  }
}

@media screen and (max-width: 930px) {
  .App-footer {

    .Footer-text {
      font-size: 0.8em;
    }
  }
}

@media screen and (max-width: 540px) {
  .App-footer {

    .Footer-text {
      font-size: 0.6em;
    }
  }
}

@media screen and (max-width: 380px) and (max-height: 780px) {
  .App-footer {
    margin: 0 0 0.3em 0.3em;

    .Footer-text {
      font-size: 0.55em;
    }
  }
}
</style>
