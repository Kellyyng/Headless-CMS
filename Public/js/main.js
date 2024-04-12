// console.log('hello world')

// let obj = {"num1": 60, "num2":20};

// let stringObj = JSON.stringify(obj)
// console.log ("stringObj: ", stringObj);

const company_num = {
    "numb":[
        { "unresolved": "60", "overdue": "16", "open": "43", "onhold": "64"}
    ]
}
let result = company_num.numb[0].unresolved;
console.log("unresolved: ", result);

const para = document.getElementsByClassName("taste")
para.innerHTML = result;
fetch("js/cont.json")
    .then(response => response.json())
    .then(data => {
        const numb = data.numb[0]; // Assuming there's only one object in the "numb" array
        document.getElementById('unresolved').textContent = ` ${numb.unresolved}`;
        document.getElementById('overdue').textContent = `${numb.overdue}`;
        document.getElementById('open').textContent = ` ${numb.open}`;
        document.getElementById('onhold').textContent = `${numb.onhold}`;
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });

      fetch("js/cont.json")
    .then(response => response.json())
    .then(data => {
        const tickets0 = data.tickets[0]; 
        document.getElementById('statusname').textContent = ` ${tickets0.statusname}`;
        document.getElementById('viewdetails').textContent = `${tickets0.viewdetails}`;

        const tickets1 = data.tickets[1]; 
        document.getElementById('statusname1').textContent = ` ${tickets1.statusname}`;
        document.getElementById('viewdetails1').textContent = `${tickets1.viewdetails}`;

        const tickets2 = data.tickets[2]; 
        document.getElementById('statusname2').textContent = ` ${tickets2.statusname}`;
        document.getElementById('viewdetails2').textContent = `${tickets2.viewdetails}`;

        const tickets3 = data.tickets[3]; 
        document.getElementById('statusname3').textContent = ` ${tickets3.statusname}`;
        document.getElementById('viewdetails3').textContent = `${tickets3.viewdetails}`;
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
// async function demoFunction (){
//     try {
//         const navHolder = dcoument.getElementById('taste')
//         const temp = await fetch("js/cont.json")
//         const data = await temp.json();
        
//         data.mainnav.forEach(menuItem =>{
//             const listItem = document.createElement('p');
//             listItem.innerHTML = '<a href = "${menuItem.url}">${menuItem.text}</a>'
//             navHolder.append(listItem); 
//         })
//     }catch(error){
//         console.log('error: ' , error);
//     }
// }
