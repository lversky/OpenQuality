// Analytics hook placeholder
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
// Example: gtag('config', 'G-XXXXXXX');
document.querySelectorAll('form').forEach(f=>{f.addEventListener('submit',()=>{window.dataLayer.push({event:'form_submit'});});});