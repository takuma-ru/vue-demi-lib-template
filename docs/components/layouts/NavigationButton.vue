<template>
  <div
    v-if="displayType === 'sm' && !isNowPath('/')"
    id="navigationButton"
  >
    <BaseButton
      is-icon
      :icon="isOpenDrawer ? 'close' : 'menu'"
      @click="switchIsOpenDrawer"
    />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const {
  displayType
} = displayStatusStore()

const {
  isOpenDrawer,
  switchIsOpenDrawer
} = useNavigationControlStore()

const {
  isNowPath
} = usePath()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */


/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#navigationButton {

}
</style>
