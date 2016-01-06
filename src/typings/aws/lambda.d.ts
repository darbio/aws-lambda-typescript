// Type definitions for AWS Lambda
// Definitions by: James Darbyshire (http://darb.io)

/************************************************
*                                               *
*               AWS Lambda API                  *
*                                               *
************************************************/

// Context
// http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
interface Context {
    // Properties
    // TODO
    
    // Functions
    succeed(result?: Object): void;
    fail(error?: Error): void;
    done(error?: Error, result?: Object): void; // result must be JSON.stringifyable
    getRemainingTimeInMillis(): number;
}
