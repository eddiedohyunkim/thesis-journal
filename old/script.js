console.log('https://docs.google.com/spreadsheets/d/1gMaEtqWBBgGrBe9BiQ6FQLGkNqxlVLF82aYEipOD1Qk/edit#gid=0')
const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=o2SaDVYbwX0--rO9_fBkS5Rp9uYr5QF-T39SKMiUCqVBsj1U7J50LkTFJQiUliMHqaiMgRJC2UOb9aDTSq7rMON1k6kWr9yim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD3nHksAN6kqtPySdrGnN-NUGF_SBKiQRcFoTgOesBL6GQz51BjwhdegpyN_OzT4rrT7xPxJ9BZKUJvgtV3OVo-neKymxdPvGdz9Jw9Md8uu&lib=MbboU7QvF-8hGwFWiV9ugkR4b90P6tkZ3';
fetch(url)
	.then(function(response){return response.json();})
	.then(function(json){getJournalData(json);})
  

function getJournalData(data) {
	// console.log(data);
	for(let i=0; i<data.length; i+=1){
		createJournal(data[i], i);
	}
	findlink()
}

function createJournal(x, n){
	const getDay = whatDay(x.Date);
	const dateText = getDay+', '+x.Date;
	const dayText = dayCounter(x.Date);
	x.Rating = x.Rating || 0;
	const RatingText = `<sup>${x.Rating}</sup> &frasl; <sub>5</sub>`;
	let noteText = x.Notes;

	// <li> tag
	noteText = replaceAll(noteText, '--', '</li>');
	noteText = replaceAll(noteText, '- ', '<li>');

	const row = document.createElement('div');
	row.id = 'row'+n;
	getDay=='Fri' ? row.className = 'row classday' : row.className='row'// check if today is Friday
	document.getElementById('journal').appendChild(row);

	const infoCont = document.createElement('div');
	infoCont.id = `row${n}infoCont`;
	infoCont.className = 'infoCont';
	document.getElementById('row'+n).appendChild(infoCont);
	
	const date = document.createElement('div');
	date.innerHTML = dateText;
	date.className = 'cell info date';
	document.getElementById(`row${n}infoCont`).appendChild(date);
	
	const day = document.createElement('div');
	day.innerHTML = dayText;
	day.className = 'cell info day';
	document.getElementById(`row${n}infoCont`).appendChild(day);
	
	const rating = document.createElement('div');
	rating.innerHTML = RatingText;
	rating.className = 'cell info rating';
	document.getElementById(`row${n}infoCont`).appendChild(rating);
	
	const notes = document.createElement('div');
	notes.innerHTML = noteText;
	notes.className = 'cell notes';
	document.getElementById('row'+n).appendChild(notes);	
}


function linkify(inputText) {
    let replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank"><i>$1</i></a><span class="link"></span>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2></a><span class="link"></span>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a><span class="link"></span>');

    return replacedText;
}

function findlink() {
	let html = document.getElementById("journal")
	let htmlTxt = html.innerHTML;
	// console.log(htmlTxt);
	let replace = linkify(htmlTxt);
	html.innerHTML = replace;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// get day from date
function whatDay(date){ 
	date = format(date);
	return date.toLocaleDateString('en-US', { weekday: 'short' } ) 
};

function format(string){
  let indiv = string.split('/');
	let y = indiv[2];
	let m = indiv[0]-1;
	let d = indiv[1];
	return new Date(y, m, d);
}

// count weeks and days since the first day of thesis
function dayCounter(date){
	let then = format('09/02/2022');
	let now = format(date);
	let dayPassed = Math.round( Math.abs( (now - then) / (1000 * 60 * 60 * 24) ) )+1;
	let weekPassed = Math.ceil(dayPassed/7);
	return `Week ${weekPassed}, Day ${dayPassed}`;
}