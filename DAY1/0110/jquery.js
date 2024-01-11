/** jQuery
 * $(선택자).동작함수();
 */
/*
//기본 형태
console.log($('#hello').text());
$('#hello').text('안녕히가세요');
$('#hello').css('font-size', '20px');
*/

/*
//jQuery 메소드
//val()
function getValue() {
    let value = $('input').val();
    console.log(value);
}
function setValue() {
    $('input').val('설정완료');
}
//css()
function changeCssJs() {
    //js 코드
    let span = document.querySelector('span');
    span.style = 'font-size:20px; color:red;';
}
function changeCssJquery() {
    //jquery 코드
    // $('span').css('font-size', '40px');
    // $('span').css('color', 'blue');
    $('span').css({ 'font-size': '40px', color: 'blue' });
}
function getCssJquery() {
    console.log($('span').css('color'));
}

//attr()
function changeAttrjs() {
    let a = document.querySelector('a');
    a.setAttribute('href', 'https://www.naver.com');
}
function changeAttrjquery() {
    $('a').attr('href', 'https://thisisneverthat.com');
}

//html()
function changeHtmljs() {
    let p = document.querySelector('.html');
    p.innerHTML = '<p>javascript</p>';
}
function changeHtmljq() {
    $('.html').html('<p>jquery</p>');
}

//요소 추가하기
function appendjs() {
    //항상 기준이 될 dom 가져오기
    let ul = document.querySelector('.colors');
    let li = document.createElement('li'); //<li></li> <-이거 만든 상태임
    li.textContent = '마지막으로 추가된 js';
    ul.append(li);
}
function appendjq() {
    $('.colors').append('<li>마지막으로 추가된 jquery</li>');
}
// 요소 처음으로 올리기
function prependjs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li'); //<li></li> <-이거 만든 상태임
    li.textContent = '처음으로 추가된 js';
    ul.prepend(li);
}
function prependjq() {
    $('.colors').prepend('<li>처음으로 추가된 jquery</li>');
}
//요소 삭제하기
function removejs() {
    let li = document.querySelector('#li2');
    li.remove();
}
function removejq() {
    $('#li2').reomve();
}
//empty()
function emptyjs() {
    let nums = document.querySelector('ul.nums');
    console.log(nums);
    nums.innerHTML = '';
}
function emptyjq() {
    $('ul.nums').empty(); //자식 요소만 사라짐
}
*/
/*
//선택 요소 탐색
function findParent() {
    console.log($('.child2').parent());
}
function findParents() {
    console.log($('.child2').parents());
}
function findNext() {
    console.log($('.child2').next());
}
function findPrev() {
    console.log($('.child2').prev());
}
function findChildren() {
    console.log($('.parent').children());
}
*/

function apple() {
    $('.image').attr('src', 'https://health.chosun.com/site/data/img_dir/2023/06/20/2023062002262_0.jpg');
}
function banana() {
    $('.image').attr('src', 'https://www.healthymummy.com/wp-content/uploads/2016/09/bananan-art-1.jpg');
}
function grape() {
    $('.image').attr(
        'src',
        'https://daily.jstor.org/wp-content/uploads/2020/06/the_great_grape_graft_that_saved_wine_forever_1050x700.jpg'
    );
}
function peach() {
    $('.image').attr('src', 'https://upload.wikimedia.org/wikipedia/en/1/16/Princess_Peach_Stock_Art.png');
}
