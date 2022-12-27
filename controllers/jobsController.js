import Job from '../models/Job.js';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError('Please provide all the values!')
  };

  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId })
  res.status(StatusCodes.OK).json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
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