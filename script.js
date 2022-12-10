console.log('https://docs.google.com/spreadsheets/d/1gMaEtqWBBgGrBe9BiQ6FQLGkNqxlVLF82aYEipOD1Qk/edit#gid=0')
const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=o2SaDVYbwX0--rO9_fBkS5Rp9uYr5QF-T39SKMiUCqVBsj1U7J50LkTFJQiUliMHqaiMgRJC2UOb9aDTSq7rMON1k6kWr9yim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD3nHksAN6kqtPySdrGnN-NUGF_SBKiQRcFoTgOesBL6GQz51BjwhdegpyN_OzT4rrT7xPxJ9BZKUJvgtV3OVo-neKymxdPvGdz9Jw9Md8uu&lib=MbboU7QvF-8hGwFWiV9ugkR4b90P6tkZ3';
fetch(url)
	.then(function(response){return response.json();})
	.then(function(json){ for(const entry of json){ createJournal(entry); } })

function createJournal(j){
	const getDay = whatDay(j.Date);
	const dateText = getDay+', '+j.Date;
	const dayText = dayCounter(j.Date);
	j.Rating = j.Rating || 0;
	const RatingText = `${j.Rating} &frasl; 5`;
	let noteText = j.Notes;

	const row = document.createElement('div');
	// getDay=='Fri' ? row.className = 'row classday' : row.className='row'// check if today is Friday
	row.className='row'
	document.getElementById('journal').appendChild(row);

	const infoCont = document.createElement('div');
	infoCont.className = 'infoCont';
	row.appendChild(infoCont);

	const infoContChildren = [ [dateText,'date'], [dayText,'day'], [RatingText,'rating'] ];
	const infoContFrag = new DocumentFragment();
	for (const childInfo of infoContChildren) {
  	let fragment = document.createElement('p');
  	fragment.innerHTML = childInfo[0];
  	fragment.className = 'cell info '+childInfo[1];
  	infoContFrag.append(fragment);
	}
	infoCont.append(infoContFrag);
	
	const notes = document.createElement('p');
	notes.innerHTML = noteFormat(noteText);
	notes.className = 'cell notes';
	row.appendChild(notes);	
}

function noteFormat(rawString){
	rawString = listfy(rawString);
	rawString = addTabs(rawString);
	// here add more note formatting functions later

	rawString = linkify(rawString);
	return rawString;
}

function listfy(inputText) {
	inputText = replaceAll(inputText, '--', '</li>');
	inputText = replaceAll(inputText, '- ', '<li>');
	return inputText;
}

function linkify(inputText) {
    let replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#()\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2></a>');

    return replacedText;
}

function addTabs(inputText){
	inputText = replaceAll(inputText, '<tab>', '<span class="tab"></span>');
	return inputText;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// get day from date
function whatDay(date){ 
	date = dateFormat(date);
	return date.toLocaleDateString('en-US', { weekday: 'short' } ) 
};

function dateFormat(string){
  let indiv = string.split('/');
	let y = indiv[2];
	let m = indiv[0]-1;
	let d = indiv[1];
	return new Date(y, m, d);
}

// count weeks and days since the first day of thesis
function dayCounter(date){
	let from = dateFormat('09/02/2022');
	let now = dateFormat(date);
	let dayPassed = Math.round( Math.abs( (now - from) / (1000 * 60 * 60 * 24) ) )+1;
	let weekPassed = Math.ceil(dayPassed/7);
	return `Week ${weekPassed}, <span class='nobr'>Day ${dayPassed}</span>`;
}
