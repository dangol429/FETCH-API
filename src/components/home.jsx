import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './action.js/action';
import './home.css'

const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (data.length === 0) {
    return <div className='Loading'>Loading...</div>;
  }

  return (
    <div>
      <h2>Fetched Data:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map(item => (
          <div className='container' key={item.id} style={{ margin: '10px', minWidth: '200px' }}>
            <div>
              <p>ID: {item.id}</p>
              <img src={item.avatar} alt="Avatar" style={{ width: '100%', height: 'auto' }} />
              <p>Name: {item.first_name} {item.last_name}</p>
            <p>Username: <br/><span>{item.username}</span></p>
            <p>Email: <br/><span>{item.email}</span></p>
            </div>
            <div>
            <p>Gender: <br/><span>{item.gender}</span></p>
            <p>Phone Number: <br/><span>{item.phone_number}</span></p>
            <p>Social Insurance Number: <br/><span>{item.social_insurance_number}</span></p>
            <p>Date of Birth: <br/><span>{item.date_of_birth}</span></p>
            <p>Employment Title: <br/><span>{item.employment.title}</span></p>
            <p>Employment Key Skill: <br/><span>{item.employment.key_skill}</span></p>
            </div>
            <div>
            <p>Address: <br/><span>{item.address.street_address}</span>, <br/><span>{item.address.city}</span>, <br/><span>{item.address.state}</span>, <br/><span></span>{item.address.zip_code}, <br/><span>{item.address.country}</span></p>
            <p>Credit Card Number: <br/><span>{item.credit_card.cc_number}</span></p>
            <p>Subscription Plan: <br/><span>{item.subscription.plan}</span></p>
            <p>Subscription Status: <br/><span>{item.subscription.status}</span></p>
            <p>Subscription Payment Method: <br/><span>{item.subscription.payment_method}</span></p>
            <p>Subscription Term: {item.subscription.term}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
