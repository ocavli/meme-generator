import React from "react";

function Form() {

    const [firstName, setFirstName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [isComputer, setIsComputer] = React.useState(false);
    const [status, setStatus] = React.useState("");
    const [favBrand, setFavBrand] = React.useState("");


    function handleFirstName(event) {
        setFirstName(event.target.value)
    }

    function handleEmail(event) {
        setEmail(event.target.value)
    }

    function handleCheckbox(event) {
        setIsComputer(event.target.checked)
    }


    function handleRadio(event) {
        setStatus(event.target.value);

    }

    function handleSelect(event) {
        setFavBrand(event.target.value);

    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event)

    }

    return (
        <form onSubmit={handleSubmit}>
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

            <input
                type="radio"
                value="fulltime"
                name="fulltime"
                checked={status === "fulltime"}
                onChange={handleRadio}
            />
            <label>Full Time</label>

            <input
                type="radio"
                value="parttime"
                name="parttime"
                checked={status === "parttime"}
                onChange={handleRadio}
            />
            <label>Part Time</label>

            <input
                type="radio"
                value="freelance"
                name="freelance"
                checked={status === "freelance"}
                onChange={handleRadio}
            />
            <label>Freelance</label>

            <label>What is your favorite brand?</label>
            <select
            value={favBrand}
            onChange={handleSelect}
            name="favBrand"
            >
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                <option value="vw">VW</option>
                <option value="opel">Opel</option>
                <option value="toyota">Toyota</option>
            </select>

            <button>Submit</button>

        </form>
    )
}


export default Form;