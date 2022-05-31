import React from "react";
import HomeHeader from "./HomeHeader";

async function signUpUser(credentials) {
  console.log(JSON.stringify(credentials));
  return fetch("http://localhost:8080/Board", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((response) => response.json());
}

function boards() {
  const [inputs, setInputs] = {
    contents: "",
    title: "",
  };

  const { contents, title } = inputs;

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await boards({
      contents,
      title,
    });
  };
}

const Disabled_write = () => {
  return (
    <div className="relative bg-no-repeat bg-cover relative min-h-screen bg-home-spotted-pattern">
      <HomeHeader />
      <div className="font-sebang-gothic flex px-96 my-14">
        <div className="boder border-2 shadow-md rounded-xl item-center justify-center p-10 px-50  bg-gray-50 ">
          <div className="text-4xl">
            봉사 요청서 작성
            <div className="py-3 text-xl">
              봉사자에게 도움이 필요한 내용을 작성해 봉사를 요청합니다.
            </div>
            <div class="border-solid border-t-2	border-green-600 "></div>
            <div class="board_write text-2xl">
              <div className=' "title"'>
                <dl>
                  <dt>
                    제목 &nbsp; &nbsp; &nbsp; &nbsp;
                    <input
                      className="px-32"
                      type="text"
                      // value={title}
                      // onChange={onChange}
                      placeholder="제목 입력"
                    />
                  </dt>
                  <div class="border-solid border-t-2	border-green-600 "></div>

                  <dt>
                    봉사 시간
                    <input
                      className="px-32"
                      type="text"
                      // value={contents}
                      // onChange={onChange}
                      placeholder="EX) 1시간"
                    />
                  </dt>
                </dl>
              </div>
              <div class="border-solid border-t-2	border-green-600 "></div>

              <div className="cont py-2 ">
                <textarea
                  className="h-96 px-44 w-max bg-white col-span-12 "
                  cols={40}
                  placeholder="       내용 입력"
                ></textarea>
              </div>
            </div>
          </div>
          <br></br>
          <div class="border-solid border-t-2	border-green-600 "></div>
          <br></br>
          <div>
            <label for="input-file"></label>
            <input type="file" id="input-file" />
          </div>
          <center>
            <button
              class="px-2 py-1 border border-black "
              // onSubmit={handleSubmit}
            >
              등 록
            </button>

            <div className="float-right"></div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Disabled_write;
