import otp from "otp-generator";

export function generateOTP() {
  return otp.generate(8, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
    digits: true,
  });
}
