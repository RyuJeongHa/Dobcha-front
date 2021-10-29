import React from  'react'
import './Individual.css';
import { Divider,  Button, Carousel, Menu, Dropdown,Modal} from 'antd';
import logo from '../images/dobcha_logo.png';
import img_banner1 from '../images/img_banner1.png';
import img_banner2 from '../images/img_banner2.png';
import img_donation from '../images/img_donation.png';
import img_volunteer from '../images/img_volunteer.png';
import { BankFilled ,UserOutlined} from '@ant-design/icons';


const Individual=({history}) => {

    const individualname = '류정하'
    //임의로 설정했습니다. 나중에 db에서 가져와주세요~~

    const [isModal, setIsModal] = React.useState(false);

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

      React.useEffect(() => {
        alert(`${individualname}님 안녕하세요`)
    },[])
      
  
    return(
        <div className='main_frame'>
            <div className='main_top'>
                <Button style={{ border:'none'}}
                    ><img src={logo} alt ="dobcha_logo" 
                            onClick ={( )=> {history.push('/')}}
                            /></Button>
                <div className='main_click'>

                     <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button style={{padding:'10px', marginRight:'50px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold', border:'none'
                }}  >기부</Button>
                     </Dropdown>


                 
                <a onClick={() => {history.push('/hompage/Volunteer')}} 
                 style={{padding:'10px', marginRight:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 봉사활동  {/* 봉사활동 페이지를 만들게 되면 경로 바꾸기*/} </a>
                <a onClick={() => {history.push('/')}} 
                 style={{padding:'10px',marginLeft:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 플랫폼 소개  {/* 플랫폼 소개 페이지를 만들게 되면 경로 바꾸기*/} </a>
                </div>

                <div className='main_btn'>
                    <div className='individual_icon'  style={{marginTop:'12px', marginRight:'30px'}}>
                        {<UserOutlined onClick={()=> {history.push('/login/Login')}} 
                    style={{fontSize:'20px'}}/>}  &nbsp;&nbsp;
                    <text style={{color: 'black',fontSize:'17px',  fontWeight:'bold'}}>
                    {`${individualname} 님`}
                </text>
                    </div> {/* 마이페이지로 경로 바꾸기*/} 
                    <div style={{marginTop:'12px'}}>
                    <a onClick={() => setIsModal(true)} 
                    style={{fontSize:'17px', fontWeight:'bold'}}>&nbsp;&nbsp; 로그아웃</a>
                    </div>
                    <Modal
                visible={isModal}
                onCancel={() => setIsModal(false)}
                onOk={() => {
                    setIsModal(false)
                    history.push('/')
                }}
                title={'로그아웃'}
            >
                <div
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%'}}
                >
                    <h2>로그아웃을 하시겠습니까?</h2>
                </div>
            </Modal>
                </div>



            </div>
            <Divider/>



            <div className='main_middle'>
                <div className='main_banner'>
                            <Carousel autoplay>
                <div>
                <img src={img_banner1} alt="img_banner1"/>{/* 경로 추가하기 누르면 해당 기부 페이지로 이동바꾸기*/}
                </div>
                <div>
                <img src={img_banner2} alt="img_banner2"/>{/* 경로 추가하기 누르면 해당 기부 페이지로 이동바꾸기*/}
                </div>
                
            </Carousel>
                </div>



                <div className='main_donation'>
                    <Button style={{ border:'none'}}
                        ><img src={img_donation} alt ="btn_donation" 
                                onClick ={( )=> {history.push('./')}} /* 기부메뉴(Donation_Menu) 경로 바꾸기*/
                                /></Button>
                </div>
{/** 나중에 main_donation, main_volunteer 부분 css 바꾸기!! 등록된 종류가 늘어나면...결론: 백엔드와 같이 상의 */}

                <div className='main_volunteer'>
                <Button style={{ border:'none'}}
                    ><img src={img_volunteer} alt ="btn_volunteer" 
                            onClick ={( )=> {history.push('./hompage/Volunteer')}}
                            /></Button>
                </div>
            </div>



            <div className='main_bottom'>
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



export default Individual;