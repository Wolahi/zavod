import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { $api } from '@/shared/api/apiInstance.ts';
import { IWorkPlan } from '@/shared/config/interfaces/IWorkPlan';

const useGetWorkPlanList = () => {
  const [workPlanList, setWorkPlanList] = useState<IWorkPlan[]>([]);

  const getReports = async (): Promise<AxiosResponse<IWorkPlan[]>> => {
    return $api.get('/api/dictionary/workplane');
  };

  useEffect(() => {
    (async () => {
      const res = await getReports();
      setWorkPlanList(res.data);
    })();
  }, []);

  return { workPlanList, setWorkPlanList };
};

export default useGetWorkPlanList;
