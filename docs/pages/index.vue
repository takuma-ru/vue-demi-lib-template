<template>
  <main id="index">
    <h1 class="title lib">
      vue-swipe-modal
    </h1>
    <h1 class="title feature">
      Modal window that can be swiped to close
    </h1>
    <h1 class="title name">
      takuma-ru
    </h1>
    <div class="buttons">
      <BaseButton
        icon="start"
        to="/get-started/vue2"
      >
        Get Started
      </BaseButton>
      <BaseButton
        outlined
        icon="open_in_new"
        to="https://github.com/takuma-ru"
      >
        View on GitHub
      </BaseButton>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useColorStore } from '~/composables/colorStore';

const {
  color
} = useColorStore()
</script>

<style lang="scss" scoped>
#index {
  display: flex;
  flex-flow: column;

  .title {
    position: relative;

    margin: 36px 0px;

    &::after {
      position: absolute;
      top: -36px;
      left: 0px;

      color: v-bind("color.theme.subText");
      line-height: 36px;
      font-size: 16px;
      font-weight: 400;
    }
  }

  .lib::after {
    content: 'This is';
  }

  .feature::after {
    content: 'Feature is';
  }

  .name::after {
    content: 'Made by';
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    #Button {
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>