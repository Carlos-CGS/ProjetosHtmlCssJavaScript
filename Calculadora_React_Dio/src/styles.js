import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #222222;

    display: flex;
    align-items: center;
    justify-content: center;

    
`


export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    border-radius: 15px; 
    padding: 10px;  
    box-shadow: 0 4px 10px rgba(200, 200, 200, 0.5);
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

