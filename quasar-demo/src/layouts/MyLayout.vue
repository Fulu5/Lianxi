<template>
  <q-layout view="lHh Lpr fFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar class="flex">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat class="col text-black" :ripple="false" to="/">
          <q-icon
            size="2.5em"
            right
            name="img:https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
          />
          <div>北京精雕集团</div>
        </q-btn>

        <q-btn flat icon="info" @click="onClick1" :ripple="false" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/about" exact>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/about"> </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style scroped>
.q-avatar img {
  width: 50px;
  height: 50px;
}
</style>
