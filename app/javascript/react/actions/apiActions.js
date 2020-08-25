import {
    API_DEGREES_LOAD,
    API_COURSES_LOAD,
    API_TIMETABLES_LOAD,
    API_COURSE_LOAD,
} from './types'

import {
    fetchDegrees,
    fetchCourses,
    fetchTimetables,
    fetchCourse,
} from '../api'

export const loadDegrees = () => dispatch => {
    fetchDegrees()
        .then((response) => {
            dispatch({
                type: API_DEGREES_LOAD,
                payload: response.data
            })
        })
}

export const loadCourses = (degree_id) => dispatch => {
    fetchCourses(degree_id)
        .then((response) => {
            dispatch({
                type: API_COURSES_LOAD,
                payload: response.data
            })
        })
}

export const loadTimetables = () => dispatch => {
    fetchTimetables()
        .then((response) => {
            dispatch({
                type: API_TIMETABLES_LOAD,
                payload: response.data
            })
        })
}

export const loadCourse = (course_option) => dispatch => {
    fetchCourse(course_option.value)
        .then((response) => {
            dispatch({
                type: API_COURSE_LOAD,
                payload: response.data
            })
        })
}
