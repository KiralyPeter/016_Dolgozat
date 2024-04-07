// Király Péter
// SZOFT-II/1/E
// 2024-04-07

const host = 'http://localhost:8000/';
const endpoint = 'students';

export async function getStudents() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}