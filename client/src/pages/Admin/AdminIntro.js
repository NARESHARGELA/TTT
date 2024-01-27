import React from 'react'
import {Form} from 'antd'
import {message} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { Hideloading, Showloading } from '../../redux/rootSlice';
import axios from 'axios'
const AdminIntro = () => {
    const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(Showloading());
      const response = await axios.post('/api/portfolio/update-intro', {
        ...values,
        _id: portfolioData?.intros?.[0]._id,
      });
      dispatch(Hideloading());
      if (response.data.success) {
        message.success(response.data.message);
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
        <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData?.intros?.[0]}>
            <Form.Item name="welcomeText" label='Welcome Text'>
                <input placeholder='Welcome Text'/>
            </Form.Item>
            <Form.Item name="firstName" label='First Name'>
                <input placeholder='First Name'/>
            </Form.Item>
            <Form.Item name="lastName" label='Last Name'>
                <input placeholder='Last Name'/>
            </Form.Item>
            <Form.Item name="caption" label='Caption'>
                <input placeholder='Caption'/>
            </Form.Item>
            <Form.Item name="description" label='Description'>
                <textarea placeholder='Description'/>
            </Form.Item>
            <div className='flex justify-start w-full'>
                <button className='px-10 py-2 bg-primary text-white' type='submit'>SAVE</button>
            </div>
        </Form>
    </div>
  )
}

export default AdminIntro
