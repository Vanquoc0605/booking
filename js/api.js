const urlTable = "http://localhost:3000/tables";
const urlPayBill = "http://localhost:3000/pay_bill";


async function getAll(url, callback) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error( "lỗi:", error);
    }
}

function edit(url,object) {
    fetch(`${url}/${object.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Đơn hàng đã được cập nhật', data);
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}

function deleted(url,id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {      
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}
