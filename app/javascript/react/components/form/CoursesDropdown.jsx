import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { loadCourses, loadCourse } from '../../actions/apiActions'
import { resetCourses } from '../../actions/stateActions'

import Select from 'react-select'

const mapStateToProps = (state) => ({
    courses: state.api.courses,
    selected_degree: state.state.selected_degree,
    selected_courses: state.state.selected_courses
})

export default connect(mapStateToProps, { loadCourses, loadCourse, resetCourses })(
    ({ loadCourses, loadCourse, resetCourses, courses, selected_degree, selected_courses }) => {

        const [isLoading, setLoading] = useState(true)
        const [selVal, setSelVal] = useState('')

        const mappedCourses = courses.filter((c1) => !selected_courses.some((c2) => c1.id == c2.id))
            .map((course) => ({ value: course.id, label: course.name }) )

        useEffect(() => {
            resetCourses()
            setLoading(true)
            setSelVal(null)

            if (selected_degree != null) {
                loadCourses(selected_degree.value)
                setLoading(false)
            }
        }, [selected_degree])

        const changeCourse = (course) => {
            if (course)
                loadCourse(course)
            setSelVal(null)
        }

        return (
            <div className="form-field">
                <p>Courses</p>
                <Select
                    options={mappedCourses}
                    isSearchable
                    isClearable
                    isLoading={isLoading}
                    isDisabled={isLoading}
                    onChange={changeCourse}
                    value={selVal}
                />
            </div>
        )
    }
)