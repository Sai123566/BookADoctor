import { Col, Form, Input, Row, TimePicker, message } from 'antd';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

function ApplyDoctor({ userId }) {
   const [doctor, setDoctor] = useState({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      specialization: '',
      experience: '',
      fees: '',
      timings: [],
   });

   const [userEmail, setUserEmail] = useState('');

   const handleTimingChange = (_, timeStrings) => {
      setDoctor({ ...doctor, timings: timeStrings });
   };

   const handleChange = (e) => {
      setDoctor({ ...doctor, [e.target.name]: e.target.value });
   };

   const handleSubmit = async () => {
      try {
         if (!userEmail) {
            message.error("Please enter user email.");
            return;
         }

         const doctorInfo = {
            fullName: doctor.fullName,
            specialization: doctor.specialization,
            experience: doctor.experience,
            fees: doctor.fees,
            timings: doctor.timings,
         };

         const userInfo = {
            fullName: doctor.fullName, // You can separate this if needed
            phone: doctor.phone,
            email: userEmail,
            address: doctor.address,
         };

         const payload = {
            userEmail,
            doctorEmail: doctor.email,
            userInfo,
            doctorInfo,
            date: new Date().toISOString(),
         };

         const res = await axios.post("http://localhost:5000/api/user/getappointment", payload, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
         });

         if (res.data.success) {
            message.success(res.data.message);
         } else {
            message.error(res.data.message || "Booking failed");
         }

      } catch (error) {
         console.error(error);
         message.error("Something went wrong");
      }
   };

   return (
      <Container>
         <h2 className='text-center p-3'>Apply for Doctor</h2>
         <Form onFinish={handleSubmit} className='m-3'>
            <h4>Personal Details:</h4>
            <Row gutter={20}>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="User Email (Patient)" required>
                     <Input
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        type='email'
                        placeholder='Enter your email'
                     />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Full Name" required>
                     <Input name='fullName' value={doctor.fullName} onChange={handleChange} placeholder='Enter name' />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Phone" required>
                     <Input name='phone' value={doctor.phone} onChange={handleChange} type='number' placeholder='Your phone' />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Doctor Email" required>
                     <Input name='email' value={doctor.email} onChange={handleChange} type='email' placeholder='Doctor email' />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Address" required>
                     <Input name='address' value={doctor.address} onChange={handleChange} type='text' placeholder='Your address' />
                  </Form.Item>
               </Col>
            </Row>

            <h4>Professional Details:</h4>
            <Row gutter={20}>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Specialization" required>
                     <Input name='specialization' value={doctor.specialization} onChange={handleChange} type='text' placeholder='Your specialization' />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Experience (Years)" required>
                     <Input name='experience' value={doctor.experience} onChange={handleChange} type='number' placeholder='Your experience' />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Fees" required>
                     <Input name='fees' value={doctor.fees} onChange={handleChange} type='number' placeholder='Your fees' />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Timings" name="timings" required>
                     <TimePicker.RangePicker format="HH:mm" onChange={handleTimingChange} />
                  </Form.Item>
               </Col>
            </Row>

            <div className="d-flex justify-content-end">
               <button className="btn btn-primary" type="submit">Submit</button>
            </div>
         </Form>
      </Container>
   );
}

export default ApplyDoctor;
