import React, { useState } from 'react';

function UserDetail() {
    const [user, setUser] = useState({
        fullname : '',
        nickname : '',
        address : '',
        dob : '',
        role : '',
        place : '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name] : value
        }));
    };

    return (
        <div className='container mt-4'>
            <h2>User Detail</h2>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Full Name</label>
                    <input 
                        type='text'
                        className='form-control'
                        name='fullname'
                        value={user.fullname}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Nickname</label>
                    <input 
                        type='text'
                        className='form-control'
                        name='nickname'
                        value={user.nickname}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Address</label>
                    <input 
                        type='text'
                        className='form-control'
                        name='address'
                        value={user.address}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Date of Birth</label>
                    <input 
                        type='date'
                        className='form-control'
                        name='dob'
                        value={user.dob}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Role</label>
                    <input 
                        type='text'
                        className='form-control'
                        name='role'
                        value={user.role}
                        onChange={handleChange}
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Place</label>
                    <input 
                        type='text'
                        className='form=control'
                        name='place'
                        value={user.place}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
}


export default UserDetail;