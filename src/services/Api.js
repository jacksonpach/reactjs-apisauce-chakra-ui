import { create } from 'apisauce'

const api = create({
    baseURL: 'https://reqres.in',
})

const Login = async ({ email, password }) => {
    try {
        const par = {
            email: email,
            password: password
        }
        return await api.post('/api/login', par)
    }
    catch (e) {
        console.log(e)
    }
};
export default Login;