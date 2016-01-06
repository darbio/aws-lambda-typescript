export function handler(event, context: Context) {
    if (event != null) {
        console.log('event = ' + JSON.stringify(event));
    }
    else {
        console.log('No event object');
    }

    context.succeed('Success');
}