export default {
  name: "ErrorBoundary",

  data() {
    return {
      error: null
    };
  },

  errorCaptured(err, vm, info) {
    this.error = err;
  },

  render(h) {
    if (this.error) {
      let msg = this.$t("errorMessages.common");
      if (this.error.customMessage) {
        msg = this.error.message;
      }

      return h(
        "Card",

        {
          attrs: {
            style: "width: 320px; margin: 0 auto"
          }
        },

        msg
      );
    }

    return this.$slots.default[0];
  }
};
