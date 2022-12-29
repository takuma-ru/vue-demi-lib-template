<template>
  <div
    v-if="isOpenDrawer && displayType === 'sm' && !isCurrentPath('/')"
    class="background"
    @click="updateIsOpenDrawer(false)"
  />
  <transition
    name="transition-nav"
    appear
  >
    <div
      v-if="isOpenDrawer && displayType === 'sm' && !isCurrentPath('/')"
      id="navigationDrawer"
    >
      <div
        class="close-button"
        @click="updateIsOpenDrawer(false)"
      >
        <BaseButton
          is-icon
          icon="chevron_left"
        />
        <span>close</span>
      </div>
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

const colorModeStore = useColorModeStore()

const colorStore = useColorStore()

const {
  updateIsOpenDrawer
} = useNavigationControlStore()

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
#navigationDrawer {
  justify-self: end;

  position: relative;
  width: 200px;
  padding: 2rem;
  padding-right: 3rem;

  overflow-y: auto;
  -webkit-tap-highlight-color:rgba(0,0,0,0);

  .close-button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 0px;
    top: 50%;

    transform: translateY(-50%);
    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color:rgba(0,0,0,0);

    span {
      transform: rotate(-90deg);
      color: v-bind("colorStore.color.theme.subText");
    }
  }

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

.background {
  z-index: 9999;
  position: absolute;
  height: 100%;
  width: 100vw;

  left: calc(200px + 5rem);

  background-color: transparent;
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
