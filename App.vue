<template>
  <div>
    <AppIntro :scroll-to-section-prop="scrollToSection" />
    <AppNavigation />
    <AppAbout :scroll-to-section-prop="scrollToSection" />
    <AppContact :scroll-to-section-prop="scrollToSection" />
  </div>
</template>

<script>
import AppIntro from '~/components/AppIntro.vue'
import AppNavigation from '~/components/AppNavigation.vue'
import AppAbout from '~/components/AppAbout.vue'
import AppContact from '~/components/AppContact.vue'

export default {
  components: { AppIntro, AppNavigation, AppAbout, AppContact },
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
@import '@/assets/styles/Main.scss';
@import '@/assets/styles/Reset.scss';
</style>
