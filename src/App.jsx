import { useEffect, useState } from 'react';
import { listUsers, createUser } from './api';

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  async function refresh() {
    try { setUsers(await listUsers()); } catch(e) { alert(e.message); }
  }
  useEffect(() => { refresh(); }, []);

  async function onCreate(e){
    e.preventDefault();
    try{
      await createUser({ name });
      setName('');
      await refresh();
    }catch(e){ alert(e.message); }
  }

  return (
    <div style={{maxWidth:640,margin:'40px auto',fontFamily:'sans-serif'}}>
      <h1>User demo</h1>

      <h2>Danh sách users</h2>
      <ul>
        {users.map((u,i)=>(<li key={i}>{u.name ?? JSON.stringify(u)}</li>))}
      </ul>

      <h2>Tạo user</h2>
      <form onSubmit={onCreate}>
        <input placeholder="Tên user" value={name} onChange={e=>setName(e.target.value)} />
        <button type="submit">Tạo</button>
      </form>
    </div>
  );
}
