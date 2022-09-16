import React, { useState, useEffect, useRouter, useCallback } from "react";
import { usePassWordValidation, makeErrMsg } from "pages/usePasswordValidation";
import axios from "axios";
import { Radio } from "@mui/material";

// async function signUpUser(credentials) {
//   axios
//     .post("http://34.64.61.63:8080/api/members/signup", {
//       username: credentials.username,
//       email: credentials.email,
//       password: credentials.password,
//     })
//     .then(function (response) {
//       console.log(response.status);
//       if (response.status === 200) {
//         alert("회원가입 되었습니다.");
//         document.location.href = "/user/signin";
//       }
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [authority, setAuthority] = useState('')

  const [nameMessage, setNameMessage] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
  const [authorityMessage, setAuthorityMessage] = useState('')
  
  const [isName, setIsName] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  const [isauthority, setIsAuthority] = useState(false);

  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: "",
  //   passwordAgain: "",
  //   username: "",
  // });

  // const { email, password, passwordAgain, username } = inputs;

  // const onChange = (e) => {
  //   setInputs({
  //     ...inputs,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const response = await signUpUser({
  //     email,
  //     password,
  //     username,
  //   });
  // };

  // useEffect(() => {}, [password, passwordAgain]);

  const onSubmit = () => {    
    if(authority === "1"){
      axios.post('http://34.64.61.63:8080/api/members/signup', {
            username: name,
            password: password,
            email: email,
          })          
          .then(function (response) {
            // handle successF
            console.log('response:', response)
            if (response.status === 200) {
              alert("회원가입 되었습니다.");
              document.location.href = "/user/signin";
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });   
      
    }
    else if(authority === "2"){
      axios.post('http://34.64.61.63:8080/api/members/beneficiary/signup', {
            username: name,
            password: password,
            email: email,
          })          
          .then(function (response) {
            // handle successF
            console.log('response:', response)
            if (response.status === 200) {
              alert("회원가입 되었습니다.");
              document.location.href = "/user/signin";
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });    
      
    }    
  }
  
  // 이름
  const onChangeName = useCallback((e) => {
    setName(e.target.value)
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
      setIsName(false)
    } else {
      setNameMessage('올바른 이름 형식입니다.')
      setIsName(true)
    }
  }, [])

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요.')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식입니다.')
      setIsEmail(true)
    }
  }, [])

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.')
      setIsPassword(false)
    } else {
      setPasswordMessage('안전한 비밀번호입니다.')
      setIsPassword(true)
    }
  }, [])

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value
      setPasswordConfirm(passwordConfirmCurrent)

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호가 일치합니다.')
        setIsPasswordConfirm(true)
      } else {
        setPasswordConfirmMessage('비밀번호가 틀렸습니다. 다시 확인해주세요.')
        setIsPasswordConfirm(false)
      }
    },
    [password]
  )
  
  const onChangeAuthority = (e) => {
    setAuthority(e.target.value)      
      if (e.target.value === "1" || e.target.value === "2") {
        setAuthorityMessage('선택했습니다.')
        setIsAuthority(true)
        console.log('test')
      } else {
        setAuthorityMessage('역할을 선택해주세요.')
        setIsAuthority(false)
      }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="p-10 border-2 shadow-md rounded bg-gray-50 max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-28 w-auto" src="/img/Logo.svg" alt="Logo" />
          <h2 className="mt-2 text-center text-3xl font-noto-sans font-bold text-gray-900">
            회 원 가 입
          </h2>
          <p className="mt-2 text-center text-sm text-gray-800 font-noto-sans font-medium text-green-500">
            회원가입 후 온라인 봉사 활동을 시작하세요!
          </p>
          <form
            className="mt-8 space-y-6"
            novalidation="true"            
          >
            <div className="rounded-md shadow-sm space-y-2">              
              {/* User authority Radio*/}              
              <div className="flex flex-col space-y-1 justify-start">
                <div className="flex flex-row space-x-4">
                  <label
                    htmlFor="authority"
                    className="text-gray-900 font-sans text-base font-semibold"
                  >
                    봉사자
                  </label>
                  <input
                    type="radio"                  
                    name="authority"                  
                    value={1}
                    onClick={(e) => onChangeAuthority(e)}                  
                  />        
                  <label
                    htmlFor="authority"
                    className="text-gray-900 font-sans text-base font-semibold"
                  >
                    수혜자
                  </label>
                  <input
                    type="radio"
                    required
                    name="authority"                  
                    value={2}
                    onClick={(e) => onChangeAuthority(e)}                    
                  />
                </div>                
                
              </div>
              {/* User name Input Box */}
              <div>
                <label
                  htmlFor="username"
                  className="text-gray-900 font-sans text-sm font-semibold"
                >
                  Username
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="이름"
                  value={name}
                  onChange={onChangeName}
                  className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                />
                {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
              </div>
              {/* Email Input Box*/}
              <div>
                <label
                  htmlFor="email"
                  className="text-gray-900 font-sans text-sm font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="이메일"
                  value={email}
                  onChange={onChangeEmail}
                  className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                />
                {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
              </div>
              <div>
                {/* Password Input Box*/}
                <label
                  htmlFor="password"
                  className="text-gray-900 font-sans text-sm font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
                  value={password}
                  onChange={onChangePassword}
                  className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                />
                {password.length > 0 && (
                  <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
                )}
                </div>
                <div>
                {/* Re-entering Password Input Box*/}
                <label
                  htmlFor="re-entering password"
                  className="text-gray-900 font-sans text-sm font-semibold"
                >
                  Reconfirm Password
                </label>
                <input
                  type="password"
                  required
                  name="passwordAgain"
                  placeholder="비밀번호 재확인"
                  value={passwordConfirm}
                  onChange={onChangePasswordConfirm}
                  className="my-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                />
                 {passwordConfirm.length > 0 && (
                    <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
                  )}
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="button"                
                onClick={onSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-noto-snas font-bold rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                disabled={!(isName && isEmail && isPassword && isPasswordConfirm && isauthority)}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-green-50 group-hover:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
