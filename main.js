// const gozlemci = new IntersectionObserver((entries,observer)=>{
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('aktif');
//         } else if (entry.boundingClientRect.top<0){
//             entry.target.classList.remove('aktif');
//         }
//     });
// },{
//     threshold:0
// });
// const aciklamakutu=document.getElementById('aciklama');
// if (aciklamakutu){
//     gozlemci.observe(aciklamakutu);
// }
// const baglantikutu=document.getElementById('baglantilar');
// if(baglantikutu){
//     gozlemci.observe(baglantikutu);
// }

// window.addEventListener('scroll', function(){
//     const ekranYuksekligi=window.innerHeight;
//     const aciklama=document.getElementById('aciklama');
//     const baglantilar=document.getElementById('baglantilar');
//     if (aciklama){
//         const rect=aciklama.getBoundingClientRect();
//         if(rect.top<ekranYuksekligi-50&&rect.bottom>0){
//             aciklama.classList.add('aktif');
//         } else if (rect.top>ekranYuksekligi||rect.bottom<0){
//             aciklama.classList.remove('aktif');
//         }
//     }
//     if (baglantilar){
//         const rect=baglantilar.getBoundingClientRect();
//         if(rect.top<ekranYuksekligi-50&&rect.bottom>0){
//             baglantilar.classList.add('aktif');
//         } else if (rect.top>ekranYuksekligi||rect.bottom<0){
//             baglantilar.classList.remove('aktif');
//         }
//     }
// });

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