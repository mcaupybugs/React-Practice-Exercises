import React, {useState} from 'react';

const Card = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) =>{
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }

    const LoginClicked = () =>{
        alert('The username is ' + username + '\n' + 'The password is ' + password)
    }

    const RegisterClicked = () => {
        alert('Register button is clicked')
    }

    return (
        <div className='flex rounded-md shadow-md h-60 w-80'>
            <div className='p-10'>
                <p className='text-left font-bold'>Username</p>
                <input className="items-start pt-2 outline-none w-full underline-offset-1 focus:border-b border-black" value={username} onChange={handleUsernameChange} type="text" placeholder='Enter Username'/>
                <p className='text-left font-bold pt-4'>Password</p>
                <input type="text" className='items-start pt-2 outline-none w-full underline-offset-1 focus:border-b border-black' value={password} onChange={handlePasswordChange} placeholder='Enter Password' />
                <div className='flex flex-row pt-4 justify-between w-full gap-2'>
                    <button className='bg-violet-700 w-28 h-10 text-white rounded-md' onClick={LoginClicked}>Login</button>
                    <button className='bg-violet-700 w-28 h-10 text-white rounded-md' onClick={RegisterClicked}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Card;