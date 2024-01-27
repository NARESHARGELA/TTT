import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector} from 'react-redux';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminServices from './AdminServices';
import AdminContact from './AdminContact';
const {TabPane} = Tabs
const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      window.location.href = '/admin-login'
    }
  },[])

  return (
    <div>
      <Header/>
      <div className='flex items-center justify-between'>
        <div className='flex items-center ml-5 gap-10'>
          <h1 className='text-3xl text-[#5ed68c] py-5'>Admin Portfolio</h1>
          <div className='w-40 h-[1px] bg-tertiary'></div>
        </div>
        <div className='flex items-center mr-5'>
    
          <h1 className='text-[#eb4a4a] border py-2 px-5 cursor-pointer'
          onClick={()=>{
            localStorage.removeItem('token');
            window.location.href ='/admin-login'
          }}
          >Logout</h1>
        </div>
      </div>

      <div className='mx-5'>
      {portfolioData && <div className='mt-2 py-2'>
      <Tabs defaultActiveKey="1" > 
      <TabPane tab="Intro" key="1">
        <AdminIntro/>
      </TabPane>
      <TabPane tab="About" key="2">
        <AdminAbout/>
      </TabPane>
      <TabPane tab="Experiences" key="3">
        <AdminExperiences/>
      </TabPane>
      <TabPane tab="Projects" key="4">
        <AdminProjects/>
      </TabPane>
      <TabPane tab="Services" key="5">
        <AdminServices/>
      </TabPane>
      <TabPane tab="Contact" key="6">
        <AdminContact/>
      </TabPane>
    </Tabs>
    
      </div>}
      </div>
      
    </div>
  )
}

export default Admin
