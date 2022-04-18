class LoginVM{

    constructor(rootstore, username, password){
        this.rootstore = rootstore;
        this.username = username;
        this.password = password;
    }

    async loginFetch(username , password) {
      var credentials = {username, password}
        return fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
      }

    handleSubmit = async e => {
        e.preventDefault();
        // eslint-disable-next-line
        const token = await loginFetch(this.username, this.password);
      }
}

export default LoginVM;