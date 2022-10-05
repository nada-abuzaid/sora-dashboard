import axiosRequest from '../http';
import { BASE_URL } from '../config';
import companies from '../companies';

// Endpoints
export const COMPANIES_DATA = `${BASE_URL}/api/v1/companies`;
const COMPANY_DATA = (id) => `${COMPANIES_DATA}/${id}`;
const USER_ENGAGEMENTS_DATA = (id) => `${COMPANY_DATA(id)}/users-engagements`;
const USER_INTERESTS_DATA = (id) => `${COMPANY_DATA(id)}/users-interests`;
const HEALTH_CONDITIONS_DATA = (id) => `${COMPANY_DATA(id)}/users-health-conditions`;
const EMPLOYEES_GENDER_DATA = (id) => `${COMPANY_DATA(id)}/employees-gender`;

// Axios Requests

async function getCompaniesData() {
  return companies;
  // const { data: { data } } = await axiosRequest(`${COMPANIES_DATA}`);
  // return data;
}

async function getUserEngagements(id) {
  try {
    const { data: { data: { company: { totalEngagements } } } } = await axiosRequest(`${USER_ENGAGEMENTS_DATA(id)}`, 'GET');
    return totalEngagements;
  } catch (error) {
    return [];
  }
}

async function getUserInterests(id) {
  try {
    const { data: { data: { company: { totalInterests } } } } = await axiosRequest(`${USER_INTERESTS_DATA(id)}`, 'GET');
    return totalInterests;
  } catch (error) {
    return [];
  }
}

async function getHealthConditions(id) {
  const { data: { data: { company } } } = await axiosRequest(`${HEALTH_CONDITIONS_DATA(id)}`, 'GET');
  return company;
}

async function getEmployeesGender(id) {
  const { data: { data: { company } } } = await axiosRequest(`${EMPLOYEES_GENDER_DATA(id)}`, 'GET');
  return company;
}

export {
  getEmployeesGender,
  getUserEngagements,
  getUserInterests,
  getHealthConditions,
  getCompaniesData,
};
