"use strict";

const LEVEL_ERROR = 2;

// Dependabot commmits exceed the conventional limit, so we increase it here
const MAX_BODY_LINE_LENGTH = 200;

module.exports = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "body-max-line-length": [LEVEL_ERROR, "always", MAX_BODY_LINE_LENGTH],
  },
};
