import { useState, useEffect } from "react";

export const makeErrMsg = (datas) => {
    if (datas.required) {
        console.log("why?");
        return "입력란을 작성해주세요.";
    } else if (datas.valid) {
        console.log("why2");
        return datas.formatErrorTxt;
    } else {
        console.log("why3");
        return '';
    }
}


export const usePassWordValidation = ({password = "", passwordAgain = ""}) => {
    const [minLength, setMinLength] = useState(false);
    const [maxLength, setMaxLength] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);
    const [match, setMatch] = useState(false);
    const [msg, setMsg] = useState('');

    const checkPassword = () => {
        if (minLength && maxLength && hasNumber && upperCase && lowerCase && specialChar) setMsg(msg)
    }

    useEffect(() => {
        setMinLength(password.length >= 8 ? true:false);
        setMaxLength(password.length <= 16 ? true:false);
        setUpperCase(password.toUpperCase() !== password);
        setLowerCase(password.toLowerCase() !== password);
        setHasNumber(/\d/.test(password));
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password));
        setMatch(password && password === passwordAgain);
    }, [password, passwordAgain]);

    return [msg];
}