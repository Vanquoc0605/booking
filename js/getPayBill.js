function displayPayBill(data) {
  var payBill = document.querySelector(".pay_bill");
  data.forEach((element,index) => {
    var item = document.createElement('div');
    item.classList.add('col');

    item.innerHTML = `
    <div class="card position-relative">
    <h5
      class="counter position-absolute rounded-pill text-white d-flex justify-content-center align-items-center"
    >
      ${index+1}
    </h5>
    <div class="btn_edit position-absolute">
      <i class="fa-solid fa-pen-to-square"></i>
    </div>
    <h2 class="text-center">${element.foodName}</h2>
    <img
      src=${element.image}
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title text-center">$${element.price}</h5>
      <div class="d-flex justify-content-center align-items-center">
        <div class="minus rounded-pill">
          <i class="fa-solid fa-minus"></i>
        </div>
        <h5 class="border border-1 border-black px-2 mx-2 quantity">0</h5>
        <div class="plus rounded-pill">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
    </div>
    `;
    payBill.appendChild(item);
    let plus = item.querySelector('.plus');
    let minus = item.querySelector('.minus');
    let count = item.querySelector('.quantity');
    plus.addEventListener('click',()=>
    {
   count.innerText = parseInt(count.innerText)+1;
    })

    minus.addEventListener('click',()=>
      {
        if (parseInt(count.innerText)>0)
     count.innerText = parseInt(count.innerText)-1;
      })

  });


}



getAll(urlPayBill, displayPayBill);
