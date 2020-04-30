import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountry = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchCountry();
    }, [setFetchedCountries])

    console.log(fetchedCountries);

    return (
        <FormControl className={styles.formformControl}>
            <NativeSelect defaultValue="" onChange={event => handleCountryChange(event.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((country, i) => (
                    <option key={i} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;