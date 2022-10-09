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
			notes:'If you’re looking for a comprehensive list of media queries, this repository is a good resource. If you’re reaction to this is: you should never base your breakpoints on devices!! You have a good point. Justin Avery has a nice post on the possible pitfalls of using device-specific breakpoints. Choosing breakpoints based on your design and not specific devices is a smart way to go. But sometimes you just need a little help getting one particular situation under control.'
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
			notes:'A major component of responsive design is creating the right experience for the right device. With a gazillion different devices on the market, this can be a tall task. We’ve rounded up media queries that can be used to target designs for many standard and popular devices that is certainly worth a read.'
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
	friday ? row.setAttribute('class','row classday') : row.setAttribute('class','row')

	document.getElementById('journal').appendChild(row);


	const infoCont = document.createElement('div');
	infoCont.setAttribute('id','info'+n);
	infoCont.setAttribute('class','infoCont');
	document.getElementById(n).appendChild(infoCont);
	
	const date = document.createElement('div');
	date.innerHTML = e.date;
	date.setAttribute('class', 'cell info date');
	document.getElementById('info'+n).appendChild(date);
	
	const day = document.createElement('div');
	day.innerHTML = e.day;
	day.setAttribute('class', 'cell info day');
	document.getElementById('info'+n).appendChild(day);
	
	const grading = document.createElement('div');
	grading.innerHTML = e.grading;
	grading.setAttribute('class', 'cell info mood');
	document.getElementById('info'+n).appendChild(grading);
	
	const notes = document.createElement('div');
	notes.innerHTML = e.notes;
	notes.setAttribute('class', 'cell notes');
	document.getElementById(n).appendChild(notes);
}