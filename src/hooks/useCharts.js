import { useEffect, useState } from 'react';
import { getHealthConditions, getUserEngagements, getUserInterests } from '../services/callApi';

function useCharts() {
  const [featuresData, setFeaturesData] = useState([]);
  const [interestsData, setInterestsData] = useState([]);
  const [topHealthConditionsData, setTopHealthConditionsData] = useState([]);
  const [healthConditionsData, setHealthConditionsData] = useState([]);

  const [id, setId] = useState();

  useEffect(() => {
    setId(3);
    const fetchData = async () => {
      try {
        const totalEngagements = await getUserEngagements(id);
        const totalInterests = await getUserInterests(id);
        const { topThreeHealthConditions, allHealthConditions } = await getHealthConditions(id);
        setFeaturesData(totalEngagements);
        setInterestsData(totalInterests);
        setHealthConditionsData(allHealthConditions);
        setTopHealthConditionsData(topThreeHealthConditions);
        return totalEngagements;
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, [id]);

  return [featuresData, interestsData, topHealthConditionsData, healthConditionsData];
}

export default useCharts;
