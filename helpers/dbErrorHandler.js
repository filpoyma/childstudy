"use strict";

/**
 * Get unique error field name
 */
const uniqueMessage = error => {
  let output;
  try {
    let fieldName = error.message
    // .substring(
    //   error.message.lastIndexOf(".$") + 5,
    //   error.message.lastIndexOf("_1")
    // );

    output =
      fieldName.charAt(0) +
      fieldName.slice(1) +
      " уже существует";
  } catch (ex) {
    output = "Поле с такими данными уже существует";
  }

  return output;
};

/**
 * Get the erroror message from error object
 */
exports.errorHandler = error => {
  let message = "";

  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = "Что то пошло не так";
    }
  } else {
    for (let errorName in error.errorors) {
      if (error.errorors[errorName].message)
        message = error.errorors[errorName].message;
    }
  }

  return message;
};