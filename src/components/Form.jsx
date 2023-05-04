import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [age, setAge] = useState("")
    const [image, setImage] = useState("")

    let [listOfPets, setListOfPets] = useState([])

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
                    <input onChange={(event) => setName(event.target.value)} type="text" className='form-label' />
                </div>
                <div className="form-group">
                    <label>Pet Type:</label>
                    <input onChange={(event) => setType(event.target.value)} type="text" className='form-label' />
                </div>
                <div className="form-group">
                    <label>Pet Age:</label>
                    <input onChange={(event) => setAge(event.target.value)} type="text" className='form-label' />
                </div>
                <div className="form-group">
                    <label>Pet Image:</label>
                    <input onChange={(event) => setImage(event.target.value)} type="text" className='form-label' />
                </div>
                <button className='btn btn-outline-success mt-3' type='submit'>Sumbit Pet</button>
            </form>
            <hr />
            <div>
                {
                    listOfPets.map((pet, idx) => {
                        return (
                            <div key={idx}>
                                {/* <h1>This is the index value {idx}</h1> */}
                                <p>Pet Name: {pet.name}</p>
                                <p>Pet Type: {pet.type}</p>
                                <p>Pet Age: {pet.age}</p>
                                <img src={pet.image} alt="pet" height="200px"></img>
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