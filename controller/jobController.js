import job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

export const createJob = async (req, res) => {
  //obj notation - including a new obj in the existin obj
  req.body.createdBy = req.user.userId; //tying create job with specifilc user
  const create = await job.create(req.body);
  res.status(StatusCodes.CREATED).json({ create });
};

export const getAllJob = async (req, res) => {
  //it will find all the job tiedup with the userId of the req.user.userId from the authmiddleware, while logged in that specific route has single id
  const getall = await job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ getall });
};

export const getSingleJob = async (req, res) => {
  const getSingle = await job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ getSingle });
};

export const updateJob = async (req, res) => {
  const jobedit = await job.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(StatusCodes.OK).json({ msg: 'job modified', jobedit });
};

export const deleteJob = async (req, res) => {
  const del = await job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ del });
};

export const showStats = async (req, res) => {
  res.send('stats');
};
