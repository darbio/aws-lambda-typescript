function handler(event, context) {
    // Check our parameters
    if (event == null) {
        context.fail("No event object");
    }
    // Success
    context.succeed("Great Success");
}
exports.handler = handler;
//# sourceMappingURL=app.js.map