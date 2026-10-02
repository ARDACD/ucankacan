const gozlemci=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const icKutu=entry.target.querySelector('#aciklama, #baglantilar');
        if (!icKutu) return;
        if (entry.isIntersecting){
            icKutu.classList.add('aktif');
        } else if (entry.boundingClientRect.top>0){
            icKutu.classList.remove('aktif');
        }
    });
},{
    threshold:0.1
});
document.querySelectorAll('.animasyonkapsayici').forEach(kapsayici=>{
    gozlemci.observe(kapsayici);
});