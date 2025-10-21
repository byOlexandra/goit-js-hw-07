const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
let count = 0;
for (const item of items) {
    count++;
}
console.log(`Number of categories: ${count}`);

for (const item of items) {
    let title = item.querySelector("h2").textContent;
    const el =item.querySelectorAll("li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${el}`);
    
}

