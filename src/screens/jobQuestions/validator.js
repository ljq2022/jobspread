export const validate = (values) => {
  const errors = {};

  if (!values.resumeActiveStatus && values.resumeRequiredStatus) {
    errors.resumeActiveStatus =
      "The resume field must be active for it to be required.";
  } else if (
    !values.coverLetterActiveStatus &&
    values.coverLetterRequiredStatus
  ) {
    errors.coverLetterActiveStatus =
      "The cover letter field must be active for it to be required.";
  } else if (!values.phoneActiveStatus && values.phoneRequiredStatus) {
    errors.phoneActiveStatus =
      "The phone field must be active for it to be required.";
  } else if (!values.addressActiveStatus && values.addressRequiredStatus) {
    errors.addressActiveStatus =
      "The address field must be active for it to be required.";
  } else if (!values.educationActiveStatus && values.educationRequiredStatus) {
    errors.educationActiveStatus =
      "The education field must be active for it to be required.";
  } else if (
    !values.employmentActiveStatus &&
    values.employmentRequiredStatus
  ) {
    errors.employmentActiveStatus =
      "The employment field must be active for it to be required.";
  } else if (!values.locationActiveStatus && values.locationRequiredStatus) {
    errors.locationActiveStatus =
      "The location field must be active for it to be required.";
  }
  return errors;
};
