<template>
  <div id="App-about" ref="App-about">
    <div class="Info-container">
      <div class="Info">
        <h2 class="Info-title">
          ABOUT ME
        </h2>
        <p class="Info-text">
          Hi! My name is Dima and I'm Novice Front-end Engineer.
        </p>
        <p class="Info-text">
          I discovered the world of IT in 2022, but I've loved computers and everything related to them all my life.
        </p>
        <p class="Info-text">
          I love creating something new, beautiful and enjoying developing in a circle of like-minded people.
        </p>
        <p class="Info-text">
          I graduated from Kuban State University with a degree in Finance and Credit and received a specialist diploma.
          In 2022, I completed Front-end development courses and received a professional retraining diploma.
        </p>
      </div>
      <img class="Image" src="@/assets/images/Photo.jpg" alt="My Photo">
    </div>
    <div class="Skills-container">
      <div>
        <h2 class="Skills-title">
          MY SKILLS
        </h2>
      </div>
      <div class="Skills-list">
        <div class="Skill">
          <img class="Icon" src="@/assets/images/HTML.png" alt="HTML">
          <p>
            HTML
          </p>
        </div>
        <div class="Skill">
          <img class="Icon" src="@/assets/images/CSS.png" alt="CSS">
          <p>
            CSS
          </p>
        </div>
        <div class="Skill">
          <img class="Icon" src="@/assets/images/SASS.png" alt="SASS">
          <p>
            SASS
          </p>
        </div>
        <div class="Skill">
          <img class="Icon" src="@/assets/images/JS.png" alt="JavaScript">
          <p>
            JavaScript
          </p>
        </div>
        <div class="Skill">
          <img class="Icon" src="@/assets/images/Vue.png" alt="Vue">
          <p>
            Vue
          </p>
        </div>
        <div class="Skill">
          <img class="Icon" src="@/assets/images/Nuxt.png" alt="Nuxt">
          <p>
            Nuxt
          </p>
        </div>
        <div class="Skill">
          <img class="Icon" src="@/assets/images/Webpack.png" alt="Webpack">
          <p>
            Webpack
          </p>
        </div>
        <div class="Skill">
          <img class="Icon" src="@/assets/images/Git.png" alt="Git">
          <p>
            Git
          </p>
        </div>
        <div class="Skill">
          <img class="Icon" src="@/assets/images/BEM.png" alt="Block-Element-Modifier">
          <p>
            BEM
          </p>
        </div>
        <div class="Skill">
          <img class="Icon" src="@/assets/images/ESLint.png" alt="ESLint">
          <p>
            ESLint
          </p>
        </div>
        <div class="Skill">
          <img class="Icon" src="@/assets/images/English.png" alt="English">
          <p>
            English
          </p>
        </div>
      </div>
      <button class="App-button" @click="scrollToSection('#App-contact')">
        CONTACT ME
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAbout',
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
#App-about {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 5% 5%;

  .Info-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .Image {
      width: 600px;
      height: 450px;
      border-radius: 4px;
      box-shadow: -6px -6px 2px 1px #d6d6da;
    }

    .Info {
      display: flex;
      flex-direction: column;
      width: 680px;
      margin-right: 20px;

      .Info-title {
        font-size: 1.5em;
        color: #c30734;
        font-weight: normal;
        margin-bottom: 10px;
      }

      .Info-text {
        font-size: 1.3em;
        color: #4e4e50;
        padding: 10px 10px 10px 0;
        margin-bottom: 16px;
      }
    }
  }

  .Skills-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;

    .Skills-title {
      font-size: 1.5em;
      color: #c30734;
      font-weight: normal;
      margin-bottom: 10px;
    }

    .Skills-list {
      display: flex;
      flex-direction: row;

      .Skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;

        &:last-child {
          margin: 0;
        }

        & > p {
          font-size: 1.3em;
          color: #4e4e50;
          font-weight: normal;
        }

        .Icon {
        width: 50px;
        height: 50px;
        }
      }
    }

    .App-button {
      max-width: 140px;
      min-width: 64px;
      height: 36px;
      padding: 0 16px;
      margin-top: 5%;
      font-size: .875rem;
      font-weight: bold;
      color: #c30734;
      border: 2px solid #c30734;
      border-radius: 4px;
      background-color: #fff;
      cursor: pointer;

      &:hover {
        background-color: #c30734;
        color: #fff;
        transition: 0.5s;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  #App-about {
    padding: 3% 3%;

    .Info-container {

      .Image {
        width: 550px;
        height: auto;
      }
    }
  }
}

@media screen and (max-width: 930px) {
  #App-about {
    padding: 2% 5%;

    .Info-container {
      flex-direction: column;

      .Image {
        width: 500px;
        height: auto;
      }

      .Info {
        width: 90%;
        margin-right: 0;
        margin-bottom: 2%;

        .Info-title {
          margin-bottom: 15px;
        }

        .Info-text {
          font-size: 1.1em;
          padding: 0;
          margin-bottom: 10px;
        }
      }
    }

    .Skills-container {
      margin-top: 1%;

      .Skills-list {
        width: 80%;
        flex-wrap: wrap;

        .Skill {
          justify-content: space-between;
          margin-right: 10px;

          & > p {
            font-size: 1em;
          }

          .Icon {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 540px) {
  #App-about {
    padding: 2% 0;

    .Info-container {
      flex-direction: column;
      padding: 0 10px;

      .Image {
        width: 350px;
        height: auto;
      }

      .Info {
        width: 100%;
        margin-right: 0;
        margin-bottom: 5px;

        .Info-title {
          font-size: 1.2em;
          margin-bottom: 5px;
          text-align: center;
        }

        .Info-text {
          font-size: 0.9em;
          padding: 0;
          margin-bottom: 5px;
        }
      }
    }

    .Skills-container {
      margin-top: 10px;

      .Skills-title {
        font-size: 1.2em;
        margin-bottom: 5px;
      }

      .Skills-list {
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;

        .Skill {
          justify-content: space-between;
          margin-right: 10px;

          & > p {
            font-size: 0.9em;
          }

          .Icon {
            width: 35px;
            height: auto;
          }
        }
      }

      .App-button {
        margin-top: 10px;
      }
    }
  }
}

@media screen and (max-width: 380px) and (max-height: 780px) {
  #App-about {
    padding: 0;

    .Info-container {
      flex-direction: column;
      padding: 0 10px;

      .Image {
        display: none;
      }

      .Info {
        width: 100%;
        margin-right: 0;
        margin-bottom: 0.5em;

        .Info-title {
          font-size: 1.2em;
          margin-bottom: 0.3em;
          text-align: center;
        }

        .Info-text {
          font-size: 0.9em;
          padding: 0;
          margin-bottom: 0.3em;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .Skills-container {
      margin-top: 0;

      .Skills-title {
        font-size: 1.2em;
        margin-bottom: 0.3em;
      }

      .Skills-list {
        justify-content: center;
        width: 100%;
        flex-wrap: wrap;

        .Skill {
          justify-content: space-between;
          margin-right: 0.3em;

          & > p {
            font-size: 0.9em;
          }

          .Icon {
            width: 35px;
            height: auto;
          }
        }
      }

      .App-button {
        margin-top: 0.8em;
      }
    }
  }
}
</style>
