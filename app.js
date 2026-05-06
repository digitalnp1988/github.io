import { db, collection, getDocs } from "./firebase.js";

async function loadProducts(){
const querySnapshot = await getDocs(collection(db, "products"));

let html = "";

querySnapshot.forEach((doc) => {
let p = doc.data();

```
html += `
<div class="card">
  <h3>${p.name}</h3>
  <p>Rs. ${p.price}</p>
  <p>${p.desc}</p>
</div>
`;
```

});

document.getElementById("products").innerHTML = html;
}

loadProducts();
