import React from 'react'
import CourseDropdown from './form/CourseDropdown'
import SubjectsDropdown from './form/SubjectsDropdown'
import SubmitButton from './form/SubmitButton'
import SubjectsList from './form/SubjectsList'

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
                <CourseDropdown />
                <SubjectsDropdown />
            </div>
            <SubjectsList />
        </div>
    )
}