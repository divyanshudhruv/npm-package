// app.js
const fetchConfig = async () => {
    const response = await fetch('/api/config');
    const config = await response.json();

    // Display variables on the website
    const container = document.getElementById('variables-container');
    container.innerHTML = `
        <p>Supabase URL: ${config.SUPABASE_URL}</p>
        <p>Supabase Key: ${config.SUPABASE_KEY}</p>
    `;
};

fetchConfig();
