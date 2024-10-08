export const settings = {
  APP: {
    SERVICE_NAME: "service-dashboard-chronos",
  },
  API: {
    CMS: {
      HOST: process.env.CMS_SERVER_HOST,
      PUBLIC: {
        ENDPOINT_GRAPHQL: "/graphql",
        ENDPOINT_SESSION_CREATE: '/session/create'
      },
    },
  },
};
