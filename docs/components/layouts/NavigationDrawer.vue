<template>
  <transition
    name="transition-nav"
    appear
  >
    <div
      v-if="isOpenDrawer && displayType === 'sm' && !isNowPath('/')"
      id="navigationDrawer"
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
              color: isNowPath(path.path) ? colorMode === 'dark' ? color.green.default : color.green.darken[1] : color.theme.subText,
              fontWeight: isNowPath(path.path) ? 'bold' : 'normal',
            }"
            @click="navigateTo(path.path)"
          >
            {{ path.name }}
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const {
  isOpenDrawer
} = useNavigationControlStore()

const {
  displayType
} = displayStatusStore()

const {
  colorMode
} = useColorModeStore()

const {
  color
} = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const {
  pathList,
  isNowPath
} = usePath()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#navigationDrawer {
  justify-self: end;

  width: 200px;
  height: 100%;
  padding: 2rem;
  margin: 0px 1rem 2rem 0px;

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
      }
    }
  }
}

.transition-nav {
    &-enter {
      position: absolute;

      &-from {
        transform: translateX(-100vw);
      }
      &-active {
        transition: all 0.4s cubic-bezier(.25,.8,.25,1);
      }
      &-to {
        transform: translateX(0px);
      }
    }

    &-leave {
      &-from {
        transform: translateX(0vw);
      }
      &-active {
        transition: all 0.4s cubic-bezier(.25,.8,.25,1);
      }
      &-to {
        transform: translateX(-100vw);
      }
    }
  }
</style>
