import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesGender } from '../services/callApi';
import { setEmployees } from '../store';

function useStatic() {
  const [data, setData] = useState([]);

  const { employees, companyId } = useSelector(
    (state) => state.employees.value,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { employeesGender, employeesCount } = await getEmployeesGender(companyId);
      dispatch(setEmployees({ employees: employeesCount, companyId }));
      setData(employeesGender);
    };
    fetchData();
  }, [companyId]);

  return [data, employees];
}

export default useStatic;
