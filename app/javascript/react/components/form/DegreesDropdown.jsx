import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { loadDegrees } from '../../actions/apiActions'
import { selectDegree } from '../../actions/stateActions'

import Select from 'react-select'

const mapStateToProps = (state) => ({
    degrees: state.api.degrees,
    selected: state.state.selected_degree,
    selected_courses: state.state.selected_courses
})

export default connect(mapStateToProps, { loadDegrees, selectDegree })(
    ({ loadDegrees, selectDegree, degrees, selected, selected_courses }) => {

        const [isLoading, setLoading] = useState(true)

        useEffect(() => {
            loadDegrees()
            setLoading(false)
        }, [])

        const changeDegree = (option) => {
            if (
                selected_courses.length == 0 ||
                confirm('Changing degrees will reset all chosen courses. Are you sure?')
            )
                selectDegree(option)
        }

        return (
            <div className="form-field">
                <p>Degree</p>
                <Select
                    options={degrees.map((degree) => ({ value: degree.id, label: degree.name }) )}
                    isSearchable
                    isClearable
                    isLoading={isLoading}
                    isDisabled={isLoading}
                    onChange={changeDegree}
                    value={selected}
                />
            </div>
        )
    }
)