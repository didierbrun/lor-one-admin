module.exports = ({ env }) => ({
    //
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 12,
        amountLimit: 1000,
        apolloServer: {
          tracing: false,
        },
      },
    },
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUD_NAME'),
            api_key: env('CLOUD_API_KEY'),
            api_secret: env('CLOUD_API_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
  });