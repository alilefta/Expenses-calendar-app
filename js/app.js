const View = {
	init: function(){
		const form = document.querySelector('#form');
		const eName = document.querySelector('.eName');
		const eDate = document.querySelector('.eDate');
		const eAmount = document.querySelector('.eAmount');
		const tBody = document.querySelector('tbody');
		const noItems = document.querySelector('.noItems');

		form.addEventListener('submit', (e)=>{
			e.preventDefault();
			console.log(eName.value)
			if(eName.value && eDate.value && eAmount.value){
				const tr = document.createElement('tr');
				tr.innerHTML = `
					<td>${eName.value[0].toUpperCase() + eName.value.slice(1)}</td>
					<td>${eDate.value}</td>
					<td>$${eAmount.value}</td>`;

				tBody.appendChild(tr);
				this.checkTable();
			}else{
				alert('Please fill all blanks!')
			}

		});
	},
	checkTable: function(){
		const tBody = document.querySelector('tbody');
		const noItems = document.querySelector('.noItems');
		if(tBody.children.length > 1){
			noItems.style.display = 'none';
		}
	}
};

View.init();

