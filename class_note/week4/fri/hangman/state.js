import { GameStatus, wordToMap } from "./util.js";

export const initialState = {
  enteredCharacters: {},
  charMap: {},
  wordArr: [],
  charsLeft: 0,
  chancesLeft: 7,
  timer: 60,
  gameStatus: GameStatus.READY,
  wordLoading: false,
};

export function startGame(state) {
  return { ...state, gameStatus: GameStatus.START };
}

export function initializeState(state, word) {
  const charMap = wordToMap(word);
  //Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를
  //얕게 복사해 새로운Array 객체를 만듭니다.
  // 여기 뭐하는 건지 이해가 안간다.
  const wordArr = Array.from({ length: word.length }).map((_, idx) =>
    word[idx] === " " ? " " : "*"
  );
  const charsLeft = Object.keys(charMap).length - 1;
  return {
    ...initialState,
    charMap,
    wordArr,
    charsLeft,
    gameStatus: GameStatus.START,
  };
}

export function decreaseTimer(state) {
  return { ...state, timer: state.timer - 1 };
}

export function checkGameStatus(state) {
  if (state.charsLeft === 0) {
    return { ...state, gameStatus: GameStatus.WIN };
  } else if (state.chancesLeft === 0 || state.timer === 0) {
    return { ...state, gameStatus: GameStatus.LOSE };
  }

  return state;
}

// 게임의 핵심 로직!
export function selectCharacter(state, enteredCharacter) {
  const enteredCharacters = {
    ...state.enteredCharacters,
    [enteredCharacter]: true,
  };

  if (!state.charMap[enteredCharacter]) {
    const chancesLeft = state.chancesLeft - 1;
    const gameStatus = chancesLeft === 0 ? GameStatus.LOSE : status.gameStatus;

    return {
      ...state,
      chancesLeft,
      gameStatus,
      enteredCharacters,
    };
  }

  const wordArr = [...state.wordArr];
  state.charMap[enteredCharacter].forEach((i) => {
    wordArr[i] = enteredCharacter;
  });

  const charsLeft = state.charsLeft - 1;
  const gameStatus = charsLeft === 0 ? GameStatus.WIN : state.gameStatus;

  return {
    ...state,
    wordArr,
    charsLeft,
    gameStatus,
    enteredCharacters,
  };
}

export function setWordLoading(state, wordLoading) {
  return { ...state, wordLoading };
}
