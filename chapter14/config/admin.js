module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '466fff5343d980b8ebbf27cd69bb3a05'),
  },
});
