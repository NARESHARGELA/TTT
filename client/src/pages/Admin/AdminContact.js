import React from 'react'
import {Form} from 'antd'
import {message} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { Hideloading, Showloading } from '../../redux/rootSlice';
import axios from 'axios'
const AdminContact = () => {
    const dispatch = useDispatch()
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(Showloading());
      const response = await axios.post('/api/portfolio/update-contact', {
        ...values,
        _id: portfolioData?.contacts?.[0]._id,
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
        <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData?.contacts?.[0]}>
            <Form.Item name="name" label='Name'>
                <input placeholder='Name'/>
            </Form.Item>
            <Form.Item name="age" label='Age'>
                <input placeholder='Age'/>
            </Form.Item>
            <Form.Item name="gender" label='Gender'>
                <input placeholder='Gender'/>
            </Form.Item>
            <Form.Item name="email" label='Email'>
                <input placeholder='Email'/>
            </Form.Item>
            <Form.Item name="mobile" label='Mobile'>
                <textarea placeholder='Mobile'/>
            </Form.Item>
            <Form.Item name="country" label='Country'>
                <textarea placeholder='Country'/>
            </Form.Item>
            <div className='flex justify-start w-full'>
                <button className='px-10 py-2 bg-primary text-white' type='submit'>SAVE</button>
            </div>
        </Form>
    </div>
  )
}

export default AdminContact
