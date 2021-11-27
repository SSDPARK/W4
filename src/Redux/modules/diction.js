import { db } from '../../firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

// 데이터저장하는 공간
export const initialState = {
  list: [
    { word: '단어입니다.', content: '설명입니다.', example: '예시입니다.' },
  ],
};

// Action
const LOAD = 'diction/LOAD';
const CREATE = 'diction/CREATE';

export function loadDiction(diction_list) {
  return {
    type: LOAD,
    diction_list: diction_list,
  };
}

export function createDiction(diction_list) {
  return {
    type: CREATE,
    diction_list: diction_list,
  };
}

export const loadDictionFB = () => {
  return async function (dispatch) {
    // 데이터를 가져와요!
    const diction_data = await getDocs(collection(db, 'diction'));

    let diction_list = [];

    // 하나씩 우리가 쓸 수 있는 배열 데이터로 만들어줍시다!
    diction_data.forEach((b) => {
      // 콘솔로 확인해요!
      // console.log(b.id, b.data());
      diction_list.push({ id: b.id, ...b.data() });
    });

    // 잘 만들어졌는 지 리스트도 확인해봐요! :)
    // console.log(diction_list);
    dispatch(loadDiction(diction_list));
  };
};

// 파이어베이스랑 통신하는 부분
export const addDictionFB = (diction) => {
  return async function (dispatch) {
    // 파이어스토어에 추가하기를 기다려요!
    const docRef = await addDoc(collection(db, 'diction'), diction);
    // 추가한 데이터 중 id를 가져와서 bucket_data를 만들어줬어요!
    const diction_data = { id: docRef.id, ...diction };
    // 그럼 이제 액션을 일으키자! (수정해달라고 요청하자!)
    dispatch(createDiction(diction_data));
  };
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'diction/LOAD': {
      console.log(action);
      return { list: action.diction_list };
    }

    case 'diction/CREATE': {
      const new_data = [...state.list, action];
      return { list: new_data };
    }

    default:
      return state;
  }
}
