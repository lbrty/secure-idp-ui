export default {
  user: state => state.user,

  isAuthenticated: () => localStorage.getItem("token") !== null,
  isAdmin({ user }) {
    const anonymous = {
      is_superuser: false
    };

    return (user || anonymous).is_superuser;
  }
};
