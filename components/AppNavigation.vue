<template>
  <div class="AppNavigation">
    <div class="Navigation-container" :class="{ 'Navigation-opened': isMenuOpened }">
      <ul class="Navigation">
        <a @click.prevent="scrollToSection('App-intro')"><li>Home</li></a>
        <a @click.prevent="scrollToSection('App-about')"><li>About</li></a>
        <a @click.prevent="scrollToSection('App-contact')"><li>Contact</li></a>
      </ul>
    </div>
    <button class="Menu" :class="{ 'Menu-opened': isMenuOpened }" @click="toggleMenu">
      <div class="Menu-line Menu-line-one" />
      <div class="Menu-line Menu-line-two" />
      <div class="Menu-line Menu-line-three" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation',
  data () {
    return {
      isMenuOpened: false
    }
  },
  watch: {
    $route (to) {
      if (to.hash) {
        const element = document.querySelector(to.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuOpened = !this.isMenuOpened
    },
    scrollToSection (sectionId) {
      document.querySelector('#' + sectionId).scrollIntoView({
        behavior: 'smooth'
      })
      this.toggleMenu()
    }
  }
}
</script>

<style lang="scss">
.AppNavigation {
  position: fixed;
  top: 50px;
  left: 50px;
  z-index: 1;

  .Navigation-container {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 45px;
    padding-top: 150px;
    height: 200vh;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

    .Navigation {
      list-style-type: none;
      margin: 0;

      & > a {
        color: #232323;
      }

      li {
        font-size: 22px;
        padding: 10px;
        cursor: pointer;
        transition: background 0.2s ease-in-out;

        &:hover {
        background: #a3a3a3;
        }
      }
    }
  }

  .Navigation-opened {
    transform: translate(0, 0);
  }

  .Menu {
    appearance: none;
    outline: none;
    background: transparent;
    border: none;
    padding: 0;
    width: 33px;
    height: 22px;
    position: absolute;
    cursor: pointer;

    .Menu-line {
      width: 100%;
      height: 4px;
      background: #950740;
      border-radius: 2px;
      position: absolute;
    }

    .Menu-line-one {
      top: 0;
      transition: .2s top .2s, .2s transform;
    }

    .Menu-line-two {
      top: 50%;
      transform: translate3d(0, -50%, 0);
      transition: .2s opacity .2s;
    }

    .Menu-line-three {
        bottom: 0;
        transition: .2s bottom .2s, .2s transform;
    }
  }

  .Menu-opened {

    .Menu-line-one {
      top: calc(50% - 2px);
      transform: rotate(45deg);
      transition: .2s top, .2s transform .2s;
      background: #1a1a1d;
    }

    .Menu-line-two {
      opacity: 0;
      transition: .2s opacity;
    }

    .Menu-line-three {
      bottom: calc(50% - 2px);
      transform: rotate(-45deg);
      transition: .2s bottom, .2s transform .2s;
      background: #1a1a1d;
    }
  }
}

@media screen and (max-width: 930px) {
  .AppNavigation {
    top: 30px;
    left: 30px;
  }
}

@media screen and (max-width: 540px) {
  .AppNavigation {
    top: 15px;
    left: 15px;
  }
}

@media screen and (max-width: 480px) and (max-height: 780px) {
  .AppNavigation {
    top: 15px;
    left: 15px;

    .Menu {
      width: 28px;
      height: 20px;
    }
  }
}
</style>
