import {
    STATE_DEGREE_SELECT,
    STATE_COURSE_SELECT,
    STATE_COURSE_REMOVE,
    STATE_COURSE_RESET,
    STATE_COURSE_CHECK_TYPE,
} from './types'

export const selectDegree = (degree) => dispatch => {
    dispatch({
        type: STATE_DEGREE_SELECT,
        payload: degree
    })
}

export const removeCourse = (course_id) => dispatch => {
    dispatch({
        type: STATE_COURSE_REMOVE,
        payload: course_id
    })
}

export const selectCourse = (course) => dispatch => {
    dispatch({
        type: STATE_COURSE_SELECT,
        payload: {
            ...course,
            types: course.types.map((type) => ({ name: type, checked: true }))
        }
    })
}

export const resetCourses = () => dispatch => {
    dispatch({
        type: STATE_COURSE_RESET,
        payload: null
    })
}

export const checkCourseType = (course, type_id, value) => dispatch => {
    dispatch({
        type: STATE_COURSE_CHECK_TYPE,
        payload: {
            ...course,
            types: course.types.map((type) => type.name == type_id ? {
                ...type,
                checked: value
            } : type)
        }
    })
}
