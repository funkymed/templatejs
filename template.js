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
    },
    getTemplate:function(t)
    {
        return (this.templates[t]) ? this.templates[t] : false;
    },
    format:function(template,args)
    {
        if(!template)
            return false;
        if(!args)
            return template;
        for(var b in args)
            template = template.replace('{'+b+'}',args[b]);
        return template;
    }
}