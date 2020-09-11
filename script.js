function filterData(category) {
    //console.log(category);
    const data = category.slice(0,5);
    //console.log(data);
    renderBarChart(data)
    

}

let attractions; 
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
        attractions = data;
        attractions.sort(function (a, b) {
            return b.Visitors - a.Visitors;
          });
        //console.log('attractions - (a)', attractions);
  })
  .then((responseJson) => {
      filterData(attractions);
    let select = document.querySelector('.form-control');
    select.addEventListener('change', (event) => {
        //console.log('CHANGED');
        //console.log(event.target.value);
        if (event.target.value != "all"){
            let filteredAttractions = attractions.filter(function(attractions){
                //console.log(attractions.Category)
                return attractions.Category === event.target.value
            }); 
            //console.log(filteredAttractions);
            filterData(filteredAttractions);
        } else {
            filterData(attractions);
        }
        
  });
  })
    //filterData(attractions)});
  //console.log('attractions - (b)', attractions) 



// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category