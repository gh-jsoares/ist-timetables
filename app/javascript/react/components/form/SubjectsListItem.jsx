import React from 'react'
import Checkbox from './Checkbox'

export default ({ name, href }) => {
    const types = [
        'Laboratories',
        'Theory',
        'Problems',
    ]

    const namify = (name) => {
        return name.split(' ').map((word) => word.split('')[0]).join('').toLowerCase()
    }

    return (
        <li>
            <a href={href}>{name}</a>
            <div className="right">
                { types.map((type, i) => (
                    <Checkbox
                        name={`${namify(name)}-${type.slice(0, 4).toLowerCase()}`}
                        label={type}
                        key={i}
                    />
                )) }
                <button className="danger transparent"><i className="fas fa-times"></i></button>
            </div>
        </li>
    )
}