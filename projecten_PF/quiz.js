// JavaScript Document
//Quiz van de week
//oorspronkelijk Javascript object gebruik JSON.stringfy om te conevreteren nr JSON
//de .json file moet dan een var bevatten waar het hele json object nogmaals in (enkele) aanhalingstekens staat

//bron voor de aanmaak van een sjon string
var oQuiz = {
		
		datum:"2012-02-28",
		vragen: [
			{
				vraag:"Welke film won de oscar voor beste buitenlandse film?",
				antwoorden:["Rundskop","In Darkness","A separation","Footnote"],
				correct:2,
				tekst:"<em>A separation</em> is de eerste Iraans film die een Oscar wint. De film gaat over een echtscheiding in het huidige Iran",
				media:"oscar.jpg",
				url: "http://oscar.go.com/"
			},
			
			{
				vraag:"Wie won in 2011 de Ronde van Vlaanderen?",
				antwoorden:["Nick Nuyens","Tom Boonen","Philippe Gilbert","Fabian Cancellara"],
				correct:0,
				tekst:"In de sprint won <em>Nuyens</em> het van Chavanel en Cancellara, terwijl Boonen sterk kwam opzetten maar strandde op een vierde plaats",
				url: "http://www.rondevanvlaanderen.be"
			},
			
			{
				vraag:"De Belgische regeringsformatie brak alle vorige records qua duurtijd, na hoeveel dagen na de verkiezing was er een regering?",
				antwoorden:[356,485,510,541],
				correct:3,
				tekst:"Deze formatie was de langstdurende formatie ooit in Belgi&euml; en duurde <em>541</em> dagen. Het eerdere Belgische record van 194 dagen werd op 25 december 2010 verbroken,",
			},
			
			{
				vraag:"De winter 2011-2012 kende toch een lange vorstperiode met 14 opeenvolgende ijsdagen. De vorige winter, 2010-2011, kende in totaal hoeveel ijsdagen?",
				antwoorden:[5, 8, 11, 15],
				correct:3,
				tekst:"De laatste maand van 2010 was zeer koud met veel sneeuw. Te Ukkel bedroeg het aantal ijsdagen over de gehele winter 2010-2011 <em>15</em> dagen.",
				media:"ijs.jpg"
			},
			
			{
				vraag:"In China is 2012 het jaar van",
				antwoorden:["het varken ","de draak","de slang","de rat"],
				correct:1,
				tekst:"<em>2012 is het jaar van de draak</em>. De mensen die in het jaar van de draak geboren zijn, zijn levendige mensen die to the point zijn.  Ze zijn ook trots, vol enthousiasme en hebben zin in het leven.",
				media:"china.jpg"
			}
]
}