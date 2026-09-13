const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export const isNonEmpty = (value) => typeof value === "string" && value.trim().length > 0;

export const isValidEmail = (value) => EMAIL_PATTERN.test(String(value || "").trim());

export const isValidMobile = (value) => {
  const digits = String(value || "").replace(/[^\d]/g, "");
  // Accepts 10-digit Indian mobile numbers, optionally prefixed with 0 or 91.
  const normalised = digits.replace(/^(0|91)/, "");
  return /^[6-9]\d{9}$/.test(normalised);
};

export const isValidAmount = (value) => {
  if (!isNonEmpty(value)) return true; // optional field
  return /^\d{1,12}(\.\d{1,2})?$/.test(String(value).replace(/[,\s]/g, ""));
};

/**
 * Validates the Get Assistance request payload.
 * Returns an object of field -> message. Empty object means valid.
 */
export function validateAssistanceForm(values) {
  const errors = {};

  if (!isNonEmpty(values.fullName)) {
    errors.fullName = "Please enter your full name.";
  } else if (values.fullName.trim().length < 3) {
    errors.fullName = "Name should be at least 3 characters.";
  }

  if (!isNonEmpty(values.mobile)) {
    errors.mobile = "Please enter your mobile number.";
  } else if (!isValidMobile(values.mobile)) {
    errors.mobile = "Enter a valid 10-digit mobile number.";
  }

  if (!isNonEmpty(values.email)) {
    errors.email = "Please enter your email address.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!isNonEmpty(values.loanType)) {
    errors.loanType = "Please select a loan type.";
  }

  if (!isValidAmount(values.outstandingAmount)) {
    errors.outstandingAmount = "Enter a valid amount in numbers.";
  }

  if (!isValidAmount(values.monthlyEmi)) {
    errors.monthlyEmi = "Enter a valid amount in numbers.";
  }

  if (!isNonEmpty(values.description)) {
    errors.description = "Please describe your situation briefly.";
  } else if (values.description.trim().length < 20) {
    errors.description = "Please add a little more detail (at least 20 characters).";
  }

  if (!values.consent) {
    errors.consent = "Please confirm you agree to be contacted.";
  }

  return errors;
}

/**
 * Validates the Contact form payload.
 */
export function validateContactForm(values) {
  const errors = {};

  if (!isNonEmpty(values.name)) {
    errors.name = "Please enter your name.";
  }

  if (!isNonEmpty(values.email)) {
    errors.email = "Please enter your email address.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!isNonEmpty(values.phone)) {
    errors.phone = "Please enter your phone number.";
  } else if (!isValidMobile(values.phone)) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }

  if (!isNonEmpty(values.message)) {
    errors.message = "Please enter your message.";
  } else if (values.message.trim().length < 15) {
    errors.message = "Please add a little more detail (at least 15 characters).";
  }

  return errors;
}

/**
 * Validates the hero lead-capture payload.
 */
export function validateLeadForm(values) {
  const errors = {};

  if (!isNonEmpty(values.fullName)) {
    errors.fullName = "Please enter your full name.";
  } else if (values.fullName.trim().length < 3) {
    errors.fullName = "Name should be at least 3 characters.";
  }

  if (!isNonEmpty(values.phone)) {
    errors.phone = "Please enter your phone number.";
  } else if (!isValidMobile(values.phone)) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }

  if (!isNonEmpty(values.email)) {
    errors.email = "Please enter your email address.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!isNonEmpty(values.debtType)) {
    errors.debtType = "Please select a debt type.";
  }

  return errors;
}
