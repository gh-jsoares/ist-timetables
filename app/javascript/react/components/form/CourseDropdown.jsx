import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export default () => {
    return (
        <div className="form-field">
            <p>Course</p>
            <Select
                options={options}
                isSearchable
                isClearable
                isLoading
            />
        </div>
    )
}