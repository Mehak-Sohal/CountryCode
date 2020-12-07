import React, {useState, useRef, useEffect} from 'react'
import data from './country.json'
import postalCodes from 'postal-codes-js'

//let regExp = "^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z]   [0-9]$"; //A1A1A1
 
const Country = () => {

    const countryCode = useRef("");
    const postalCode = useRef("");
    const [OutPut, setOutPut] = useState("");

    const PostalValidate = (countryCode, PostalCode) => {
      setOutPut("");
      const results = postalCodes.validate(countryCode, PostalCode);
      if (results !== true) {
        setOutPut(results);
        //setOutPut("");
      } else {
        // run your next code
        console.log(results);
      }
    }

    const handleSelect = (e) => {
            setOutPut("");
    }

    return (
        
        <div>
            {/* <form onSubmit={handleSubmit}>
            <h1>country</h1>
            <select defaultValue='Canada' value={codee} onChange={handleSelect}>
                {countries.map(country => (
                    <option key={country} value={country}>{country} </option>
                ))}
            </select>
            <input placeholder='Postal code' onChange={handleInput} />
            <button type='submit'>Submit</button>
            </form>
            {codee === 'UK' ? <h1>You selected UK</h1> : `${codee}`} */}


            {/* <input ref={countryCode} type='text' placeholder='country code' /> */}
            <select defaultValue={data.country['Canada']} ref={countryCode} onChange={handleSelect}>
                {data.map((data) => (
                    <option key={data.country} value={data.code}>{data.country} </option>
                ))}
            </select>
      <input ref={postalCode} type='text' placeholder='postal code' />
      <button
        onClick={() =>
          PostalValidate(countryCode.current.value, postalCode.current.value)
        }
      >
        Validate
      </button>
      <div>{OutPut}</div>
        </div>
    )
}

export default Country