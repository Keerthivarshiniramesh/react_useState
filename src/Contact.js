import { useState } from "react"

function Contact() {

    const [username, setUsername] = useState('testname')
    const [password, setPassword] = useState('')



    return (
        <form>
            <p>Entered Username: {username} && Password: {password}</p>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="enter username" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="enter password" />

        </form>
    )

}

export default Contact