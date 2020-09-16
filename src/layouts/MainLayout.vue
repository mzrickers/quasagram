<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-grey-10"
      bordered
    >
      <q-toolbar class="constrain">
        <q-btn
          to="/camera"
          class="large-screen-only q-mr-sm"
          icon="eva-camera-outline"
          size=18px
          flat
          round
          dense
        />
        <q-separator
          class="large-screen-only"
          spaced
          vertical
        />        
        <q-toolbar-title class="text-grand-hotel text-bold">
          Quasagram
        </q-toolbar-title>
        <q-btn
          to="/"
          class="large-screen-only"
          icon="eva-home-outline"
          size=18px
          flat
          round
          dense
        />   
      </q-toolbar>
    </q-header>

   <q-footer
      class="bg-white"
      bordered
    >
      <div class="banner-container bg-primary">
        <div class="constrain">
          <q-banner
            class="bg-primary text-white"
            inline-actions
            dense
          >
            <template v-slot:avatar>
              <q-avatar
                color="white"
                icon="eva-camera-outline"
                text-color="grey-10"
                font-size="22px"
              />
            </template>
            <b>Install Quasagram?</b>

            <template v-slot:action>
              <q-btn
                label="Yes"
                class="q-px-sm"
                flat
                dense
              />
              <q-btn
                label="Later"
                class="q-px-sm"
                flat
                dense
              />
              <q-btn
                label="Never"
                class="q-px-sm"
                flat
                dense
              />
            </template>
          </q-banner>
        </div>
      </div>
      <q-tabs
        class="text-grey-10 small-screen-only"
        active-color="primary"
        indicator-color="transparent"
      >
        <q-route-tab
          to="/"
          icon="eva-home-outline"
        />
        <q-route-tab
          to="/camera"
          icon="eva-camera-outline"
        />
      </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


export default {
  name: 'MainLayout',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="sass">
  .q-toolbar
    @media (min-width: $breakpoint-sm-min)
      height: 77px

  .q-footer 
    .q-tab__icon 
      font-size: 30px

  .q-toolbar__title
    font-size: 30px
    @media (max-width: $breakpoint-xs-max)
      text-align: center
</style>

