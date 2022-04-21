<template>
  <MenuPrime></MenuPrime>
  <div class="p-card mt-4">
    <PageHeading></PageHeading>
  </div>

  <div class="justify-content-center flex mt-4">
    <router-view></router-view>
  </div>
</template>

<script>
import MenuPrime from '@/Components/Menu/MenuPrime'
import PageHeading from '@/Components/PageHeading/PageHeading'

export default {
  name: 'PageTemplate',
  components: { PageHeading, MenuPrime }
}
</script>

<style scoped>

</style>
