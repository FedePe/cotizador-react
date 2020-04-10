import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const ContenedorHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TestoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TestoHeader>{titulo}</TestoHeader>
        </ContenedorHeader>        
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;