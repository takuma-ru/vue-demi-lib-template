<template>
  <div
    v-if="displayType === 'lp' || displayType === 'pc'"
    id="navigationBar"
  >
    <div
      v-for="sectionData in pathList"
      :key="sectionData.title"
      class="section"
    >
      <Icon
        :icon="sectionData.icon"
        class="section-icon"
      />
      <p class="sction-title">
        {{ sectionData.title }}
      </p>
      <div class="paths">
        <a
          v-for="path in sectionData.paths"
          :key="path.name"
          :style="{
            color: isCurrentPath(path.path) ? colorModeStore.colorMode === 'dark' ? colorStore.color.green.default : colorStore.color.green.darken[1] : colorStore.color.theme.subText,
            fontWeight: isCurrentPath(path.path) ? 'bold' : 'normal',
          }"
          @click="navigateTo(path.path)"
        >
          {{ path.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorModeStore = useColorModeStore()

const colorStore = useColorStore()

const {
  displayType
} = displayStatusStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const {
  pathList,
  isCurrentPath
} = usePath()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#navigationBar {
  justify-self: end;

  width: 200px;
  height: calc(100% - 3rem);
  margin: 2rem 1rem 2rem 1rem;

  -webkit-tap-highlight-color:rgba(0,0,0,0);
  overflow-y: auto;

  .section {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;

    margin-bottom: 1rem;

    .section-icon {
      grid-column: 1;
      grid-row: 1;

      margin-right: 0.5rem;
    }

    .sction-title {
      grid-column: 2;
      grid-row: 1;

      margin: 0 0 0.5rem 0;

      font-weight: bold;
    }

    .paths {
      grid-column: 2;
      grid-row: 2;

      display: flex;
      flex-flow: column;

      a {
        display: inline-block;

        position: relative;
        margin: 0 0 0.5rem 0;

        text-decoration: none;
        cursor: pointer;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -4px;
          left: 0;

          background: v-bind("colorStore.color.green.default");
          border-radius: 1px;
          transform: scale(0, 1);
          transform-origin: left top;
          transition: transform .3s;
        }

        &:hover::after {
          transform: scale(1, 1);
        }
      }
    }
  }
}
</style>
