import React, { useState, useEffect } from 'react'





function UserList() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // fetch data when the component mounts
    useEffect(() => {
        fetch('/users.json')
            .then((res) => res.json())
            .then(data => setUsers(data))
            .catch((error) => console.error('error fetching users:', error))
    }, []);

    // for search bar
    const filteredUsers = users.filter((user) => 
        user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) || // toLowerCase used for not activate case sensitive
        user.nickname.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className='container mt-4'>
            <h2>User List</h2>

            {/* search bar */}
            <input 
                type='text'
                placeholder='Search by Name or Nickname'
                className='form-control mb-3'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Table */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Nickname</th>
                        <th>Role</th>
                        <th>Place</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.fullname}</td>
                                <td>{user.nickname}</td>
                                <td>{user.role}</td>
                                <td>{user.place}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Loading users ...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserList