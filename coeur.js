let tit=document.getElementById         ("title");
let contenaire=document.querySelector(".contenaire");
let loader=document.querySelector(".loader")
let but=document.getElementById("but");
let son=document.getElementById("theme");
document.addEventListener("scroll",()=>{
  son.play();
  });
let mesId=["UCO3Q7AbfRxLGzVjQCoWNhxg","UC8oEsOfn7df-2WLETDTYpGg"];
let current=1;
async function getchannel(id) {
  const apiKey = "AIzaSyDbDR_MRZ0nX-KffMdDzAOqeBzekDN5Ing";
  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${id}&key=${apiKey}`;
  
  const res = await fetch(url);
  const data = await res.json();
  const channel = data.items[0];
  return {
    name: channel.snippet.title,
    avatar: channel.snippet.thumbnails.high.url,
    subscribers: channel.statistics.subscriberCount
  };
}
 const fullElement = async (id, img, chaine,count) => {
  let elements = await getchannel(id);
  img.src = elements["avatar"];
  chaine.innerText = elements["name"];
  count.innerText =`(${elements["subscribers"]} subscribers)`;
  
}


const page_1 = () => {
  //block important
  let item1 = document.createElement("div");
  let item2 = document.createElement("div");
  //sous element
  let img = document.createElement("img");
  let img_tit = document.createElement("p");
  let corp = document.createElement("p");
  let copy = document.createElement("p");
  //valeur
  img.setAttribute("src", "profil.jpg");
  img_tit.innerText = "CEO OF OPENMIND";
  corp.innerHTML = "Je suis iloki salem un jeune<br> developper de seulement 17<br>ans Je suis élève en TC mais<br>je voie plus loin qu'un simple<br>";
  copy.innerHTML = "&copy;2025"
  //style
  item1.classList.add("item", "item1");
  item2.classList.add("item", "item2");
  contenaire.classList.remove("contenaire_2", "contenaire_3","contenaire_4");
  
  item1.append(img, img_tit);
  item2.append(corp, copy);
  contenaire.append(item1, item2);
  tit.innerText = "Mon portefolio";
  
}
const page_2 = async () => {
  //loader
  contenaire.appendChild(loader);
  loader.style.display="block";
  //block important
  let item1 = document.createElement("div");
  let item2 = document.createElement("div");
  //sous element
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");
  let data1 = document.createElement("div")
  let data2 = document.createElement("div");
  let name1 = document.createElement("p");
  let name2 = document.createElement("p");
  let count1 = document.createElement("p");
  let count2 = document.createElement("p");
  //valeur
  await fullElement(mesId[0], img1, name1, count1);
  await fullElement(mesId[1], img2, name2, count2);
  //style
  item1.classList.add("item_2");
  item2.classList.add("item_2");
  img1.classList.add("img_2");
  img2.classList.add("img_2");
  count1.classList.add("credit");
  count2.classList.add("credit");
  contenaire.classList.add("contenaire_2");
  data1.append(name1, count1);
  data2.append(name2, count2)
  item1.append(img1, data1);
  item2.append(img2, data2);
  contenaire.append(item1, item2);
  tit.innerText = "Mes Comptes";
  //loader
  loader.style.display = "none";
  
}
const page_4=()=>{
//block
  let item1 = document.createElement("div");
  let item2 = document.createElement("div");
  let item3 = document.createElement("div");
// sous elements
  let projet1=document.createElement("div");
  let projet2=document.createElement("div");
  let projet3=document.createElement("div");
  let img1=document.createElement("img");
  let img2=document.createElement("img");
  let img3=document.createElement("img");
  let name1=document.createElement("p");
  let name2=document.createElement("p");
  let name3=document.createElement("p");
  
  let info1=document.createElement("div");
  let info2=document.createElement("div");
  let info3=document.createElement("div");
  
// valeur
  img1.setAttribute("src","school.jpeg");
  img2.setAttribute("src","pencil.jpg");
  img3.setAttribute("src","note.jpg");
  name1.innerText="YourSchool";
  name2.innerText="Lexigo";
  name3.innerText="OpenNote";
  info1.innerHTML=`<p> <span class="head">concept </span>: bibliothéque de <br>sujet en ligne </p> <span class="head">progress : </span> <div class="progress"> <div class="progress-bar half"></div>
    </div><p><span class="head">status</span>
   : echec</p>`;
  info2.innerHTML = `<p> <span class="head">concept </span>: correction ia <br>pour personne agé </p> <span class="head">progress : </span> <div class="progress"> <div class="progress-bar high"></div>
    </div><p><span class="head">status</span>
   : success</p>`;
   info3.innerHTML = `<p> <span class="head">concept </span>: avenir </p> <span class="head">progress : </span> <div class="progress"> <div class="progress-bar low"></div>
    </div><p><span class="head">status</span>
   : en cours</p>`;
// style
  item1.classList.add("item_3");
  item2.classList.add("item_3");
  item3.classList.add("item_3");
  projet1.classList.add("project");
  projet2.classList.add("project");
  projet3.classList.add("project")
  img1.classList.add("img_4");
  img2.classList.add("img_4");
  img3.classList.add("img_4");
  info1.classList.add("info");
  info2.classList.add("info");
  info3.classList.add("info");
  contenaire.classList.add("contenaire_4");
  
  projet1.append(img1,name1);
  projet2.append(img2,name2);
  projet3.append(img3,name3);
  item1.append(projet1,info1);
  item2.append(projet2,info2);
  item3.append(projet3,info3);
  contenaire.append(item1,item2,item3);
  tit.innerText="Mes projets";
 }
const page_3 = () => {
  //block
  let item1 = document.createElement("div");
  let item2 = document.createElement("div");
  let item3 = document.createElement("div");
  // sous elements
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");
  let img3 = document.createElement("img");
  let q1 = document.createElement("blockquote");
  let q2 = document.createElement("blockquote");
  let q3 = document.createElement("blockquote");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let credit1 = document.createElement("p");
  let credit2 = document.createElement("p");
  let credit3 = document.createElement("p");
  // valeur
  img1.setAttribute("src", "master.jpeg");
  img2.setAttribute("src", "jobs.jpeg");
  img3.setAttribute("src", "paint.jpeg");
  p1.innerHTML = "Crois au seigneur Jesus et tu   <br>saura sauvé toi et ta famille....";
  p2.innerHTML = "<p>Ceux qui sont assez fou pour <br> croire qu'il vont changer le  <br>monde sont ceux qui le font.";
  p3.innerHTML = "J 'ai offencé Dieu et les homme <br> car mon travail n 'a pas atteint <br > la qualité qu 'il aurait due";
  credit1.innerText = "-JESUS CHRIST";
  credit2.innerText = "-Steves Jobs";
  credit3.innerText = "-Leonard De Vinvi";
  // style
  item1.classList.add("item_3");
  item2.classList.add("item_3");
  item3.classList.add("item_3");
  img1.classList.add("img_3");
  img2.classList.add("img_3");
  img3.classList.add("img_3");
  credit1.classList.add("credit");
  credit2.classList.add("credit");
  credit3.classList.add("credit");
  contenaire.classList.add("contenaire_3");
  q1.append(p1, credit1);
  q2.append(p2, credit2);
  q3.append(p3, credit3);
  item1.append(img1, q1);
  item2.append(img2, q2);
  item3.append(img3, q3);
  contenaire.append(item1, item2, item3);
  tit.innerText = "Mes Moteurs";
} 
const vider =()=>{
  contenaire.innerHTML="";
  }
but.addEventListener("click",()=>{
   vider();
  switch(current){
    case 1 :
            current=2;
            page_2();
            break;
    case 2 :
            current=3;
            page_3();
            break;
    case 3 :
            current=4;
            page_4();
            break;
    case 4:
            current = 1;
            page_1();
            break;       
            }
  
});
        
page_1();
        