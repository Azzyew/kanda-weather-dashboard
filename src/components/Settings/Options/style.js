import styled from 'styled-components'

const OptionsContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;

    > div {
        width: 100%;
    }
    
    p {
        margin: 4rem 0 .75rem;
    }
`
export default OptionsContainer

export const controlStyles = styles => ({
    ...styles,
    color: 'var(--font-color)',
    background: 'var(--background)',
    border: '1px solid var(--border-color)',
    cursor: 'pointer'
})