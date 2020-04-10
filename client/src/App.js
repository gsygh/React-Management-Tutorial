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
    marginTop: theme.spacing(3),
    // 위쪽 여백을 3의 가중치만큼 준다.
    overFlowX: "auto"
    // 전체, 즉 root의 경우는 x축 기준으로 overflow가 발생할 수 있음
  },
  table: {
    minWidth: 1080
    // 화면 크기가 줄어들어도 테이블의 최소 크기는 1080이라 그대로 출력
  }
})


class App extends Component {

  state = {
    customers: ""
  }
  // 이론 상 props 는 변경될 수 없는 데이터 명시, state는 변경될 수 있는 데이터 명시
  
  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers: res}))
    // callAPI 작업 후 then을 통해 body -> res가 되어 setState 동작
    .catch(err => console.log(err));
  }
  // 컴포넌트는 생명주기가 존재. 모든 컴포넌트가 마운트가 완료되었을 때 실행되는 부분

  callApi = async() => {
    //async() => : 이전 라인의 작업이 끝날 때까지 기다리는 것이 아닐 때 사용
    const response = await fetch('/api/customers')
    //await : fetch가 끝나기를 기다린 후 return value를 response에 넣어주는 것
    const body = await response.json();
    return body;
  }
  //async => 비동기적
  
  // response라고 해서 접속하고자 하는 주소를 넣음 (현재는 로컬 )



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
              this.state.customers ? this.state.customers.map(c => {
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
              : ""
            }
          </TableBody>
        </Table>

        {/* map이라는 함수를 통해 반복문 재생. */}
        {/* map 을 이용해 출력할 때는 꼭 key를 설정해 줄 것 */}
      </Paper>
    );
  }
} export default withStyles(styles)(App);
