const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (PHASE_DEVELOPMENT_SERVER === phase) {
    return {
      env: {
        mongodb_username: "cosmos",
        mongodb_password: "Hustle@2021",
        mongodb_cluster: "cluster0",
        mongodb_database: "blog-contact",
      },
      reactStrictMode: true,
    };
  } else
    return {
      env: {
        mongodb_username: "cosmos",
        mongodb_password: "Hustle@2021",
        mongodb_cluster: "cluster0",
        mongodb_database: "blog-contact",
      },
      reactStrictMode: true,
    };
};
