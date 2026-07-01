const config = `
    if (window.location.hostname.includes('github.io')) {
        document.getElementById('base-url').href = "/portfolio/";
    }`;

const html = `
    <head>
    <base id="base-url" href="/">
    
    <script>${config}</script>
    </head>`;

document.querySelector("head").innerHTML = html;