const journal = [
		{
			date:'F–09–02–2022',
			day:'M1–W1–D1',
			grading:'G8',
			notes:'Thesis Kick-off at UC auditorium. Feel happy to be in Andrew’s section. I presented my presentation. I was nervous. Andrew assigned 256 images project and I was thinking of easy and clever ways to collect all 256.'
		},
		{
			date:'S–09–03–2022',
			day:'M1–W1–D2',
			grading:'G9',
			notes:'Thesis Kick-off at UC auditorium. Feel happy to be in Andrew’s section. I presented my presentation. I was nervous. Andrew assigned 256 images project and I was thinking of easy and clever ways to collect all 256.'
		},
		{
			date:'S–09–04–2022',
			day:'M1–W1–D3',
			grading:'G6',
			notes:'Thesis Kick-off at UC auditorium. Feel happy to be in Andrew’s section. I presented my presentation. I was nervous. Andrew assigned 256 images project and I was thinking of easy and clever ways to collect all 256.'
		},
		{
			date:'M–09–05–2022',
			day:'M1–W1–D4',
			grading:'G8',
			notes:'Thesis Kick-off at UC auditorium. Feel happy to be in Andrew’s section. I presented my presentation. I was nervous. Andrew assigned 256 images project and I was thinking of easy and clever ways to collect all 256.'
		},
		{
			date:'T–09–06–2022',
			day:'M1–W1–D5',
			grading:'G9',
			notes:'Thesis Kick-off at UC auditorium. Feel happy to be in Andrew’s section. I presented my presentation. I was nervous. Andrew assigned 256 images project and I was thinking of easy and clever ways to collect all 256.'
		}
	];

console.log(journal[0]);

for(let i=0; i<journal.length; i+=1){
	createRow(journal[i], i)
}
function createRow(e, n){
	// const container = document.;
	const row = document.createElement('div');
	row.setAttribute('id',n);

	let friday = e.date.startsWith('F');
	friday ? row.setAttribute('class','row class') : row.setAttribute('class','row')

	document.getElementById('journal').appendChild(row);
	
	const date = document.createElement('div');
	date.innerHTML = e.date;
	date.setAttribute('class', 'cell info date');
	document.getElementById(n).appendChild(date);
	
	const day = document.createElement('div');
	day.innerHTML = e.day;
	day.setAttribute('class', 'cell info day');
	document.getElementById(n).appendChild(day);
	
	const grading = document.createElement('div');
	grading.innerHTML = e.grading;
	grading.setAttribute('class', 'cell info mood');
	document.getElementById(n).appendChild(grading);
	
	const notes = document.createElement('div');
	notes.innerHTML = e.notes;
	notes.setAttribute('class', 'cell notes');
	document.getElementById(n).appendChild(notes);
}