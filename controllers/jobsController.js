const createJob = async (req, res) => {
  res.send('Create job');
};

const getAllJobs = async (req, res) => {
  res.send('All Jobs');
};

const updateJob = async (req, res) => {
  res.send('Job updated');
};

const deleteJob = async (req, res) => {
  res.send('Job deleted');
};

const showStats = async (req, res) => {
  res.send('Job stats');
};


export { getAllJobs, createJob, updateJob, showStats, deleteJob };