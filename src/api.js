const base = import.meta.env.VITE_API_BASE_URL;

export async function listUsers() {
  const res = await fetch(`${base}/users`);
  if (!res.ok) throw new Error('List users failed');
  return res.json();
}

export async function createUser(payload) {
  const res = await fetch(`${base}/users`, {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Create user failed');
  return res.json();
}
