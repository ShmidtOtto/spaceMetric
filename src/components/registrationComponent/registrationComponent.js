import './registrationComponent.css';

function Registration() {
    let test = async function(){
        fetch('http://localhost:3030/rest/auth/registration', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
              },
            method: 'POST',
            mode: "no-cors",
            body: JSON.stringify({
                email: 'testemail',
                password: 'testpassword',
            })
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
    return (
        <div className='registration'>
            <div className='registration__inner'>
                <div className='registration__logo'></div>
                <div className='registration__name'>Имя пользователя</div>
                <div className='registration__password'>Пароль</div>
                <div className='registration__password--checking'>Подтвердить пароль</div>
                <button className='registration__enter' onClick={test}>Зарегистрироваться</button>
            </div>
        </div>
    )
}
export default Registration;