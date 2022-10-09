const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=o2SaDVYbwX0--rO9_fBkS5Rp9uYr5QF-T39SKMiUCqVBsj1U7J50LkTFJQiUliMHqaiMgRJC2UOb9aDTSq7rMON1k6kWr9yim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD3nHksAN6kqtPySdrGnN-NUGF_SBKiQRcFoTgOesBL6GQz51BjwhdegpyN_OzT4rrT7xPxJ9BZKUJvgtV3OVo-neKymxdPvGdz9Jw9Md8uu&lib=MbboU7QvF-8hGwFWiV9ugkR4b90P6tkZ3';
fetch(url)
	.then(function(response){return response.json();})
	.then(function(json){getJournalData(json);})

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
	const RatingText = 'R'+x.Rating;
	const noteText = x.Notes;

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
	
	const rating = document.createElement('div');
	rating.innerHTML = RatingText;
	rating.setAttribute('class', 'cell info rating');
	document.getElementById(`row${n}infoCont`).appendChild(rating);
	
	const notes = document.createElement('div');
	notes.innerHTML = noteText;
	notes.setAttribute('class', 'cell notes');
	document.getElementById('row'+n).appendChild(notes);
}