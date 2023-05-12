<template>
  <div id="App-intro" ref="App-intro">
    <div class="App-title">
      <p>Greetings</p>
      <h1>Dmitriy Pokatilo</h1>
      <h2>Novice Front-end Engineer</h2>
      <button class="App-button" @click="scrollToSection('#App-about')">
        VIEW MORE
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppIntro',
  methods: {
    scrollToSection (sectionId) {
      document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
#App-intro {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .App-title {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 4em;
      font-weight: normal;
    }

    h2 {
      font-size: 1.5em;
      color: #4e4e50;
      font-weight: normal;
    }

    p {
      font-size: 1.5em;
      color: #6f2232;
    }

    .App-button {
      width: 120px;
      height: 36px;
      padding: 0 16px;
      margin: 32px 0;
      font-size: .875rem;
      font-weight: bold;
      color: #950740;
      border: 2px solid #950740;
      border-radius: 4px;
      background-color: #1a1a1d;
      cursor: pointer;

      &:hover {
        background-color: #950740;
        color: #1a1a1d;
        transition: 0.5s;
      }
    }
  }
}

@media screen and (max-width: 930px) {
  #App-intro {
    min-height: 100vh;

    .App-title {

      h1 {
        font-size: 3.5em;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  #App-intro {
    min-height: 100vh;

    .App-title {

      h1 {
        font-size: 2.5em;
      }

      h2 {
        font-size: 1.2em;
      }

      p {
        font-size: 1.2em;
      }
    }
  }
}

@media screen and (max-width: 380px) and (max-height: 780px) {
  #App-intro {
    min-height: 100vh;

    .App-title {

      h1 {
        font-size: 2em;
      }

      h2 {
        font-size: 1em;
      }

      p {
        font-size: 1.2em;
      }
    }
  }
}
</style>
