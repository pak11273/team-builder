import React from 'react'
import styled from 'styled-components'

const Style = styled.div` 
    background-color: blue;
`
export default function Form() {
    return (
        <>
        <Style></Style>
        <form>
            <fieldset>
                <legend>Add a Team Member</legend>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" type="text"/>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="text"/>
                <label htmlFor="role">Role:</label>
                <input id="role" name="role" type="text"/>
                <button>Submit</button>
            </fieldset>
        </form>
        </>
    )
}
