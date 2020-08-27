import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import DegreesDropdown from './form/DegreesDropdown'
import CoursesDropdown from './form/CoursesDropdown'
import CourseList from './form/CourseList'
import SubmitButton from './form/SubmitButton'
import { loadTimetables } from '../actions/apiActions'

const mapStateToProps = (state) => ({
    selected_courses: state.state.selected_courses,
})

export default connect(mapStateToProps, { loadTimetables })(
    ({ loadTimetables, selected_courses }) => {
        return (
            <div className="container">
                <h1>IST Timetable Generator</h1>
                <ol id="guide">
                    <li>This application allows you to generate a timetable for your course</li>
                    <li>To start, simply choose your course from the dropdown list below</li>
                    <li>Upon doing so, you can choose to add as many subjects as you want to simulate your timetable</li>
                    <li>You can choose which types of classes you want to include (theory, problems, laboraties, etc) using the checkboxes</li>
                    <li>Once you're happy with the chosen subjects, press Submit to start simulating</li>
                </ol>
                <div className="form">
                    <SubmitButton onSubmit={() => loadTimetables(selected_courses) } />
                    <DegreesDropdown />
                    <CoursesDropdown />
                </div>
                <CourseList />
            </div>
        )
    }
)