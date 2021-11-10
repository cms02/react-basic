import styled from 'styled-components';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/login/Login';
import LoginPage from './components/pages/LoginPage';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}
export default App;
