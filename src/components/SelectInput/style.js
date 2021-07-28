export const controlStyles = (styles, { isDisabled }) => ({
    ...styles,
    width: '250px',
    color: 'var(--font-color)',
    background: 'var(--background)',
    border: '1px solid var(--border-color)',
    opacity: isDisabled ? .6 : 1,
    cursor: 'pointer',
    '@media(max-width: 768px)': {
        width: '35vw'
    },
    '@media(max-width: 600px)': {
        width: '43vw'
    }
})

export const menuStyles = styles => ({
    ...styles,
    marginTop: '4px',
    background: 'var(--background)',
    border: '1px solid var(--border-color)'
})

export const optionStyles = styles => ({
    ...styles,
    background: 'var(--background)',
    color: 'var(--font-color)',
    cursor: 'pointer',
    transition: 'background .2s',
    ':hover ': {
        background: 'var(--body-background)',
    }
})

export const valueStyles = styles => ({
    ...styles,
    color: 'var(--font-color)',
})

export const inputStyles = styles => ({
    ...styles,
    color: 'var(--font-color)',
})