export default {
  user: state => state.user,
  token: state => state.token,

  isAuthenticated: ({ user, token }) => {
    return user !== null || token !== null;
  },

  isAdmin({ user }) {
    const anonymous = {
      isSuperuser: false
    };

    return (user || anonymous).isSuperuser;
  }
};
