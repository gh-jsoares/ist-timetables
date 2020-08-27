import React from 'react'

export default ({ onSubmit }) => {
    return (
        <div className="form-submit">
            <button onClick={onSubmit} type="submit">Submit</button>
        </div>
    )
}