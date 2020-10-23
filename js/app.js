class Expense{
	constructor(name, date, amount){
		this.name = name;
		this.date = date;
		this.amount = amount;
	}
}

const Model = {
	getData: function(){
		let expenses;
		if(localStorage.getItem('expenses') === null){
			expenses = [];
		}else{
			expenses = JSON.parse(localStorage.getItem('expenses'));
		}
		return expenses;
	},
	setData: function(expense){
		let expenses = Model.getData();
		console.log(expenses);
		expenses.push(expense);
		localStorage.setItem('expenses', JSON.stringify(expenses));
	}
}


const ModelView = {
	showItems: function(){
		return Model.getData();
	}
}

const View = {
	init: function(){
		const form = document.querySelector('#form');
		form.addEventListener('submit', (e)=>{
			const eName = document.querySelector('.eName').value;
			const eDate = document.querySelector('.eDate').value;
			const eAmount = document.querySelector('.eAmount').value;
			e.preventDefault();

			let expense = new Expense(eName, eDate, eAmount);

			if(eName === '' || eDate === '' || eAmount === ''){
				alert('Please fill all blanks!')
			}else{
				this.addExpenseToList(expense);
				Model.setData(expense);
			}

		});
		document.addEventListener('DOMContentLoaded', View.displayExp)
	},
	displayExp: function(){
		const expenses = Model.getData();
		expenses.forEach((item) => View.addExpenseToList(item));
	},
	addExpenseToList: function(expense){
		const tBody = document.querySelector('tbody');
		const tr = document.createElement('tr');
		tr.innerHTML = `
			<td>${expense.name[0].toUpperCase() + expense.name.slice(1)}</td>
			<td>${expense.date}</td>
			<td>$${expense.amount}</td>`;

		tBody.appendChild(tr);
		this.checkTable();

	},
	removeExp: function(){

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

