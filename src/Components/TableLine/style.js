import styled from 'styled-components'

export const Container = styled.tr`
transition: all .5s ease-in-out;

    :hover {
        background-color: #e91c5d;
    }

    :last-child {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
`