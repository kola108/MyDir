function createTable(size) {
 const table = document.createElement('table');
 table.style.marginLeft = 'calc(50% - 136px)';
 table.style.marginTop = 'calc(25% - 121px)';
 for (var i = 0; i < size; i++) {
     const tr = document.createElement('tr');
     for (var j = 0; j < size; j++) {
         const td = document.createElement('td');
		let colorR = Math.floor(Math.random() * 256);
	 	let colorG = Math.floor(Math.random() * 256);
	 	let colorB = Math.floor(Math.random() * 256); console.log(colorR + ' colorR ' + colorG + ' colorG ' + colorB + ' colorB ');
	 	let revertColorR = 255 - colorR;
	 	let revertColorG = 255 - colorG;
	 	let revertColorB = 255 - colorB; console.log(revertColorR + ' revertColorR ' + revertColorG + ' revertColorG ' + revertColorB + ' revertColorB ');
         td.textContent = `${i}:${j}`;
         td.style.border = '1px solid black';
         td.style.borderRadius = '50%';
         td.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
         td.style.color = `rgb(${revertColorR}, ${revertColorG}, ${revertColorB})`;
         tr.appendChild(td);
     }
     table.appendChild(tr);
 }
 document.body.appendChild(table);
}

createTable(10);

