<template>
  <div id="App-contact" ref="App-contact">
    <div class="Contact-container">
      <div class="Contact-description">
        <h2 class="Description-title">
          Let's connect
        </h2>
        <p class="Description-text">
          If you have any suggestions, questions, or just want to chat, you can send me an e-mail.<br>
          I will definitely answer.
        </p>
        <AppLinks />
      </div>
      <div class="Contact-pointer" />
      <AppForm />
    </div>
    <button class="App-button" @click="scrollToSection('#App-intro')" />
    <AppFooter />
  </div>
</template>

<script>
import AppForm from '~/components/AppForm.vue'
import AppLinks from '~/components/AppLinks.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  name: 'AppContact',
  components: { AppForm, AppLinks, AppFooter },
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
#App-contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 5%;
  position: relative;

  .App-button {
    min-width: 40px;
    min-height: 40px;
    border-top: 10px solid #6f2232;
    border-right: 10px solid #6f2232;
    border-bottom: 0;
    border-left: 0;
    margin-top: 25px;
    transform: rotate(-45deg);
    background: none;
    cursor: pointer;
  }

  .Contact-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    .Contact-description {

      .Description-title {
        color: #950740;
        font-size: 3em;
        font-weight: normal;
        margin-bottom: 15px;
      }

      .Description-text {
        color: #4e4e50;
        font-size: 1.3em;
      }
    }

    .Contact-pointer {
      min-width: 60px;
      min-height: 60px;
      border-top: 10px solid #6f2232;
      border-right: 10px solid #6f2232;
      margin: 0 45px 0 20px;
      transform: rotate(45deg);
    }
  }
}

@media screen and (max-width: 930px) {
  #App-contact {
    padding: 2% 5%;

    .Contact-container {
      flex-direction: column;
      margin-bottom: 10px;
      width: 100%;

      .Contact-description {
        width: 100%;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .Description-title {
          font-size: 2.5em;
        }
      }

      .Contact-pointer {
        min-width: 50px;
        min-height: 50px;
        margin: 0 25px 35px 0;
        transform: rotate(135deg);
      }
    }
  }
}

@media screen and (max-width: 540px) {
  #App-contact {

    .App-button {
      min-width: 30px;
      min-height: 30px;
      border-top: 5px solid #6f2232;
      border-right: 5px solid #6f2232;
      margin-top: 15px;
    }

    .Contact-container {
      flex-direction: column;
      margin-bottom: 10px;
      width: 100%;

      .Contact-description {
        width: 100%;
        max-width: 420px;
        display: flex;
        flex-direction: column;

        .Description-title {
          font-size: 2em;
          margin-bottom: 10px;
        }

        .Description-text {
          font-size: 1em;
        }
      }

      .Contact-pointer {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 380px) and (max-height: 780px) {
  #App-contact {

    .App-button {
      min-width: 20px;
      min-height: 20px;
      border-top: 3px solid #6f2232;
      border-right: 3px solid #6f2232;
      margin-top: 15px;
    }

    .Contact-container {
      flex-direction: column;
      margin-bottom: 0;
      width: 100%;

      .Contact-description {
        width: 100%;
        max-width: 420px;
        display: flex;
        flex-direction: column;

        .Description-title {
          font-size: 1.8em;
          margin-bottom: 0.2em;
        }

        .Description-text {
          font-size: 0.9em;
        }
      }

      .Contact-pointer {
        display: none;
      }
    }
  }
}
</style>
