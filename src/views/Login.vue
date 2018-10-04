<template>
  <div class="login">
    <City class="login__bg"/>

    <Form
      ref="loginInfo"
      method="post"
      @submit.native.prevent="onSubmit"
      :model="loginInfo"
      :rules="rules"
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

      <FormItem
        v-if="showCodeInput"
        prop="code">

        <Input
          :placeholder="$t('login.code')"
          type="text"
          size="large"
          v-model="loginInfo.code"/>

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
import { mapActions } from "vuex";
import loginValidator from "@/forms/rules/login";
import City from "@/components/City.vue";

export default {
  name: "Login",

  data() {
    return {
      loginInfo: {
        email: "",
        password: "",
        code: ""
      },

      rules: loginValidator,
      showCodeInput: false
    };
  },

  components: {
    City
  },

  methods: {
    onSubmit() {
      this.$refs["loginInfo"].validate(valid => {
        if (valid) {
          this.login({
            loginInfo: this.loginInfo,
            cb: this.handleLogin
          });
        } else {
          this.$Message.error(this.$t("login.invalidLogin"));
        }
      });
    },

    handleLogin(response, err) {
      if (!err) {
        this.$router.push({ name: "home" });
      } else {
        this.$Message.error(err.message);
      }
    },

    ...mapActions("auth", ["login"])
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
  background: rgba(255, 255, 255, 0.88)

  &__form
    position: fixed
    top: 16em
    left: 18em
    width: 26vw
    background: #fff
    border-radius: 0.2em
    border: 1px solid #eee
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
