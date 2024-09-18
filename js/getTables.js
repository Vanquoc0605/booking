let idTable; // Declare idTable in the global scope

function getById(id) {
    console.log(id);
    idTable = id;
}

function displayTables(data) {
    var booking = document.querySelector(".booking");

    data.forEach((element) => {
        var image = element.status
            ? "https://cdn-icons-png.flaticon.com/128/3034/3034243.png"
            : "https://cdn-icons-png.flaticon.com/128/531/531153.png";
        var a = element.status
            ? `<button href="#" class="btn btn-success"><i class="fa-solid fa-plus"></i>ADD</button>
                <button href="#" class="btn btn-danger"><i class="fa-solid fa-cart-shopping"></i>CART</button>`
            : `<button href="#" onclick="getById(${element.id})" class="btn btn-warning text-white btn_booking" data-bs-toggle="modal" data-bs-target="#booking"><i class="fa-solid fa-utensils"></i>BOOKING</button>`;

        booking.innerHTML += `
            <div class="col">
                <div class="card" >
                    <img src="${image}" class="card-img-top" alt="..." >
                    <div class="card-body">
                        <h5 class="card-title text-center">${element.customerName}</h5>
                        <div class="d-flex justify-content-evenly">
                            ${a}
                        </div>
                    </div>
                </div>
            </div>`;
    });

    document.querySelector('.btn_send').addEventListener('click', () => {
        let customerName = document.getElementById("customerName").value;
        let quantity = document.getElementById("quantity").value;
        const updateTable = { id: idTable, customerName: customerName, quantity: quantity, status: true};
        edit(urlTable,updateTable);
    });
}





// Call the getAll function to fetch data and call displayTables
getAll(urlTable, displayTables);
