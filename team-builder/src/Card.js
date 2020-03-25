import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
max-width: 25%;
height: auto;
padding: 2% 2%;
background-color: grey;
border-radius: 3px;
box-sizing: border-box;
margin: 20px 0;
`

export default function Card(props){
    return(
        <Square>
            <h1>🐐</h1>
            <h1>{props.fname} {props.lname}</h1>
            <h2>{props.role}</h2>
            <h3>{props.email}</h3>
        </Square>
    )
}