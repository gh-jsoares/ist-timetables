import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { selectCourse, removeCourse } from '../../actions/stateActions'

import CourseListItem from './CourseListItem'

const mapStateToProps = (state) => ({
    courses: state.state.selected_courses,
    selected_course: state.api.selected_course
})

export default connect(mapStateToProps, { selectCourse, removeCourse })(
    ({ courses, selectCourse, removeCourse, selected_course }) => {

        useEffect(() => {
            if (selected_course != null)
                selectCourse(selected_course)
        }, [selected_course])

        return (
            <ul id="subjects">
                { courses.map((course, i) => (
                    <CourseListItem
                        course={course}
                        href="#"
                        onRemove={() => removeCourse(course.id)}
                        key={i}
                    />
                )) }
            </ul>
        )
    }
)