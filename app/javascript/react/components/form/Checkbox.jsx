import React from 'react'

export default ({name, label, checked, onCheck}) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id={name} checked={checked} onChange={onCheck} />
            <label htmlFor={name}>{label}</label>
        </div>
    )
}