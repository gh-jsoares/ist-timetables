import {
    STATE_DEGREE_SELECT,
    STATE_COURSE_SELECT,
    STATE_COURSE_REMOVE,
    STATE_COURSE_RESET,
    STATE_COURSE_CHECK_TYPE,
} from '../actions/types'

const initialState = {
    selected_degree: null,
    selected_courses: [],
    selected_timetable: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case STATE_DEGREE_SELECT:
            return {
                ...state,
                selected_degree: action.payload
            }
        case STATE_COURSE_REMOVE:
            return {
                ...state,
                selected_courses: state.selected_courses.filter((course) => course.id != action.payload)
            }
        case STATE_COURSE_SELECT:
            return {
                ...state,
                selected_courses: [
                    ...state.selected_courses,
                    action.payload
                ]
            }
        case STATE_COURSE_RESET:
            return {
                ...state,
                selected_courses: []
            }
        case STATE_COURSE_CHECK_TYPE:
            return {
                ...state,
                selected_courses: state.selected_courses.map((course) => course.id == action.payload.id ? action.payload : course )
            }
        default:
            return state
    }
}