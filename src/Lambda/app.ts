export function handler(event, context: Context) {
    // Check our parameters
    if (event == null) {
        context.fail("No event object");
    }

    // Success
    context.succeed("Great Success");
}