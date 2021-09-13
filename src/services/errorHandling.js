import { formDataType } from "./../constants/errorHandling";
import validator from 'validator';
import { toast } from "react-toastify";

import { validateMobile } from "./../services/utils";

export const errorFinder = (data, type) => {
  let hasError = false;
  switch (type) {
    case formDataType.ADD_STUDENT_NEW_STEP1:
      if (data.firstName == null || data.firstName === "") {
        toast.error(`First name should not be blank`)
        hasError = true;
        return hasError;
      }
      if (data.lastName == null || data.lastName === "") {
        toast.error(`Last name should not be blank`)
        hasError = true;
        return hasError;
      }
      if (data.email == null || !validator.isEmail(data.email)) {
        toast.error(`Email should be valid`)
        hasError = true;
        return hasError;
      }
      if (data.contactNumber == null || !validateMobile(data.contactNumber)) {
        toast.error(`Mobile should be valid`)
        hasError = true;
        return hasError;
      }
      if (data.age == null || !(data.age > 0 && data.age <101)) {
        toast.error(`Age should be between 0 to 100`)
        hasError = true;
        return hasError;
      }
      if (data.gender == null || data.gender === "") {
        toast.error(`Please select gender`)
        hasError = true;
        return hasError;
      }
      return hasError;
      case formDataType.ADD_STUDENT_NEW_STEP2:
        if (data.fatherName == null || data.fatherName === "") {
          toast.error(`Father's name should not be blank`)
          hasError = true;
          return hasError;
        }
        if (data.motherName == null || data.motherName === "") {
          toast.error(`Mother's name should not be blank`)
          hasError = true;
          return hasError;
        }
        if (data.presentAddress == null || data.presentAddress === "") {
          toast.error(`Present address should not be blank`)
          hasError = true;
          return hasError;
        }
        if (data.permanentAddress == null || data.permanentAddress === "") {
          toast.error(`Permanent address should not be blank`)
          hasError = true;
          return hasError;
        }
        return hasError;
        case formDataType.ADD_STUDENT_NEW_STEP3:
          if (data.highSchool == null ||!(data.highSchool > 0 && data.highSchool <101)) {
            toast.error(`High school percentage is between 0 to 100`)
            hasError = true;
            return hasError;
          }
          if (data.secondary == null ||!(data.secondary > 0 && data.secondary <101)) {
            toast.error(`secondary school percentage is between 0 to 100`)
            hasError = true;
            return hasError;
          }
          if (data.graduation == null ||!(data.graduation > 0 && data.graduation <101)) {
            toast.error(`Graduation percentage is between 0 to 100`)
            hasError = true;
            return hasError;
          }
    default:
      return hasError;
  }
}

