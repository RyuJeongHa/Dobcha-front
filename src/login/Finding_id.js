//import React from  'react'
import React, {useEffect, useState} from 'react'
import './Finding_id.css';
import { Divider, Input, Button, Menu, Dropdown,AutoComplete } from 'antd';
import logo from '../images/dobcha_logo.png'



const Finding_id=({history, mm,ss})=>{

  const menu = (
    <Menu>
      <Menu.Item>
      <a onClick={() => {history.push('/login/Login')}} 
      style={{padding:'10px'}}
      >
          진행중인 기부  
        </a>
      </Menu.Item>  {/* 진행중인 기부 경로 바꾸기*/} 

      <Menu.Item>
      <a onClick={() => {history.push('/login/Login')}} 
      style={{padding:'10px', marginLeft:'5px'}}
      >
         마감된 기부
        </a>
      </Menu.Item>  {/* 마감된 기부 경로 바꾸기*/} 
    </Menu>
  );

  const options = [
    {
      value: 'gamil.com',
    },
    {
      value: 'naver.com',
    },
    {
      value: 'daum.net',
    },
  ];

        const [minutes, setMinutes] = useState(parseInt(mm));
        const [seconds, setSeconds] = useState(parseInt(ss));

        useEffect(() => {
            const countdown = setInterval(() => {
              if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
              }
              if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                } else {
                  setMinutes(parseInt(minutes) - 1);
                  setSeconds(59);
                }
              }
            }, 1000);
            return () => clearInterval(countdown);
          }, [minutes, seconds]);



    return(
        <div className='frame'>
            <div className='top2'>
                <Button style={{ border:'none'}}
                ><img src={logo} alt ="dobcha_logo" 
                        onClick ={( )=> {history.push('/')}}
                        /></Button>


                        <div className='click'>
                        <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button style={{padding:'10px', marginRight:'40px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold', border:'none', marginTop:'5px'
                }}  >기부</Button>
                     </Dropdown>

                <a onClick={() => {history.push('/hompage/Volunteer')}} 
                 style={{padding:'15px', marginRight:'10px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 봉사활동  {/* 봉사활동 페이지를 만들게 되면 경로 바꾸기*/} </a>
                <a onClick={() => {history.push('/')}} 
                 style={{padding:'15px',marginLeft:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 플랫폼 소개  {/* 플랫폼 소개 페이지를 만들게 되면 경로 바꾸기*/} </a>
                                </div>
                <div className='btn'>
                <Button block 
                style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                ,borderRadius:'5px', marginTop:'15px', marginRight:'15px'}}
                onClick={()=> {history.push('/login/Login')}}
                >로그인</Button>
                <Button block 
                style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                ,borderRadius:'5px', marginTop:'15px'}}
                onClick={()=> {history.push('/')}}
                >회원가입 </Button>{/* 회원가입 페이지로 경로 바꾸기*/}
                </div>
            </div>
            <Divider/>

            <div className='middle2'>
                계정 정보 찾기 

                <div className='middle_IP'>
                    <a onClick={() => {history.push('./Finding_id')}}
                    style={{color:'red'}} >아이디 찾기</a>
                        <Divider type="vertical" style={{marginTop:'5px'}}/>
                    <a onClick={() => {history.push('./Finding_pw')}}
                    style={{color:'black'}}>비밀번호 찾기</a>
                </div>

                <div className='middle_Box'>
                    <div className='middle_BoxH'>
                        회원 정보에 등록한 이름과 이메일을 입력해주세요.
                    </div>

                <div className='virtual_Box'>
                    <div className='middle_BoxN'>
                      <div className='middle_BoxNtext' style={{marginRight:'25px',alignContent:'center'}}>
                        이름
                        </div>
                        <Input placeholder=" " 
                        style={{width:'265px', height:'30px', marginRight:'122px'}}
                        />
                    </div>

                    <div className='middle_BoxE'>
                        <div  style={{marginRight:'20px'}}>이메일</div>
                        
                        <Input placeholder=" " 
                        style={{width:'120px', height:'30px'}}
                        /> &nbsp; @ &nbsp;
                        

                        <AutoComplete
                            style={{
                              width: 120, height:30
                            }}
                            options={options}
                            placeholder="직접입력"
                            filterOption={(inputValue, option) =>
                              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                          />                     

                            <Button block
                            style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center',alignItems:'center'
                            , marginLeft:'10px',borderRadius:'5px',marginRight:'30px'}}
                            >인증번호 받기</Button>
                    </div>
                    <div className='middle_BoxT'>
                    <Input placeholder=" " 
                        style={{width:'270px', height:'30px', marginLeft:'15px', marginRight:'15px'}}
                        />
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </div>

                    </div>

                    <div className='middle_BoxB'>
                    <Button bold
                    onClick={()=> {history.push('./Finding_id2')}}
                            style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                            , marginRight:'65px',borderRadius:'5px'}}
                            >확인</Button>
                    </div>
                    

                </div>

            </div>


            <div className="bottom2">
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 소개</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 이용 약관</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>개인정보 처리 방침 </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  Dobcha ©2021
                    </div>
        </div>
    )
}

export default Finding_id;