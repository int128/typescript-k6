// https://k6.io/docs/get-started/running-k6/
import { sleep } from 'k6'
import http from 'k6/http'

export const options = {
  vus: 10,
  duration: '5s',
}

export default () => {
  http.get('https://test.k6.io')
  sleep(1)
}
