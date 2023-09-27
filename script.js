document.querySelector('button').addEventListener('click', function () {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response body as JSON
    })
    .then((data) => {
      console.log('Data:', data);
      const parent = document.querySelector('.tableWrapper');
      
      const table = document.createElement('table');
      table.setAttribute('border', '1');
      table.setAttribute('width', '80%');
      table.setAttribute('cellpadding', '10');
      table.setAttribute('cellspacing', '2');

      const tableRow = document.createElement('tr');
      const tableHeadingOne = document.createElement('th');
      const tableHeadingTwo = document.createElement('th');
      tableHeadingOne.innerText = 'Name';
      tableHeadingTwo.innerText = 'email';

      tableRow.appendChild(tableHeadingOne);
      tableRow.appendChild(tableHeadingTwo);

      table.appendChild(tableRow);

      const newRow = data.map((d)=>{
        console.log(d)
        const newTableRow = document.createElement('tr');
        const TableDataOne = document.createElement('td');
        const TableDataTwo = document.createElement('td');

        TableDataOne.innerText = d.name;
        TableDataTwo.innerText = d.email;

        newTableRow.appendChild(TableDataOne);
        newTableRow.appendChild(TableDataTwo);

        table.appendChild(newTableRow);
      })

      parent.appendChild(table);
    })
    .catch((error) => {
      console.error('Fetch Error:', error);
    });
});