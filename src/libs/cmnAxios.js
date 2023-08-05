import axios from 'axios'

const API_URL = 'https://www.pre-onboarding-selection-task.shop'

export const cmnAxios = axios.create({
  baseURL: `${API_URL}`, // 기본 서버 주소 입력
  headers: {
    'Content-Type': 'application/json',
  },
})
