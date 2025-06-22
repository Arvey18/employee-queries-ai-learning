import configs from '../config/config.js';

function authMiddleware(req, res, next) {
  // Check for an authorization token in the headers
  const token = req.headers['authorization'];

  if (!token || token !== configs.secretToken) {
    return res.status(403).json({ status: 'error', message: 'Forbidden: No token provided' });
  }

  // If the token is valid, proceed to the next middleware or route handler
  next();
}

export default authMiddleware;
