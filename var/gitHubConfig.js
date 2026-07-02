let html = "";
if (window.location.hostname.includes('github.io')) {
    html = `<base id="base-url" href="/portfolio/">`
}

html += document.querySelector("head").innerHTML;
document.querySelector("head").innerHTML = html;