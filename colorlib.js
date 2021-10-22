
window.onscroll = function () {
    if ((window.pageYOffset >= 300 || document.body.scrollTop >= 300)&&($(window).width() > 990)) {
        $('.navbar').css('position', 'fixed');
        $('.navbar').css('background', 'white');
        $('.navbar').css('z-index', '999');
        $('.navbar a').css('color', 'black');
        $('.menu_item:first-child a').css('color', 'blue');
        $('.navbar').css('top', '0');
        $('.navbar').css('height', '60px');
        $('.navbar').css('box-shadow', '0 0 10px var(--gray-border)');
        $('.navbar').css('width', '100vw');
        $('.navbar').css('border', 'none');
        $('.navbar_brand').css('padding-top', '13px');
        $('.menu_item').css('padding-top', '20px');
        $('.menu_item').css('height', '15px');
        $('.menu_item').css('border', 'none');
        $('.navbar').css('transition', '.5s');
    }
    else if ((window.pageYOffset >= 300 || document.body.scrollTop >= 300)&&($(window).width() <= 990)) {
        $('.navbar').css('position', 'fixed');
        $('.navbar').css('background', 'white');
        $('.list_menu').css('background', 'white');
        $('.navbar').css('z-index', '999');
        $('.navbar a').css('color', 'black');
        $('.menu_item:first-child a').css('color', 'blue');
        $('.navbar').css('top', '0');
        $('.navbar').css('height', '60px');
        $('.navbar').css('box-shadow', '0 0 10px var(--gray-border)');
        $('.navbar').css('width', '100vw');
        $('.navbar').css('border', 'none');
        $('.navbar_brand').css('padding-top', '13px');
        $('.menu_item').css('padding-top', '5px');
        $('.menu_item').css('border', 'none');
        $('.menu_item').css('height', '26px');
        $('.navbar').css('transition', '.5s');
    }
    else if ((window.pageYOffset < 300 || document.body.scrollTop < 300)&&($(window).width() <= 990)) {
        $('.navbar').css('position', 'fixed');
        $('.navbar').css('background', 'black');
        $('.list_menu').css('background', 'black');
        $('.navbar').css('z-index', '999');
        $('.navbar a').css('color', 'white');
        $('.menu_item:first-child a').css('color', 'blue');
        $('.navbar').css('top', '0');
        $('.navbar').css('height', '60px');
        $('.navbar').css('box-shadow', '0 0 10px var(--gray-border)');
        $('.navbar').css('width', '100vw');
        $('.navbar').css('border', 'none');
        $('.navbar_brand').css('padding-top', '13px');
        $('.menu_item').css('padding-top', '5px');
        $('.menu_item').css('border', 'none');
        $('.menu_item').css('height', '26px');
        $('.navbar').css('transition', '.5s');
    }
    else{
        $('.navbar').css('position', 'relative');
        $('.navbar').css('background', 'transparent');
        $('.navbar a').css('color', 'white');
        $('.navbar').css('height', '75px');
        $('.navbar').css('box-shadow', 'none');
        $('.navbar').css('border', '1px solid var(--gray-border)');
        $('.navbar_brand').css('padding-top', '25px');
        $('.menu_item').css('padding-top', '25px');
        $('.menu_item').css('border-left', '1px solid var(--gray-border)');
        $('.list_menu').css('background', 'transparent');
        $('.menu_item').css('height', '26px');
        $('.menu_item:first-child a').css('color', '#28df99');
    }
};



var slideIndex = 0;



window.onload = function () {
    changeBackground();
    count_year_of_experienced();
    count_project_completed();
    count_our_staff();
    count_services_provide();
    count_happy_customers();
}

var year_of_experienced=0;
function count_year_of_experienced(){
    year_of_experienced++;
    document.getElementById('year_of_experienced').innerHTML=year_of_experienced;
    if(year_of_experienced<42){
        setTimeout(count_year_of_experienced,200);}
}

var project_completed = 1000;
function count_project_completed(){
    project_completed+=5;
    document.getElementById('project_completed').innerHTML=project_completed;
    if(project_completed < 4800){
        setTimeout(count_project_completed,1);}
}
var our_staff = 200;
function count_our_staff(){
    our_staff++;
    document.getElementById('our_staff').innerHTML=our_staff;
    if(our_staff < 1000){
        setTimeout(count_our_staff,5);}
}
var services_provide=90;
function count_services_provide(){
    services_provide++;
    document.getElementById('services_provide').innerHTML=services_provide;
    if(services_provide<350){
        setTimeout(count_services_provide,20);}
}
var happy_customers=2000;
function count_happy_customers(){
    happy_customers+=6;
    document.getElementById('happy_customers').innerHTML=happy_customers;
    if(happy_customers<7650){
        setTimeout(count_happy_customers,1);}
}



var i;
var x = document.getElementsByClassName('slide_point_item_center');
function changeBackground() {
    slideIndex++;
    if (slideIndex > 2) { slideIndex = 1 };
    if (slideIndex == 1) {
        $('#home_page').css('background-image', 'linear-gradient(rgba(177,172,168,0.3),rgba(177,172,168,0.3)),url("meet1.jpg")');
    }
    else {
        $('#home_page').css('background-image', 'linear-gradient(rgba(177,172,168,0.3),rgba(177,172,168,0.3)),url("meet2.jpg")');
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.background = '#B1ACA8';
    }
    x[slideIndex - 1].style.background = 'white';
    setTimeout(changeBackground, 4000);
};

function changeSlide1() {
    $('#home_page').css('background-image', 'linear-gradient(rgba(177,172,168,0.3),rgba(177,172,168,0.3)),url("meet1.jpg")');
    $('#slide1').css('background', 'white');
    $('#slide2').css('background', '#B1ACA8');

}
function changeSlide2() {
    $('#home_page').css('background-image', 'linear-gradient(rgba(177,172,168,0.3),rgba(177,172,168,0.3)),url("meet2.jpg")');
    $('#slide2').css('background', 'white');
    $('#slide1').css('background', '#B1ACA8');
}

var menuIndex = -1;
function menuShow() {
    menuIndex *= -1;
    if (menuIndex == 1) {
        $('.list_menu').css('transform', 'translateX(0)');
        $('.menu_item').css('padding-top', '5px');
    }
    else {
        $('.list_menu').css('transform', 'translateX(1000px)');
    }


}
var questionIndex = -1;
function showAnswer(n) {
    var question_answer = document.getElementsByClassName('question_answer');
    var down = document.getElementsByClassName('down');
    var up = document.getElementsByClassName('up');
    var question_box = document.getElementsByClassName('question_box');
    questionIndex *= -1;
    if (questionIndex == 1) {
        question_answer[n].style.display = 'block';
        down[n].style.display = 'block';
        down[n].style.color = 'white';
        up[n].style.display = 'none';
        question_box[n].style.color = 'white';
        question_box[n].style.background = '#4986FC';
    }
    else {
        question_answer[n].style.display = 'none';
        down[n].style.display = 'none';
        down[n].style.color = '#B1ACA8';
        up[n].style.display = 'block';
        question_box[n].style.color = 'black';
        question_box[n].style.background = 'white';
    }
};