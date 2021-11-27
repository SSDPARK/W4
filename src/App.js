import './App.css';
// import Card from './Cards.js';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import Card from './components/Cards';
import PlusCard from './components/PlusCard';

function App() {
  return (
    <Wrap>
      <Switch>
        <Route path="/components/PlusCard" component={PlusCard} />
        <Route exact path="/" component={Card} />
      </Switch>

      <Route exact path="/">
        <Btn>
          <Link to="./components/PlusCard">
            <Plus>+</Plus>
          </Link>
        </Btn>
      </Route>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 500px;
  height: 800px;
  margin: auto;
  background-color: #999;
`;

// const Styled = styled.div`
//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   margin: auto;
//   font-size: 35px;
// `;

const Btn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  position: absolute;
  border-radius: 50%;
  background-color: #eee;
  cursor: pointer;
  bottom: 10px;
  right: 200px;
`;

const Plus = styled.div`
  font-size: 50px;
  position: absolute;
  top: -11px;
  left: 9px;
`;

export default App;
