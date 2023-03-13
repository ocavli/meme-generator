import React from "react";
import "../styles/Signup.css"


function Signup() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");
    const [isNewsletter, setNewsletter] = React.useState(false);






    function handleEmail(event) {
        setEmail(event.target.value)
    }

    function handlePassword(event) {
        setPassword(event.target.value)
    }
    function handlePasswordConfirm(event) {
        setPasswordConfirm(event.target.value)
    }
    function handleNewsletter(event) {
        setNewsletter(event.target.checked)
    }

    function handleSubmit(event) {

        if (password === passwordConfirm) {
            event.preventDefault();
            alert('Sifre kaydedildi')
        }else(
            alert("Parola ayni degil. lütfen tekrar deneyin")
        )


    }

    return (
        <>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="form--input"
                        value={email}
                        onChange={handleEmail}
                        name="email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="form--input"
                        value={password}
                        onChange={handlePassword}
                        name="password"
                    />
                    <input
                        type="password"
                        placeholder="Password Confirm"
                        className="form--input"
                        value={passwordConfirm}
                        onChange={handlePasswordConfirm}
                        name="password confirm"
                    />
                    <input
                        type="checkbox"
                        placeholder="newslatter"
                        checked={isNewsletter}
                        onChange={handleNewsletter}

                    />
                    <label>I want to join newsletter</label>

                    <button className="form--submit" >Submit</button>

                </form>

            </div>
        </>
    )
}

export default Signup;