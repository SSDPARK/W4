import React from 'react';
import styled from 'styled-components';
import * as Redux from 'react-redux';
import { initialState as InitialState } from '../Redux/modules/diction';
import { useDispatch } from 'react-redux';
import { loadDictionFB } from '../Redux/modules/diction';

export default function Card() {
  const dispatch = useDispatch(); //다시 공부해보기 ㅠㅠ

  React.useEffect(() => {
    dispatch(loadDictionFB());
  }, []);
  // const cards = [];
  const Cards = Redux.useSelector((state) => state.diction.list);
  console.log(Cards);
  //data from firebase

  return (
    <Wrap>
      {Cards.map((cards, index) => {
        return (
          <CardWrap>
            <CardName>
              단어 <div>{cards.word}</div>
            </CardName>
            <CardName>
              설명 <br /> {cards.content}
              <br />
            </CardName>
            <CardName>
              예시 <br /> <Blue>{cards.example}</Blue>
            </CardName>
          </CardWrap>
        );
      })}
    </Wrap>
  );
}

const CardName = styled.div`
  margin: auto;
`;

const CardWrap = styled.div`
  width: 200px;
  height: 200px;
  margin: 30px auto;
  border: 1px dotted blue;
  background-color: #eee;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  background-color: #999;
`;

const Blue = styled.div`
  color: blue;
`;
