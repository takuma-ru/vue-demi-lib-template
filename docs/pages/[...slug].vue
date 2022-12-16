<template>
  <div class="contents">
    <NavigationDrawer />
    <main>
      <NavigationBar />
      <div class="page">
        <ContentDoc />
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
const {
  color
} = useColorStore()
</script>

<style lang="scss">
.contents {
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  background-color: v-bind("color.theme.background");

  main {
    grid-column: 2;

    display: grid;
    grid-template-columns: auto 1fr;

    .page {
      padding-right: 0.5rem;

      overflow-y: auto;
    }

    h1, h2, h3, h4, p {
      margin: 0px;
    }

    h2, h3, h4 {
      position: relative;
      padding: 0.25em 0px;
      margin: 0.5em 0px;
      &:hover {
        &::before {
          content: '#';
          position: absolute;
          left: -1rem;
          color: v-bind('color.theme.subText');
        }
      }
      a {
        color: v-bind('color.theme.text');
        text-decoration: none;
      }
    }
  }
}
</style>