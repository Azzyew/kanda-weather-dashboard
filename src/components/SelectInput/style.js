export const controlStyles = (styles, { isDisabled }) => ({
    ...styles,
    width: '250px',
    background: 'var(--background)',
    border: '1px solid var(--border-color)',
    opacity: isDisabled ? .6 : 1,
    cursor: 'pointer'
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