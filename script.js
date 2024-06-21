const body = document.querySelector("body");

// nav

const nav = document.createElement("nav");
body.appendChild(nav);

const img = document.createElement("img");
img.setAttribute("src", "https://test.kakastech.com/public/frontEnd/images/kaka.png");
img.setAttribute("alt", "Web-Logo");
img.setAttribute("class", "logo");
nav.appendChild(img);

const ul = document.createElement("ul");
nav.appendChild(ul);

const a = document.createElement("a");
ul.appendChild(a);
a.setAttribute("href", `#`);
a.textContent=`Home`

const a1 = document.createElement("a");
ul.appendChild(a1);
a1.setAttribute("href", `#`);
a1.textContent=`About Us`

const a2 = document.createElement("a");
ul.appendChild(a2);
a2.setAttribute("href", `#`);
a2.textContent=`Our Team`

const a3 = document.createElement("a");
ul.appendChild(a3);
a3.setAttribute("href", `#`);
a3.textContent=`Gallery`

const a4 = document.createElement("a");
ul.appendChild(a4);
a4.setAttribute("href", `#`);
a4.textContent=`Contact Us`

const a5 = document.createElement("a");
ul.appendChild(a5);
a5.setAttribute("href", `#`);
a5.setAttribute("class", `GFQ`);
a5.textContent=`GET A FREE QUOTE`

// outer

const outer = document.createElement("div");
outer.setAttribute("id", "container");
body.appendChild(outer);

const intro = document.createElement("h2");
outer.appendChild(intro);
intro.setAttribute("class", "intro");
intro.textContent=`introduction`

const row = document.createElement("div");
row.setAttribute("class", "row");
outer.appendChild(row);

const text = document.createElement("p");
text.setAttribute("class", "title");
text.textContent=`Creating Possibilities Through Technology`
row.appendChild(text);

const text2 = document.createElement("p");
text2.textContent=`Welcome to Kaka's Tech Pvt. Ltd., your dependable source for comprehensive IT solutions in the areas of networking, web development, CCTV surveillance, and digital marketing. We've been helping since 2078 with a constant dedication to innovation and a passion for moving businesses ahead. Our path is characterized by a keen appreciation of technology's potential and a commitment to turning obstacles into chances.`
text2.setAttribute("class", "text");
row.appendChild(text2);


const row1 = document.createElement("div");
row1.setAttribute("class", "row-sector");
body.appendChild(row1);

const sector = document.createElement("a");
sector.setAttribute("class", "sector");
row1.appendChild(sector);

const cntr = document.createElement("div");
cntr.setAttribute("class", "cntr");
sector.appendChild(cntr);

const imgsector = document.createElement("img");
imgsector.setAttribute("id", "img-sector-1");
imgsector.setAttribute("src", "https://test.kakastech.com/storage/app/public/images/TlxfHQs2Qm62hSK5HBhlkwVImHEL70eOyNPI02Vt.jpg");
cntr.appendChild(imgsector);

const content = document.createElement("a");
content.setAttribute("class", "content");
content.textContent=`Website Development`
sector.appendChild(content);

const sector1 = document.createElement("a");
sector1.setAttribute("class", "sector");
row1.appendChild(sector1);

const cntr1 = document.createElement("div");
cntr1.setAttribute("class", "cntr");
sector1.appendChild(cntr1);

const imgsector1 = document.createElement("img");
imgsector1.setAttribute("id", "img-sector-2");
imgsector1.setAttribute("src", "https://test.kakastech.com/storage/app/public/images/F2ZP1uOB9WUm2IcFni03yOIEbRNDZ8cPjdnSOJN7.jpg");
cntr1.appendChild(imgsector1);

const content1 = document.createElement("a");
content1.setAttribute("class", "content");
content1.textContent=`Networking`
sector1.appendChild(content1);

const sector2 = document.createElement("a");
sector2.setAttribute("class", "sector");
row1.appendChild(sector2);

const cntr2 = document.createElement("div");
cntr2.setAttribute("class", "cntr");
sector2.appendChild(cntr2);

const imgsector2 = document.createElement("img");
imgsector2.setAttribute("id", "img-sector-3");
imgsector2.setAttribute("src", "https://test.kakastech.com/storage/app/public/images/64SNoJ53eRbLISeYMBVwi4xJviahLe6wOFo8wfpp.jpg");
cntr2.appendChild(imgsector2);

const content2 = document.createElement("a");
content2.setAttribute("class", "content");
content2.textContent=`Photography`
sector2.appendChild(content2);

const sector3 = document.createElement("a");
sector3.setAttribute("class", "sector");
row1.appendChild(sector3);

const cntr3 = document.createElement("div");
cntr3.setAttribute("class", "cntr");
sector3.appendChild(cntr3);

const imgsector3 = document.createElement("img");
imgsector3.setAttribute("id", "img-sector-4");
imgsector3.setAttribute("src", "https://test.kakastech.com/storage/app/public/images/brmD8QtboakNoqdWJonQ4wfpp0jvwdKy9fesLhgq.jpg");
cntr3.appendChild(imgsector3);

const content3 = document.createElement("a");
content3.setAttribute("class", "content");
content3.textContent=`Digital Branding`
sector3.appendChild(content3);

const rowau = document.createElement("div");
rowau.setAttribute("class", "row-au");
body.appendChild(rowau);

const au = document.createElement("a");
au.setAttribute("class", "about");
au.textContent=`About Us`
rowau.appendChild(au);
