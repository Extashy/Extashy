<template>
  <div class="App-links">
    <h3 class="Links-title">
      MY SOCIALS / CV
    </h3>
    <div class="Links-container">
      <div class="Links-icon-container">
        <a href="https://t.me/Extashy" target="_blank" rel="noopener noreferrer nofollow">
          <img class="Links-icon" src="@/assets/images/Telegram.png" alt="My Telegram">
        </a>
        <p class="Links-icon-title">
          Telegram
        </p>
      </div>
      <div class="Links-icon-container">
        <a href="https://github.com/Extashy">
          <img class="Links-icon" src="@/assets/images/GitHub.png" alt="My GitHub">
        </a>
        <p class="Links-icon-title">
          GitHub
        </p>
      </div>
      <div class="Links-icon-container">
        <a href="https://novorossiysk.hh.ru/resume_converter/Pokatilo%20Dmitriy.pdf?hash=64d5e876ff0b9716750039ed1f4f356b676e63&type=pdf&hhtmSource=resume&hhtmFrom=resume_list">
          <img class="Links-icon" src="@/assets/images/CV.png" alt="My CV">
        </a>
        <p class="Links-icon-title">
          CV (Eng)
        </p>
      </div>
      <div class="Links-icon-container">
        <a href="https://novorossiysk.hh.ru/resume_converter/%D0%9F%D0%BE%D0%BA%D0%B0%D1%82%D0%B8%D0%BB%D0%BE%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9.pdf?hash=0f507a02ff0b98a5b50039ed1f62303430456a&type=pdf&hhtmSource=resume&hhtmFrom=resume_list">
          <img class="Links-icon" src="@/assets/images/CV.png" alt="My CV">
        </a>
        <p class="Links-icon-title">
          CV (Rus)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLinks'
}
</script>

<style lang="scss">
.App-links {
    display: flex;
    flex-direction: column;
    margin-top: 45px;

  .Links-title {
    font-size: 1.5em;
    color: #950740;
    font-weight: normal;
    margin-bottom: 15px;
  }

  .Links-container {
    display: flex;
    flex-direction: row;

    .Links-icon-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      .Links-icon {
        width: 69px;
        height: auto;
      }

      .Links-icon-title{
        font-size: 1em;
        color: #4e4e50;
        font-weight: normal;
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .App-links {

    .Links-container {

      .Links-icon-container {
        margin-right: 0.9rem;

        .Links-icon {
          width: 68px;
          height: auto;
        }
      }
    }
  }
}

@media screen and (max-width: 930px) {
  .App-links {
    margin-top: 25px;

    .Links-title {
      margin-bottom: 10px;
    }

    .Links-container {
      flex-wrap: wrap;

      .Links-icon-container {
        margin-right: 0.9rem;

        .Links-icon {
          width: 60px;
          height: 60px;
        }

        .Links-icon-title {
          font-size: 1.1em;
        }
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .App-links {
    margin-top: 15px;

    .Links-title {
      font-size: 1.2em;
      margin-bottom: 5px;
    }

    .Links-container {
      flex-wrap: wrap;

      .Links-icon-container {
        margin-right: 10px;

        .Links-icon {
          width: 50px;
          height: 50px;
        }

        .Links-icon-title {
          font-size: 0.9em;
        }
      }
    }
  }
}

@media screen and (max-width: 380px) and (max-height: 780px) {
  .App-links {
    margin-top: 0.3em;

    .Links-title {
      font-size: 1.2em;
      margin-bottom: 5px;
    }

    .Links-container {
      flex-wrap: wrap;

      .Links-icon-container {
        margin-right: 0.2em;

        .Links-icon {
          width: 60px;
          height: 60px;
        }

        .Links-icon-title {
          font-size: 0.9em;
        }
      }
    }
  }
}
</style>
