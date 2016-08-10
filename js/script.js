var styleList = {
  0: '.bodyReset {margin: 0; padding: 0;}',
  1: '.bodyAll {font-size: 20px; font-family: arial, sans-serif;}',
  2: '.inputBox {margin: 50px auto; width: 320px;}',
  3: '.headerStyle {text-align: center; margin-top: 15px;}',
  4: '.liStyle {line-height: 1.6; margin: 15px 0;}',
  5: '.submitStyle {height: 50px; width: 320px; border: 3px solid #000; background: #ABD5EB;}',

  setStyle: function (){
    var style = document.createElement('style');
    style.type = 'text/css';
    var styleAddItem = '';
    for (var i = 5; i >= 0; i--) {
      styleAddItem = styleAddItem + styleList[i];
    }
    style.innerHTML = styleAddItem;
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}


var page = {
  body: '',
  bodyInit: function (){
 var bodyPlace = document.getElementsByTagName('body');
 this.body = bodyPlace[0];
 this.body.classList.add('bodyAll');
},

createDiv: function (){
var topLine = document.createElement('div');
topLine.classList.add('headerStyle');
topLine.innerHTML = 'Тест по программированию';
this.body.appendChild(topLine);
},

createForm: function (){
  var form = document.createElement('form');
  form.setAttribute('name', 'test');
  form.setAttribute('method', 'get');
  var ol = document.createElement('ol');
  for (var i = 1; i < 4; i++) {
    var li = document.createElement('li');
    li.classList.add('liStyle');
    li.innerHTML = 'Вопрос №' + i;
    for (var j = 1; j < 4; j++) {
        var div = document.createElement('div');
        var checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('id', 'line' + i + j);
        var span = document.createElement('span');
        span.innerHTML = 'Вариант ответа №' + j;
        div.appendChild(checkBox);
        div.appendChild(span);
        li.appendChild(div);
      }//for j
      ol.appendChild(li);
    }//for i
  form.appendChild(ol);
  var submitDiv = document.createElement('div');
  submitDiv.classList.add('inputBox');
  var submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Проверить мои результаты');
  submit.setAttribute('id', 'submit-form');
  submit.classList.add('cssClass');
  submit.classList.add('submitStyle');
  submitDiv.appendChild(submit);
  form.appendChild(submitDiv);
  this.body.appendChild(form);
}
};

//Инициализация body
page.bodyInit();
//Создание заголовка
page.createDiv();
//Создание формы
page.createForm();
//Назначение стилей
styleList.setStyle();

