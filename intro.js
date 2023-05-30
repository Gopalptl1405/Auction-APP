const response = fetch("https://gauravgitacc.github.io/postAppData/auctionData.json");
console.log(response);
response.then((serverResponse)=>{
    const result = serverResponse.json();
    result.then((data)=>{
        addDataOnUI(data);
        // console.log(data)
    }).catch((error)=>{
        alert("Something Error");
    });
}).catch((error)=>{
    alert("Something error in api. ");
});

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://gauravgitacc.github.io/postAppData/auctionData.json", requestOptions)
//     .then(response => response.json())
//     .then(result => addDataOnUI(result))
//     .catch(error => console.log('error', error));

const container = document.getElementsByClassName("card-container")[0];

function addDataOnUI(ResultList){
    for(let i=0; i < ResultList.length; i++){
        let AuctionData = ResultList[i];
        const innerCard = `
      <div class="top">
          <div class="status">
              <b class="status-chip ${AuctionData.status.toLowerCase()}">${AuctionData.status}</b>
              <span class="case-number">${AuctionData.caseNumber}</span>
          </div>
          <div class="date">${AuctionData.date}</div>
      </div>
      <div class="bottom">
          <div class="from-location">${AuctionData.fromLocation}</div>
          <div class="to-location">${AuctionData.toLocation}</div>
      </div>
      <div class="price">${AuctionData.fare}</div>
      `;
    
      const mainContainer = document.createElement("div");
      mainContainer.className="main-container";
      mainContainer.innerHTML = innerCard;
      container.append(mainContainer);

    }
};