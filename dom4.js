// let itJobs = ['Web Developer', 'System Analis', 'Network Engineer', 'System Engineer'];
// console.log(`Panjang Data ${itJobs.length}`);
// console.log(`Pekerjaan IT : ${itJobs}`)

// document.write(`<h2 style = "color : blue">5 Pekerjaan di bidang IT:</h2>`)
// for(i = 0; i <itJobs.length; i++){
//     document.write(`<li>${itJobs[i]}</li>`);
// }

let ingredients = ['2 bungkus jamur tiram','1/2 papan tempe','4 siung bawang merah','3 siung bawang putih','5 buah cabai hijau','saus tiram','kaldu jamur','garam dan gula'];
console.log(ingredients.length)
let howToMake = ['1. Cuci bersih jamur, siangi, sisihkan',
                '2. Goreng tempe setengah kering. Sisihkan',
                '3. Tumis dua bawang dan cabai sampai harum, masukkan jamur, aduk rata, tambahkan saus tiram, kaldu jamur, gula dan garam. Aduk rata',
                '4. Masukkan tempe, beri sedikit air, masak sampai bumbu meresap. Angkat dan sajikan.'

];
console.log(howToMake.length)

let titleTag = document.createElement('h1');
let titleContent = document.createTextNode('RESEP TUMIS JAMUR TIRAM');
titleTag.appendChild(titleContent);
document.getElementById('resep').appendChild(titleTag);
var titleId = document.getElementsByTagName('h1')[0];
    titleId.id = 'title'
    document.getElementById('title').style.borderBottom = '1px solid grey'

    document.write(`<h3 style = "color : blue">Bahan-Bahan:</h3>`)
for(i = 0; i <ingredients.length; i++){
    document.write(`<li>${ingredients[i]}</li>`);
}
document.write(`<h3 style = "color : blue">Cara Pembuatan:</h3>`)
for(i = 0; i <howToMake.length; i++){
    document.write(`<ul>${howToMake[i]}</ul>`);
}

let imgTag = document.createElement('img');
var imgId = document.getElementsByTagName('img');
imgTag.id = 'recipId'
imgTag.src = 'jamur.jpg'
imgTag.width = '500'
imgTag.height = '300'
document.write(`<img id="${imgTag.id}" src="${imgTag.src}" style="width:${imgTag.width}; height:${imgTag.height}";>`)

document.getElementById('recipeId').style.marginLeft = '200px';
document.getElementsByTagName('img').style.textAlign = 'center';

    // console.log(imgTag.id)

// var myImage = new Image(300, 300);
// myImage.src = 'jamur.jpg';
// x = document.getElementById("gambar");
// x.appendChild(myImage);	

//     titleTag.appendChild(titleContent);
// document.getElementById('resep').appendChild(titleTag);
    
// 	x = document.getElementById("recipeId");
// 	x.appendChild(myImage);	


// var imgId = document.getElementsByTagName('img')[0];
// console.log(imgTag)
//     imgId.id = 'gambar'
//     console.log(imgId)
