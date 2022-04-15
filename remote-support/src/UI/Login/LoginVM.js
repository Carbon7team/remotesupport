class LoginVM{

    constructor(rootstore, username, password){
        this.rootstore = rootstore;
        this.username = username;
        this.password = password;
    }

    handleSubmit = async e => {
        e.preventDefault();
        const token = await loginFetch({username, password});
        setToken(token);
      }

    async loginFetch(credentials) {
        return fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
      }
}

export default LoginVM;