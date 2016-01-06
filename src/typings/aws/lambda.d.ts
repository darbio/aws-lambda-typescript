// Type definitions for AWS Lambda
// Definitions by: James Darbyshire (http://darb.io)

/************************************************
*                                               *
*               AWS Lambda API                  *
*                                               *
************************************************/

interface Context {
    succeed(result?: string): void;
    fail(error?: string): void;
    done(error?: string, result?: string): void;
    getRemainingTimeInMillis(): number;
}