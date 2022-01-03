import * as yup from "yup";

const SALARY_MINIMUM = 0;

export const jobDetailValidationSchema = yup.object({
  title: yup.string().required("Please enter a job title."),
  location: yup.string().required("Please enter a job location."),
  salaryLowerBound: yup
    .number()
    .min(
      SALARY_MINIMUM,
      `Compensation lower bound must be greater than ${SALARY_MINIMUM}`
    ),
  salaryUpperBound: yup
    .number()
    .min(
      SALARY_MINIMUM,
      `Compensation upper bound must be greater than ${SALARY_MINIMUM}`
    ),
});
