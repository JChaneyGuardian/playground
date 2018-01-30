import { Handler, Context, Callback } from 'aws-lambda';
import { MergeTemplateAndData } from './MergeTemplateAndData';

interface MergeTemplateAndDataAPIResponse {
  success : boolean;
  result : string;
  messages : Array<string>
}

const MergeTemplateAndDataAPI: Handler = (event: any, context: Context, callback: Callback) => {
  const responseBody: MergeTemplateAndDataAPIResponse = {
      success:false,
      result: "",
      messages : []
   };

  let responseStatus = 400;
  try {
    let body : any = {};
    if (event.body) {
      body = JSON.parse(event.body);
    }

    let template = body.template||event.queryStringParameters.template||event.template;
    if (!template) {
      throw new Error("Parameter 'template' is required.")
    }

    let data = body.data||event.data||{};
    let options = body.options||event.options||{};

    let mtd = new MergeTemplateAndData(options);

    responseBody.result = mtd.Merge(template, data);
    responseBody.success = true;
    responseStatus = 200;
  } 
  catch (error) {
    responseBody.messages.push(error);
  }

  callback(undefined, {
    "statusCode": responseStatus,
        "headers": {},
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
  });

};



export { MergeTemplateAndDataAPI }