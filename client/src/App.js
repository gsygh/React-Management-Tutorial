import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Table';
// 바깥을 감쌀 때 쓰는 태그 여기서는 div 대역으로 사용한 듯
import Table from '@material-ui/core/table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    // 위쪽 여백을 3의 가중치만큼 준다.
    overFlowX: "auto"
    // 전체, 즉 root의 경우는 x축 기준으로 overflow가 발생할 수 있음
  },
  table: {
    minWidth: 1080
    // 화면 크기가 줄어들어도 테이블의 최소 크기는 1080이라 그대로 출력
  }
})


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
    const {classes} = this.props;
    // classes 변수를 정의해 위에서 적용한 스타일이 적용될 수 있도록
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                );
              })
            }
          </TableBody>
        </Table>

        {/* map이라는 함수를 통해 반복문 재생. */}
        {/* map 을 이용해 출력할 때는 꼭 key를 설정해 줄 것 */}
      </Paper>
    );
  }
} export default withStyles(styles)(App);
