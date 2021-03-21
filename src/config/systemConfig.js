const config = {};

config.RESPONSE_VALIDATION_REQUIRED = '{{FIELD}} is required.';
config.RESPONSE_VALIDATION_ALPHABETS_REQUIRED = '{{FIELD}} must be alphabets only.';

config.SUCCESS_RESPONSE_CREATE_RECORD = '{{MODEL}} created successfully.';
config.SUCCESS_RESPONSE_UPDATE_RECORD = '{{MODEL}} updated successfully.';
config.SUCCESS_RESPONSE_DELETE_RECORD = '{{MODEL}} deleted successfully.';
config.SUCCESS_RESPONSE_GET_ONE_RECORD = '{{MODEL}} details.';
config.SUCCESS_RESPONSE_GET_ALL_RECORD = '{{MODEL}} list.';

config.RESPONSE_ERROR_DUPLICATE_RECORD = 'This record already exists.';
config.RESPONSE_ERROR_INVALID_DETAILS = 'Invalid {{FIELD}} details.';
config.RESPONSE_ERROR_SERVER_ERROR = 'Something went wrong.';

module.exports = config;
