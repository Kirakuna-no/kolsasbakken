
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Meny +'; }
menu.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.textContent = open ? 'Lukk −' : 'Meny +'; });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menu.focus(); } });

const video=document.querySelector('video');
if(video){const start=document.querySelector('#start-video'),note=document.querySelector('#video-status');
start.addEventListener('click',async()=>{try{await video.play();note.textContent='Le lecteur spiller et opptak, ikke direkte.'.replace('Le lecteur','Spilleren');}catch(e){note.textContent='Avspilling ble blokkert. Bruk avspillingsknappen i videospilleren eller last ned opptaket.';}});
video.addEventListener('playing',()=>{note.textContent='Opptaket spilles av uten lyd. Bruk kontrollene for å pause.';});
video.addEventListener('ended',()=>{note.textContent='Opptaket er ferdig. Du kan starte det på nytt.';});
video.addEventListener('error',()=>{note.textContent='Kan ikke spille videoen her. Du kan laste ned opptaket nedenfor.';});}
