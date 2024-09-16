import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({ region: "us-east-1" });

export const dynoDBCrud = async (event, context) => {
  function sendResponse(sendStatus, sendBody) {
    return {
      statusCode: sendStatus,
      body: JSON.stringify(sendBody),
    };
  }

  if (event.httpMethod === "GET") {
    try {
      const input = {
        TableName: "ng-test-table",
      };

      const command = new ScanCommand(input);
      const response = await client.send(command);

      const items = response.Items.map((item) => unmarshall(item));

      return sendResponse(200, {
        message: "Successfully fetched",
        result: items,
      });
    } catch (error) {
      return sendResponse(500, {
        message: "Error fetching data",
        error: error.message,
      });
    }
  }

  return sendResponse(400, { message: "Unsupported HTTP method" });
};
