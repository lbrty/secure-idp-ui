export default {
  user: state => state.user,

  isAuthenticated: () => localStorage.getItem("token") !== null,
  isAdmin({ user }) {
    const anonymous = {
      isSuperuser: false
    };

    return (user || anonymous).isSuperuser;
  }
};
