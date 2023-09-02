import { toast } from 'react-toastify';
import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useContext, createContext } from 'react';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const { data } = await customFetch('/jobs');
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AlljobsContext = createContext();

const AllJobs = () => {
  const data = useLoaderData();

  return (
    <AlljobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobsContainer />
    </AlljobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AlljobsContext);
export default AllJobs;
