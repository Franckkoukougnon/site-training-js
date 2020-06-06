//Get #pageContent element
let pageContent = document.getElementById('pageContent');
//get #pictInfo div
let pictInfo = document.getElementById('pictInfo');
//Define the images array
let rawImages = '[{"filename":"image-1.jpg","name":"Plage de Bretagne","author":"Damien Bruyndo' +
        'nckx","exposure":"100 ISO - 18 mm - f/22 - 302 Sec"},{"filename":"image-2.jpg"' +
        ',"name":"Cadre dans le cadre","author":"Damien Bruyndonckx","exposure":"200 IS' +
        'O - 150 mm - f/10 - 1/320 Sec"},{"filename":"image-3.jpg","name":"Vigie minéra' +
        'le","author":"Damien Bruyndonckx","exposure":"100 ISO - 59 mm - f/13 - 1/250 S' +
        'ec"},{"filename":"image-4.jpg","name":"Les cheveux du ciel","author":"Damien B' +
        'ruyndonckx","exposure":"100 ISO - 18 mm - f/22 - 531 Sec"},{"filename":"image-' +
        '5.jpg","name":"Prendre le large","author":"Damien Bruyndonckx","exposure":"100' +
        ' ISO - 128 mm - f/11 - 1/250 Sec"},{"filename":"image-6.jpg","name":"Maman les' +
        ' p\'tits bateaux","author":"Damien Bruyndonckx","exposure":"100 ISO - 150 mm -' +
        ' f/28 - 1/320 Sec"},{"filename":"image-7.jpg","name":"L\'ombre des palmiers","' +
        'author":"Damien Bruyndonckx","exposure":"100 ISO - 26 mm - f/10 - 1/100 Sec"},' +
        '{"filename":"image-8.jpg","author":"Damien Bruyndonckx","name":"Pont d\'or","e' +
        'xposure":"100 ISO - 37 mm - f/11 - 1/400 Sec"},{"filename":"image-9.jpg","name' +
        '":"L\'ombre assise","author":"Damien Bruyndonckx","exposure":"100 ISO - 24 mm ' +
        '- f/5 - 1/200 Sec"},{"filename":"image-10.jpg","name":"Au bout de l\'ombre","a' +
        'uthor":"Damien Bruyndonckx","exposure":"200 ISO - 150 mm - f/6.3 - 1/320 Sec"}' +
        ',{"filename":"image-11.jpg","name":"CA Capitol","author":"Damien Bruyndonckx",' +
        '"exposure":"200 ISO - 39 mm - f/10 - 1/640 Sec"},{"filename":"image-12.jpg","n' +
        'ame":"Soleil tropical","author":"Damien Bruyndonckx","exposure":"100 ISO - 20 ' +
        'mm - f/11 - 1/80 Sec"},{"filename":"image-13.jpg","name":"Reflet urbain","auth' +
        'or":"Damien Bruyndonckx","exposure":"200 ISO - 39 mm - f/13 - 1/200 Sec"},{"fi' +
        'lename":"image-14.jpg","name":"Lucide?","author":"Damien Bruyndonckx","exposur' +
        'e":"200 ISO - 70 mm - f/8.0 - 1/100 Sec"}]';
let images = JSON.parse(rawImages);

//Choose a random image
let randomImage = images[Math.floor(Math.random() * images.length)];

//apply the image as the background of pageContent
pageContent.style.backgroundImage = `url(/images/${randomImage.filename})`;

//Empty the pictInfo div
if (pictInfo) {

    while (pictInfo.firstChild) {
        pictInfo.removeChild(pictInfo.firstChild)
    }

    //je cree Pictinfo
    console.log(randomImage);
    let picTitle = document.createElement('h1');
    let picTitleContent = document.createTextNode(randomImage.name);
    picTitle.appendChild(picTitleContent);
    pictInfo.appendChild(picTitle);

    let paraTitle = document.createElement('p');
    let paraTitleContent = document.createTextNode(randomImage.exposure);
    let paraTitle2 = document.createElement('p');
    let paraTitleContent2 = document.createTextNode(randomImage.author);

    paraTitle.appendChild(paraTitleContent);
    pictInfo.appendChild(paraTitle);
    paraTitle2.appendChild(paraTitleContent2);
    pictInfo.appendChild(paraTitle2);

}
