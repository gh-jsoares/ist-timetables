import React from 'react'
import { connect } from 'react-redux'

import { checkCourseType } from '../../actions/stateActions'

import Checkbox from './Checkbox'

const mapType = (type) => {
    let name

    switch (type.name) {
        case 'TEORICA':
            name = 'Theory'
            break
        case 'LABORATORIAL':
            name = 'Laboratorials'
            break
        default:
            name = 'Problems'
            break
    }

    return {
        ...type,
        id: type.name,
        name: name
    }
}

export default connect(null, { checkCourseType })(
    ({ course, href, onRemove, checkCourseType }) => {

        const mappedTypes = course.types.map((type) => mapType(type))

        const namify = (name) => {
            return name.split(' ').map((word) => word.split('')[0]).join('').toLowerCase()
        }

        return (
            <li>
                <a href={href}>{course.name}</a>
                <div className="right">
                    { mappedTypes.map((type, i) => (
                        <Checkbox
                            name={`${namify(course.name)}-${type.id}`}
                            label={type.name}
                            key={type.id}
                            checked={type.checked}
                            onCheck={(event) => checkCourseType(course, type.id, event.target.checked)}
                        />
                    )) }
                    <button onClick={onRemove} className="danger transparent"><i className="fas fa-times"></i></button>
                </div>
            </li>
        )
    }
)