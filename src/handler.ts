import { Handler, Context, Callback } from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

const hello: Handler = (event: any, context: Context, callback: Callback) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: Math.floor(Math.random() * 10),
      body:'Go Serverless v1.0! Your function executed successfully!'
    }),
  };

  callback(undefined, response);
};

export { hello }