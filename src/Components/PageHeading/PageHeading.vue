<template>
  <div class="shadow-2 border-round p-5">
    <ul class="list-none p-0 m-0 flex align-items-center font-medium mb-3">
      <li>
        <a class="text-500 no-underline line-height-3 cursor-pointer">Redmine</a>
      </li>
      <li class="px-2">
        <i class="pi pi-angle-right text-500 line-height-3"></i>
      </li>
      <li>
        <span class="text-900 line-height-3">Аналитика</span>
      </li>
    </ul>
    <div class="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
      <div>
        <div class="font-medium text-3xl text-900">Статистика</div>
        <div class="flex align-items-center text-700 flex-wrap">
          <div class="mr-5 flex align-items-center mt-3">
            <i class="pi pi-users mr-2"></i>
            <span>332 Проектов</span>
          </div>
          <div class="mr-5 flex align-items-center mt-3">
            <i class="pi pi-globe mr-2"></i>
            <span>9402 Задач</span>
          </div>
          <div class="flex align-items-center mt-3">
            <i class="pi pi-clock mr-2"></i>
            <span>23231 Часов</span>
          </div>
        </div>
      </div>
      <div class="mt-3 lg:mt-0">
        <ButtonPrime label="Добавить" class="p-button-outlined mr-2"
                     icon="pi pi-user-plus"></ButtonPrime>
        <ButtonPrime label="Сохранить" icon="pi pi-check"></ButtonPrime>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeading'
}
</script>

<style scoped>

</style>
