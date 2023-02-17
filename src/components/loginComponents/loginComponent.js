import './loginComponent.css';
function Login() {
    return (
        <div className='login'>
            <div className='login__inner'>
                <div className='login__logo'></div>
                <div className='login__name'>Имя пользователя</div>
                <div className='login__password'>пароль</div>
                <div className='login__enter'>Войти</div>
            </div>
        </div>
    )
}
export default Login;