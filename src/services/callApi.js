import { HEALTH_CONDITIONS, USER_ENGAGEMENTS, USER_INTERESTS } from '../api/endpoints';
import axiosRequest from '../utils/http';

export async function getUserEngagements(id) {
  const { data: { data: { company: { totalEngagements } } } } = await axiosRequest(`${USER_ENGAGEMENTS(id)}`, 'GET');
  return totalEngagements;
}

export async function getUserInterests(id) {
  const { data: { data: { company: { totalInterests } } } } = await axiosRequest(`${USER_INTERESTS(id)}`, 'GET');
  return totalInterests;
}

export async function getHealthConditions(id) {
  const { data: { data: { company } } } = await axiosRequest(`${HEALTH_CONDITIONS(id)}`, 'GET');
  return company;
}
