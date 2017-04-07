#TemplateJS
==========
Simple, easy, and ultra lightweight template-engine

##Author

Cyril Pereira <cyril.pereira@gmail.com>

##Demo
http://med.planet-d.net/demo/web/templatejs

##Documentation

First add to your html page a template like this, don't forget to add the tpl class, it's used by the engine to pre-process templates.

~~~
<script type="text/template" class="tpl" id="tplTest">
  <div class="box">
    <strong>Nickname</strong> : {nickname}<br />
    <strong>Age</strong> : {age}<br />
  </div>
</script>
~~~

Start the engine.
~~~
template.initialize();
~~~
Get the template.
~~~
var _tpl = template.getTemplate('tplTest');
~~~
With a JSON object it's easy to inject content
~~~
var obj = [
  {nickname:'discoboyz',age:22},
  {nickname:'mariloo',age:25},
  {nickname:'funkybrother',age:35}
];
$(obj).each(function()
{
  var _h = template.format(_tpl,this);
  $('#content').append(_h);
});
~~~    

