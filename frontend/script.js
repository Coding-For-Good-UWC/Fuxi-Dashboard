async function mainFunction() {
    const request = await fetch("http://localhost:3001/");
    const data = await request.json();
    console.log(data);
    
    const text = document.getElementById('text');
    text.innerHTML = data.key
}