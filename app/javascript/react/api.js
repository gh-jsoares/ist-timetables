import axios from 'axios'

const API_BASE = 'http://localhost:3000/api/v1/'

export const fetchDegrees = () => {
    const url = `${API_BASE}degrees.json`
    return axios.get(url)
}

export const fetchCourses = (degree_id) => {
    const url = `${API_BASE}courses.json?degree=${encodeURIComponent(degree_id)}`
    return axios.get(url)
}

export const fetchTimetables = (courses) => {
    const url = `${API_BASE}timetables.json`
    return axios.post(url)
}

export const fetchCourse = (course_id) => {
    const url = `${API_BASE}course.json?course=${encodeURIComponent(course_id)}`
    return axios.get(url)
}
