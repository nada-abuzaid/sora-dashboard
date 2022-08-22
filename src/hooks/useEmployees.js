import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesGender } from '../services/callApi';
import { setEmployees } from '../store';

function useEmployees() {
  const { employees, companyId } = useSelector((state) => state.employees.value);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const id = 3;
    setIsLoading(true);
    const fetchData = async () => {
      const { employeesCount } = await getEmployeesGender(id);
      dispatch(setEmployees({ employees: employeesCount, companyId: id }));
      setIsLoading(false);
    };
    fetchData();
  }, [companyId]);

  return [employees, companyId, isLoading];
}

export default useEmployees;
