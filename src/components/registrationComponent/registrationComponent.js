import './registrationComponent.css';
function Registration() {
    return (
        <div className='registration'>
            <div className='registration__inner'>
                <div className='registration__logo'></div>
                <div className='registration__name'>Имя пользователя</div>
                <div className='registration__password'>Пароль</div>
                <div className='registration__password--checking'>Подтвердить пароль</div>
                <div className='registration__enter'>Зарегистрироваться</div>
            </div>
        </div>
    )
}
export default Registration;