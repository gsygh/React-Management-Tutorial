import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';


const customers = [{
  id: 1,
  image: 'https://placeimg.com/64/64/1',
  name: '윤지석',
  birthday: '961011',
  gender: '남자',
  job: '대학생'
},
{
  id: 2,
  image: 'https://placeimg.com/64/64/2',
  name: '강현지',
  birthday: '971225',
  gender: '여자',
  job: '대학생'
},
{
  id: 3,
  image: 'https://placeimg.com/64/64/3',
  name: '홍길동',
  birthday: '961011',
  gender: '남자',
  job: '대학생'
}]

class App extends Component {
  render() {
    return (
      <div className="gram">
        {customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              gender={c.gender}
              job={c.job}
            />
          );
        })
        }
        {/* map이라는 함수를 통해 반복문 재생. */}
        {/* map 을 이용해 출력할 때는 꼭 key를 설정해 줄 것 */}
      </div>
    );
  }
} export default App;
