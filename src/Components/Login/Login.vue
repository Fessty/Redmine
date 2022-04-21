<template>
  <div class="flex justify-content-center mt-5">
    <div class="surface-card  p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Добро пожаловать!</div>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Логин</label>
        <InputText id="email1" v-model="login" type="text" class="w-full mb-3"/>

        <label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
        <InputText id="password1" v-model="password" type="password" class="w-full mb-3"/>

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <CheckboxPrime id="remember" :binary="true" v-model="checked"
                           class="mr-2"></CheckboxPrime>
            <label for="remember">Запомнить меня</label>
          </div>
          <a
            class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Восстановить
            пароль
          </a>
        </div>

        <ButtonPrime label="Вход" @click="logIn" icon="pi pi-user" class="w-full"></ButtonPrime>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginPrime',
  data () {
    return {
      checked: false,
      login: '',
      password: ''
    }
  },
  methods: {
    async logIn () {
      // const auth = {
      // https://red.coddit.ru/login
      // https://red.coddit.ru/my/account.json?key=d4e4e741a60a7a0c6e8afd81e081b9b47fa00e5c
      //   username: this.login,
      //   password: this.password
      // }
      await
      axios.get('https://andreev_r:89602285130@red.coddit.ru/my/account.json')
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>

</style>
