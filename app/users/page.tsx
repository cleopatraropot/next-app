import React from 'react'

interface User {
    title: string
    id: number
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const users: User[] = await res.json()
    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>{user.title}</li>
                )}
            </ul>
        </>
    )
}

export default UsersPage