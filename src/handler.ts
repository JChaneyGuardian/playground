import { Handler, Context, Callback } from 'aws-lambda';
import { MergeTemplateAndData } from './MergeTemplateAndData';
import { Event } from "./Event";

interface MergeTemplateAndDataAPIResponse {
  success : boolean;
  result : string;
  messages : Array<string>
}

const MergeTemplateAndDataAPI: Handler = (event: any, context: Context, callback: Callback) => {
  const responseBody: MergeTemplateAndDataAPIResponse = {
      "success":false,
      "result": "",
      "messages" : []
   };

  let responseStatus = 400;
  try {
    console.log("v1.0");
    console.log("body:" + event.body)
    console.log("queryString:" + event.queryStringParameters);
    let ev = new Event(event);

    let template = ev.getParameter("template");
    let data = ev.getParameter("data", {});
    let options = ev.getParameter("options", {});

    let mtd = new MergeTemplateAndData(options);

    responseBody.result = mtd.Merge(template, data);
    responseBody.success = true;
    responseStatus = 200;
  } 
  catch (error) {
    console.log(error);
    responseBody.messages.push(error);
  }

  callback(undefined, {
    "statusCode": responseStatus,
        "headers": {
          "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS},
        },
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
  });

};



export { MergeTemplateAndDataAPI }