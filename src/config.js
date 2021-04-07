const config = {
  STRIPE_KEY: "pk_test_51IUEf6FsE4QRQQGRPXk8142xbrJoXNegDCR1oxuZLgAojXG4aIxEOSRVIZWehQPDAnxXryO3RAfXmuh0aHzXcZfG004pheWPgM",
  s3: {
    REGION: "us-east-1",
    BUCKET: "lukai-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://um0291nnye.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_rEF7loVq0",
    APP_CLIENT_ID: "6vfsbf7b7cp5khcblgap8vvn2f",
    IDENTITY_POOL_ID: "us-east-1:01a87849-bc8d-495b-9aec-16a87d26cc00",
  },
};

export default config;