import React from 'react'
import {Form} from 'antd'
import {message} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { Hideloading, Showloading } from '../../redux/rootSlice';
import axios from 'axios'
const AdminAbout = () => {
    const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
        const tempskills = values.skills.split(',').map(skill => skill.trim());
        values.skills = tempskills;
      dispatch(Showloading());
      const response = await axios.post('/api/portfolio/update-about', {
        ...values,
        _id: portfolioData?.abouts?.[0]._id,
      });
      dispatch(Hideloading());
      if (response.data.success) {
        message.success('About Updated Successfully');
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(Hideloading());
      message.error(error.message);
    }
  };
  
  return (
    <div>
        <Form onFinish={onFinish} layout='vertical' initialValues={{
                ...portfolioData?.abouts?.[0],
                skills: portfolioData?.abouts?.[0]?.skills?.join(", ") || '',
                }}> 
            <Form.Item name="lottieurl" label='Lottie URL'>
                <input placeholder='Lottie URL'/>
            </Form.Item>
            <Form.Item name="description1" label='Description-1'>
                <textarea placeholder='Description1'/>
            </Form.Item>
            <Form.Item name="description2" label='Description-2'>
                <textarea placeholder='Description2'/>
            </Form.Item>
            <Form.Item name="skills" label='Skills'>
                <textarea placeholder='Skills'/>
            </Form.Item>
            <div className='flex justify-start w-full'>
                <button className='px-10 py-2 bg-primary text-white' type='submit'>SAVE</button>
            </div>
        </Form>
    </div>
  )
}

export default AdminAbout
