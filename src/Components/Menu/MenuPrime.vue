<template>
  <NavbarPrime :model="items"></NavbarPrime>
</template>

<script>
export default {
  name: 'MenuPrime',
  data () {
    return {
      items: [
        {
          label: 'Главная',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Логин',
          icon: 'pi pi-fw pi-user',
          to: '/login'
        },
        {
          label: 'Мои задачи',
          icon: 'pi pi-list'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
