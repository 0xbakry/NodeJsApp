import statusCodes from 'http-status-codes';

export const authorize = (req, res, next) => {
  const { loggedIn } = req.query;
  if (loggedIn != 'true') {
    return res
      .status(statusCodes.UNAUTHORIZED)
      .json({ message: 'You can not access this route' });
  }

  next();
};
