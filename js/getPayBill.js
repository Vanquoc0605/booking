function displayPayBill(data) {
  var payBill = document.querySelector(".pay_bill");
  data.forEach((element,index) => {
    payBill.innerHTML += `
  <div class="col">
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
      <div class="d-flex align-items-center align-items-center">
        <div class="plus rounded-pill">
          <i class="fa-solid fa-minus"></i>
        </div>
        <h5 class="border border-1 border-black px-2">0</h5>
        <div class="minus rounded-pill">
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
    </div>
  </div>
    `;
  });


}



getAll(urlPayBill, displayPayBill);
