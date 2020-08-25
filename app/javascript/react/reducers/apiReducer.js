import {
    API_DEGREES_LOAD,
    API_COURSES_LOAD,
    API_TIMETABLES_LOAD,
    API_COURSE_LOAD,
} from '../actions/types'

const initialState = {
    degrees: [],
    courses: [],
    timetables: [],
    selected_course: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case API_DEGREES_LOAD:
            return {
                ...state,
                degrees: action.payload
            }
        case API_COURSES_LOAD:
            return {
                ...state,
                courses: action.payload
            }
        case API_TIMETABLES_LOAD:
            return {
                ...state,
                timetables: action.payload
            }
        case API_COURSE_LOAD:
            return {
                ...state,
                selected_course: action.payload
            }
        default:
            return state
    }
}