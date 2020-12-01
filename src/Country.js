import React, {useState, useEffect} from 'react'
import { countries } from './data.json'
 
const Country = () => {

    const [code, setCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        if (countrySelected === 'Canada') {
            let regExp = "^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]$";
            if (code.match(regExp) && code.length === 6) {
                setCode({code: code});
            }
    }
}

    const handleSelect = e => {
        let countrySelected = e.target.value;
        if (countrySelected === 'Canada') {
            let regExp = "^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]$";
            if (code.match(regExp) && code.length === 6) {
                setCode({code: code});
            }
            console.log('you selected Canada')
        } else {
            console.log(countrySelected);
        }
    }

    return (
        
        <div>
            <h1>country</h1>
            <select defaultValue='Canada'  onChange={handleSelect}>
                {countries.map(country => (
                    <option key={country} value={country}>{country} </option>
                ))}
            </select>
            <input placeholder='Postal code' value={code} onChange={e => setCode(e.target.value)} />
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Country
