html += `
<div class="card">
  <img src="${p.image || 'https://via.placeholder.com/200'}" 
       style="width:100%; height:200px; object-fit:cover;">
  <h3>${p.name}</h3>
  <p>Rs. ${p.price}</p>
  <p>${p.desc}</p>
</div>
`;
