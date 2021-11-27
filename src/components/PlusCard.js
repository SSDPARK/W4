import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'; //외우기
import { addDictionFB } from '../Redux/modules/diction';

const Detail = (props) => {
  const dispatch = useDispatch();

  const word = React.useRef(null);
  const content = React.useRef(null);
  const example = React.useRef(null);

  const createDiction = async () => {
    console.log(
      word.current.value,
      content.current.value,
      example.current.value
    );
    await dispatch(
      addDictionFB({
        word: word.current.value,
        content: content.current.value,
        example: example.current.value,
      })
    ).then((res) => (window.location.href = '/'));
  }; // async await 공부하기

  return (
    <Wrap>
      <h1> 단어 추가하기 </h1> <br />
      <InputBox>
        <Ptag> 단어 </Ptag>
        <Input type="text" ref={word} />
      </InputBox>
      <InputBox>
        <Ptag> 설명</Ptag>
        <Input type="text" ref={content} />
      </InputBox>
      <InputBox>
        <Ptag> 예시</Ptag>
        <Input type="text" ref={example} />
      </InputBox>
      <Button onClick={createDiction}>추가하기</Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: auto;
  /* text-align: center; */
  position: reletive; // 자기 현재 위치를 중심으로
  /* right: 1000px; */
`;

const InputBox = styled.div`
  background-color: #eee;
  margin: 20px;
  height: 80px;
`;

const Input = styled.input`
  width: 90%;
  margin: 0px 10px 10px 10px;
  height: 30px;
  font-size: 20px;
`;

const Ptag = styled.p`
  margin: 0;
  padding: 0;
  text-decoration: underline;
`;

const Button = styled.button`
  display: block;
  margin: auto;
  background-color: lime;
  width: 50%;
  height: 50px;
  font-size: 30px;
`;

export default Detail;
