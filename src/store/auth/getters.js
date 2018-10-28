export default {
  user: state => state.user,

  isAuthenticated: ({ user }) => {
    return user !== null || localStorage.getItem("token") !== null;
  },

  isAdmin({ user }) {
    const anonymous = {
      isSuperuser: false
    };

    return (user || anonymous).isSuperuser;
  }
};
