import { useState, useEffect } from "react";

export const nameValidation = userName => {
    
}

export const usePasswordValidation = ({password = "", passwordAgain = ""}) => {
    const [minLength, setMinLength] = useState(false);
    const [maxLength, setMaxLength] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);
    const [match, setMatch] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const checkPassword = () => {
        if (!(minLength && maxLength && hasNumber && upperCase && lowerCase && specialChar)) {
            setErrMsg("8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        }
        return minLength && maxLength && hasNumber && upperCase && lowerCase && specialChar
    }

    useEffect(() => {
        setMinLength(password.length >= 8 ? true:false);
        setMaxLength(password.length <= 16 ? true:false);
        setUpperCase(password.toUpperCase !== password);
        setLowerCase(password.toLowerCase !== password);
        setHasNumber(/\d/.test(password));
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password));
        setMatch(password && password === passwordAgain);
    }, [password, passwordAgain]);

    return [checkPassword, match, errMsg];
}