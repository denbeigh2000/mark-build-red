const core = require("@actions/core");

const msg = core.getInput("message", {
    required: false,
    trimWhitespace: true,
});
core.setFailed(msg);
