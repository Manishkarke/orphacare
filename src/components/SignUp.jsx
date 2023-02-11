import React, { useRef } from 'react'

function SignUp() {
    const userNameRef = useRef();
    const userAddresss = useRef();
    const userEmailRef = useRef();
    const phoneNumberRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
  return (
    <section className='signup-container'>
        <h2>Register</h2>
        <form>
            <div className="inputfield">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" ref={userNameRef} />
            </div>
        </form>
    </section>
  )
}

export default SignUp