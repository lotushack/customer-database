console.log(customers);
function createCustomerListItem (customerObj){


const template = `

    <div class= "indv">
      <div class ="thumbnail"><img src="${customerObj.picture.large}">

      <h3>${customerObj.name.first} ${customerObj.name.last}</h3>
      <h5>${customerObj.email}</h5>
      </div>

      <p>${customerObj.location.street}</p>
      <p>${customerObj.location.city} ${customerObj.location.state} ${customerObj.location.postcode}</p>
      <p>${customerObj.phone}</p>
       <br />

      <p>${customerObj.id.value}</p>

    </div>

`
return template;
}


let allHTML = "";

customers.results.forEach(function (item, idx, arr){
  allHTML += createCustomerListItem(item);
  console.log(allHTML);
})
const customersDOM = document.querySelectorAll('.customers')[0]
customersDOM.innerHTML = allHTML;
