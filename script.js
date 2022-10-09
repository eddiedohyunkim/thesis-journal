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

// console.log(journal[0]);
request()
function request(){
	// get 80 search results of ( "asian male" face ) from page 1 and page 2, filter landscape orientation only 
	const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=o2SaDVYbwX0--rO9_fBkS5Rp9uYr5QF-T39SKMiUCqVBsj1U7J50LkTFJQiUliMHqaiMgRJC2UOb9aDTSq7rMON1k6kWr9yim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD3nHksAN6kqtPySdrGnN-NUGF_SBKiQRcFoTgOesBL6GQz51BjwhdegpyN_OzT4rrT7xPxJ9BZKUJvgtV3OVo-neKymxdPvGdz9Jw9Md8uu&lib=MbboU7QvF-8hGwFWiV9ugkR4b90P6tkZ3';
	fetch(url)
	.then(function(response){return response.json();})
	.then(function(json){getJournalData(json);})
}

function getJournalData(data) {
	console.log(data);
	for(let i=0; i<data.length; i+=1){
		createJournal(data[i], i);
	}
}

function createJournal(x, n){
	let getInitial = x.Day[0];
	let getDate = x.Date; 
	const dateText = getInitial+'–'+getDate;
	const dayText = x.Time;
	const RatingText = x.Rate;
	const noteText = x.Notes;

	console.log(dateText);

	const row = document.createElement('div');
	row.setAttribute('id','row'+n);
	let friday = dateText.startsWith('F');
	friday ? row.setAttribute('class','row classday') : row.setAttribute('class','row')
	document.getElementById('journal').appendChild(row);


	const infoCont = document.createElement('div');
	infoCont.setAttribute('id',`row${n}infoCont`);
	infoCont.setAttribute('class','infoCont');
	document.getElementById('row'+n).appendChild(infoCont);
	
	const date = document.createElement('div');
	date.innerHTML = dateText;
	date.setAttribute('class', 'cell info date');
	document.getElementById(`row${n}infoCont`).appendChild(date);
	
	const day = document.createElement('div');
	day.innerHTML = dayText;
	day.setAttribute('class', 'cell info day');
	document.getElementById(`row${n}infoCont`).appendChild(day);
	
	const grading = document.createElement('div');
	grading.innerHTML = RatingText;
	grading.setAttribute('class', 'cell info mood');
	document.getElementById(`row${n}infoCont`).appendChild(grading);
	
	const notes = document.createElement('div');
	notes.innerHTML = noteText;
	notes.setAttribute('class', 'cell notes');
	document.getElementById('row'+n).appendChild(notes);




}






// for(let i=0; i<journal.length; i+=1){
// 	createRow(journal[i], i)
// }
// function createRow(e, n){
// 	// const container = document.;
// 	const row = document.createElement('div');
// 	row.setAttribute('id',n);

// 	let friday = e.date.startsWith('F');
// 	friday ? row.setAttribute('class','row classday') : row.setAttribute('class','row')

// 	document.getElementById('journal').appendChild(row);


// 	const infoCont = document.createElement('div');
// 	infoCont.setAttribute('id','info'+n);
// 	infoCont.setAttribute('class','infoCont');
// 	document.getElementById(n).appendChild(infoCont);
	
// 	const date = document.createElement('div');
// 	date.innerHTML = e.date;
// 	date.setAttribute('class', 'cell info date');
// 	document.getElementById('info'+n).appendChild(date);
	
// 	const day = document.createElement('div');
// 	day.innerHTML = e.day;
// 	day.setAttribute('class', 'cell info day');
// 	document.getElementById('info'+n).appendChild(day);
	
// 	const grading = document.createElement('div');
// 	grading.innerHTML = e.grading;
// 	grading.setAttribute('class', 'cell info mood');
// 	document.getElementById('info'+n).appendChild(grading);
	
// 	const notes = document.createElement('div');
// 	notes.innerHTML = e.notes;
// 	notes.setAttribute('class', 'cell notes');
// 	document.getElementById(n).appendChild(notes);
// }