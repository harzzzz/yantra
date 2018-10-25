const AuthService = {
    isLoggedIn: false,
    signIn(cb) {
        this.isLoggedIn = true;
        setTimeout(cb, 100);
    },
    signOut(cb) {
        this.isLoggedIn = false;
        setTimeout(cb, 100);
    }
};

export default AuthService;
