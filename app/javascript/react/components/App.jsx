import React from 'react'

import DegreesDropdown from './form/DegreesDropdown'
import CoursesDropdown from './form/CoursesDropdown'
import CourseList from './form/CourseList'
import SubmitButton from './form/SubmitButton'

export default () => {
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
                <SubmitButton />
                <DegreesDropdown />
                <CoursesDropdown />
            </div>
            <CourseList />
        </div>
    )
}