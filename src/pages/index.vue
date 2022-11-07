<template>
  <div class="home-container">
    <app-header></app-header>
    <div class="home-hero">
      <div class="home-container1">
        <h1 class="home-text">Magnificent things are very simple</h1>
        <span class="home-text1">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span v-html="rawi1vc"></span>
            </span>
            <span><span v-html="rawdwyc"></span></span>
          </span>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span v-html="rawlgbj"></span>
            </span>
            <span><span v-html="rawhs82"></span></span>
          </span>
        </span>
        <div class="home-btn-group">
          <app-button
            button="POST"
            rootClassName="button-root-class-name"
          ></app-button>
          <app-button
            button="GET"
            rootClassName="button-root-class-name"
          ></app-button>
          <app-button
            button="PUT"
            rootClassName="button-root-class-name"
          ></app-button>
          <app-button
            button="DELETE"
            rootClassName="button-root-class-name"
          ></app-button>
        </div>
      </div>
      <div class="home-container2">
        <div class="home-container3"><span class="home-text8">Text</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppButton from '../components/button'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppButton,
  },

  data() {
    return {
      rawi1vc: ' ',
      rawdwyc: ' ',
      rawlgbj: ' ',
      rawhs82: ' ',
    }
  },

  metaInfo: {
    title: 'Vague Whimsical Newt',
    meta: [
      {
        property: 'og:title',
        content: 'Vague Whimsical Newt',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-hero {
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  max-width: var(--dl-size-size-maxwidth);
  min-height: 80vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-container1 {
  width: 50%;
  display: flex;
  margin-right: var(--dl-space-space-threeunits);
  padding-right: 0px;
  flex-direction: column;
}
.home-text {
  color: var(--dl-color-primary-100);
  font-size: 3rem;
  max-width: 450px;
  align-self: center;
  text-align: center;
}
.home-text1 {
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-btn-group {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
}
.home-container2 {
  width: 50%;
  height: 577px;
  display: flex;
  align-items: flex-start;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-left: var(--dl-space-space-oneandhalfunits);
  padding-right: var(--dl-space-space-oneandhalfunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: flex-start;
}
.home-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-oneandhalfunits);
  align-items: center;
  border-color: var(--dl-color-gray-500);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
  justify-content: center;
}
.home-text8 {
  width: 100%;
  height: 100%;
}
@media(max-width: 991px) {
  .home-hero {
    flex-direction: column;
  }
  .home-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .home-text {
    text-align: center;
  }
  .home-text1 {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .home-hero {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-text1 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .home-hero {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-btn-group {
    flex-direction: column;
  }
}
</style>
