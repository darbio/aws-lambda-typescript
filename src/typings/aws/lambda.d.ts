// Type definitions for AWS Lambda
// Definitions by: James Darbyshire (http://darb.io)

/************************************************
*                                               *
*               AWS Lambda API                  *
*                                               *
************************************************/

interface Context {
    succeed(result: any): any;
    succeed(result: any): any;

    fail(): any;
    fail(error: any): any;

    done(): any;
    done(error: any): any;
    done(error: any, result: any): any;

    getRemainingTimeInMillis(): any;
}