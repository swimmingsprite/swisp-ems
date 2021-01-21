package com.swimmingsprite.authentication.login;

import org.apache.commons.validator.routines.EmailValidator;

public class LoginUtils {
    protected static boolean isEmail(String login) {
        EmailValidator validator = EmailValidator.getInstance();
        return validator.isValid(login);
    }

    protected static boolean isPhoneNumber(String login) {
        if (login.length() >=10
                && login.length() <15
                && login.matches("\\d+"))
            return true;
        return false;
    }
}
