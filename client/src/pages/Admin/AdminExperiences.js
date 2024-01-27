import { Form, message } from 'antd';
import {Modal} from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Hideloading, ReloadData, Showloading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminExperiences = () => {
  
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const experiences = portfolioData?.experiences;
  const [showAddEditmodel,setShowAddEditmodel]=React.useState(false);
  const [selectedItemforEdit,setselectedItemforEdit]=React.useState(null);
  const [type,setType]=React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(Showloading());
  
      let response;
    
      if (selectedItemforEdit) {
        response = await axios.post('/api/portfolio/update-experience', {
          ...values,
          _id: selectedItemforEdit._id
        });
      } else {
        response = await axios.post('/api/portfolio/add-experience', values);
      }
      
  
      dispatch(Hideloading());
  
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditmodel(false);
        setselectedItemforEdit(null);
        dispatch(Hideloading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(Hideloading());
      message.error(error.message);
    }
  };
  
  const onDelete = async (items) =>{
    try{
        dispatch(Showloading());
        const response = await axios.post('/api/portfolio/delete-experience',{
            _id:items._id
        });
        dispatch(Hideloading());
        if (response.data.success) {
            message.success(response.data.message);
            dispatch(Hideloading());
            dispatch(ReloadData(true));
        } else{
            message.error(response.data.message);
        }
    } catch (error) {
        dispatch(Hideloading());
        message.error(error.message);
      }
  }

  return (
    <div>
        <div className='flex justify-end'>
          <button className='bg-primary text-white px-5 py-2 m-t-5' 
            onClick={()=>{
            setselectedItemforEdit(null);
            setShowAddEditmodel(true);
            }}>Add Experience</button>
        </div>
      <div className='grid grid-cols-4 gap-5 sm:grid-cols-1'>
        {experiences.map((experience,index) => (
          <div key={index} className='shadow border border-grey-400 p-5 flex flex-col'>
            <h1 className='text-primary text-xl py-2'>{experience.title}</h1>
            <hr/>
            <br/>
            <h1>Period:{" "}{experience.period}</h1>
            <h1>Comapny:{" "}{experience.company}</h1>
            <h1>{experience.description}</h1>
            <div className='flex justify-end mt-2'>
              <button
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 mr-2 rounded"
              onClick={()=>{onDelete(experience)}}
              >
               Delete
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded" 
                onClick={()=>{
                setselectedItemforEdit(experience);
                setShowAddEditmodel(true);
                setType("edit");
              }}
              >Edit
            </button>
            </div>
            </div>
        ))}
      </div>
      
          {
            (type ==="add" ||
            selectedItemforEdit) && (
              <Modal open={showAddEditmodel}
            title={ selectedItemforEdit ? "Edit Experience" : "Add Experience"}
            footer={null}
            onCancel={()=>{
              setShowAddEditmodel(false)
              setselectedItemforEdit(null)
              }}>
                <Form 
                layout='vertical' onFinish={onFinish} initialValues={selectedItemforEdit}>
                    <Form.Item name='title' label='Title'>
                        <input placeholder='Title'/>
                    </Form.Item>
                    <Form.Item name='period' label='Period'>
                        <input placeholder='Period'/>
                    </Form.Item>
                    <Form.Item name='company' label='Company'>
                        <input placeholder='Company'/>
                    </Form.Item>
                    <Form.Item name='description' label='Description'>
                        <textarea placeholder='Description'/>
                    </Form.Item>
                    <div className='flex gap-2 justify-end'>
                        <button className='border-primary text-primary px-5 py-2' type='button'
                         onClick={()=>{
                          setShowAddEditmodel(false)
                          setselectedItemforEdit(null)
                         }} >CANCEL</button>
                        <button className='bg-[#3bdf6c] text-white px-5 py-2' type='submit'>
                            {selectedItemforEdit ? "Update" : "Add"}
                        </button>
                    </div>
                </Form>

        </Modal>
            )
          }

    </div>
  );
};

export default AdminExperiences;
