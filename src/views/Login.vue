<template>
  <div class="login">
    <City class="login__bg"/>

    <Form
      ref="loginInfo"
      method="post"
      @submit.native.prevent="onSubmit"
      :model="loginInfo"
      class="login__form">

      <FormItem prop="email">
        <Input
          :placeholder="$t('login.email')"
          type="text"
          size="large"
          v-model="loginInfo.email"/>
      </FormItem>

      <FormItem prop="password">
        <Input
          :placeholder="$t('login.password')"
          type="password"
          size="large"
          v-model="loginInfo.password"/>
      </FormItem>

      <Button
        type="primary"
        html-type="submit"
        size="large"
        class="login__form__submit">

        {{ $t('login.logIn') }}

      </Button>
    </form>
  </div>
</template>

<script>
import City from "@/components/City.vue";

export default {
  name: "Login",

  data() {
    return {
      loginInfo: {
        email: "",
        password: ""
      }
    };
  },

  components: {
    City
  },

  methods: {
    onSubmit() {}
  },

  mounted() {
    // Set body class to `login` so we can
    // set backgroung image in css
    document.body.className = "login";

    // Once mounted makes sense to check
    // if token is valid and if is valid
    // then redirect to on-boarding page.
  },

  beforeDestroy() {
    // Once user authenticates we unset body class
    document.body.className = "";
  }
};
</script>

<style scoped lang="sass">
.login
  width: 28vw
  background: rgba(255, 255, 255, 0.88)
  border-radius: 0.2em
  margin: 18em auto
  padding: 1em

  &__form
    position: fixed
    top: 16em
    left: 20em
    width: 18vw
    background: #fff
    border-radius: 0.2em;
    box-shadow: 0 0 0.5em #ddd
    padding: 1em

    &__submit
      width: 100%
      height: 3.2em
      margin-top: 0.2em

  &__bg
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
</style>
