function checkForSession(req, res, next) {
  if (req.session.user === undefined) req.session.user = { username: "", cart: [], total: 0 };
  next();
}

export {
  checkForSession
}