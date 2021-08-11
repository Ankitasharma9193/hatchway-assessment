import axios from 'axios';
import {errorResponse} from './error-response'


export const recordService = {
  getStudentRecords
}

function getStudentRecords() {
  console.log("I am in get records");
  return axios.get(      
    'https://api.hatchways.io/assessment/students'
  )
  .then(handleResponse)
  .catch(error => {
          if (error.response && error.response.data) {
            return Promise.reject(new errorResponse(error.response.data.detail, error.response.status));
          }
          return Promise.reject(new errorResponse('There was a problem getting your student record, please try again', '0'));
        }); 
}


function handleResponse(response) {
    console.log("in handle response",response.data);
    return response.data;
  }