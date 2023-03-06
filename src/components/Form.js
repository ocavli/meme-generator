import React from "react";

function Form() {

    const [firstName, setFirstName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [isComputer, setIsComputer] = React.useState(false);

    function handleFirstName(event) {
        setFirstName(event.target.value)
    }

    function handleEmail(event) {
        setEmail(event.target.value)
    }
    
    function handleCheckbox(event) {
        setIsComputer(event.target.checked)
    }



    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstName}

            />
            <input
                type="email"
                placeholder="max@musterman.com"
                value={email}
                onChange={handleEmail}

            />
            <input
                type="checkbox"
                placeholder="max@musterman.com"
                checked={isComputer}
                onChange={handleCheckbox}

            />
        </form>
    )
}


export default Form;