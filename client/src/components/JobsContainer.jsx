import Wrapper from '../assets/wrappers/JobsContainer';
import { useAllJobsContext } from '../pages/AllJobs';
import Job from './Job';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const jobs = data.getall;
  console.log(jobs.length);
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to dispaly...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className='jobs'>
        {jobs.map(job => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
