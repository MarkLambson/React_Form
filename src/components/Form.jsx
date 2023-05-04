import React, { useState } from 'react'

    const lightmode = {
        backgroundColor: "white",
        color: "black",
        padding: "10px"
    }

    const darkmode = {
        backgroundColor: "black",
        color: "white",
        padding: "10px"
    }

const Form = () => {
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("");
    const [type, setType] = useState("")
    const [typeError, setTypeError] = useState("");
    const [age, setAge] = useState("")
    const [ageError, setAgeError] = useState("");
    const [image, setImage] = useState("")
    const [imageError, setImageError] = useState("");

    let [listOfPets, setListOfPets] = useState([])

    const [light, setLight] = useState(true)
    const lightSwitch = () => setLight(!light)

    const handleName = (event) => {
        setName(event.target.value);
        if (event.target.value.length < 1) {
            setNameError("Name is required!");
        } else if (event.target.value.length < 2) {
            setNameError("Name must be 2 characters or longer!");
        } else {
            setNameError("");
        }
    }

    const handleType = (event) => {
        setType(event.target.value);
        if (event.target.value.length < 1) {
            setTypeError("Type is required!");
        } else if (event.target.value.length < 2) {
            setTypeError("Type must be 2 characters or longer!");
        } else {
            setTypeError("");
        }
    }

    const handleAge = (event) => {
        setAge(event.target.value);
        if (event.target.value.length < 1) {
            setAgeError("Age is required!");
        } else {
            setAgeError("");
        }
    }

    const handleImage = (event) => {
        setImage(event.target.value);
        if (event.target.value.length < 1) {
            setImageError("Image is required!");
        } else if (event.target.value.length < 3) {
            setImageError("Image must be 3 characters or longer!");
        } else {
            setImageError("");
        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("Form Submitted", name, type, age, image)
        let petObj = { name, type, age, image }
        setListOfPets([...listOfPets, petObj])
    }

    return (
        <div>
            <h2>Please, fill out the form to show off your pet!</h2>
            <hr />
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Pet Name:</label>
                    {/* <input onChange={(event) => setName(event.target.value)} type="text" className='form-label' /> */}
                    <input onChange={handleName} type="text" className='form-label' />
                    {nameError ? <p>{nameError}</p> : ''}
                </div>
                <div className="form-group">
                    <label>Pet Type:</label>
                    {/* <input onChange={(event) => setType(event.target.value)} type="text" className='form-label' /> */}
                    <input onChange={handleType} type="text" className='form-label' />
                    {typeError ? <p>{typeError}</p> : ''}
                </div>
                <div className="form-group">
                    <label>Pet Age:</label>
                    {/* <input onChange={(event) => setAge(event.target.value)} type="text" className='form-label' /> */}
                    <input onChange={handleAge} type="text" className='form-label' />
                    {ageError ? <p>{ageError}</p> : ''}
                </div>
                <div className="form-group">
                    <label>Pet Image:</label>
                    {/* <input onChange={(event) => setImage(event.target.value)} type="text" className='form-label' /> */}
                    <input onChange={handleImage} type="text" className='form-label' />
                    {imageError ? <p>{imageError}</p> : ''}
                </div>
                <button className='btn btn-outline-success mt-3' type='submit'>Sumbit Pet</button>
            </form>
            <hr />
            <div>
                {
                    listOfPets.map((pet, idx) => {
                        return (
                            <div key={idx} style={light ? lightmode : darkmode}>
                                {/* <h1>This is the index value {idx}</h1> */}
                                <p>Pet Name: {pet.name}</p>
                                <p>Pet Type: {pet.type}</p>
                                <p>Pet Age: {pet.age}</p>
                                <img src={pet.image} alt="pet" height="200px"></img>
                                <br></br>
                                <button onClick={lightSwitch} className='btn btn-outline-warning mt-3'>{light ? "Off" : "On"}</button>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form