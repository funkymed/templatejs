/**
 * TemplateJS
 * by Cyril Pereira
 * http://www.cyrilpereira.com
 */
var template = {
    templates:{},
    initialize:function()
    {
        var t = this;
        $('.tpl').each(function()
        {
            t.templates[this.id]=$(this).html();
            $(this).remove();
        });
        $('#templates').remove();
    },
    getTemplate:function(t)
    {
        return (this.templates[t]) ? this.templates[t] : false;
    },
    format:function(t,args)
    {
        if(!t)      return false;
        if(!args)   return t;

        for(var b in args)
        {
            var pattern = "{"+b+"}",
                re = new RegExp(pattern, "g");

            t = t.replace(re,args[b]);
        }
        return t;
    }
}