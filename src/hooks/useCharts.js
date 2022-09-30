import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getHealthConditions, getUserEngagements, getUserInterests } from '../services/callApi';
import { setLoading } from '../store/loading';

function useCharts() {
  const [featuresData, setFeaturesData] = useState([]);
  const [interestsData, setInterestsData] = useState([]);
  const [topHealthConditionsData, setTopHealthConditionsData] = useState([]);
  const [healthConditionsData, setHealthConditionsData] = useState([]);
  const dispatch = useDispatch();

  const [id, setId] = useState(3);

  useEffect(() => {
    setId(id);
    if (id === 0) return;
    const fetchData = async () => {
      try {
        dispatch(setLoading({ loading: true }));
        const totalEngagements = await getUserEngagements(id);
        const totalInterests = await getUserInterests(id);
        const { topThreeHealthConditions, allHealthConditions } = await getHealthConditions(id);
        setFeaturesData(totalEngagements);
        setInterestsData(totalInterests);
        setHealthConditionsData(allHealthConditions);
        setTopHealthConditionsData(topThreeHealthConditions);
        dispatch(setLoading({ loading: false }));
        return totalEngagements;
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, [id]);

  return {
    featuresData, interestsData, topHealthConditionsData, healthConditionsData,
  };
}

export default useCharts;
