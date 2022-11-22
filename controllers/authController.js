import User from "../models/User.js";
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import _ from 'lodash';

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) throw new BadRequestError('Please provide all values');

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) throw new BadRequestError('Email already in use')

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    }, token
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) throw new BadRequestError('Please provide all the values');

  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new UnAuthenticatedError('Credentials not valid');

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) throw new UnAuthenticatedError('Credentials not valid');

  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

export { register, login, updateUser };