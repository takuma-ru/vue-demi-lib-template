<template>
  <div class="contents">
    <NavigationDrawer />
    <main>
      <NavigationBar />
      <div class="page">
        <ContentDoc>
          <template #not-found>
            <div
              :style="{
                backgroundColor: colorStore.color.theme.background,
                width: '100%',
                height: '100%'
              }"
            />
          </template>
        </ContentDoc>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
const colorStore = useColorStore()
const displayStatusStore = useDisplayStatusStore()

</script>

<style lang="scss">
.contents {
  display: grid;
  grid-template-columns: 1fr auto 1fr;

  background-color: v-bind("colorStore.color.theme.background");

  main {
    grid-column: 2;

    display: grid;
    grid-template-columns: auto 1fr;

    .page {
      padding: 2rem v-bind("displayStatusStore.displaySizeMixin({ sm: '1rem', lp: '1rem', pc: '2rem' })");

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
          color: v-bind('colorStore.color.theme.subText');
        }
      }
      a {
        color: v-bind('colorStore.color.theme.text');
        text-decoration: none;
      }
    }
  }
}
</style>