// copyright 2010 Nikolay Mladenov
/*global window, Raphael, alert, $V, $M, Vector, Matrix, $ */

var configureTabs = function(list_id)
{
	var links = $( list_id +" a" ),
	    tab_divs = [],
	    tab_urls = [],
	    tab_btns = [],
	    current = -1,
	selected="selected",
	ph,

	onTabClick = function()
	{
		var i = 0;
		if($(this).hasClass(selected))return;
		$(this).toggleClass(selected);
		if(current!==-1){
			tab_divs[current].hide();
			tab_btns[current].toggleClass(selected);
		}
		for(;i!=tab_btns.length; ++i)
		{
			if(tab_btns[i].hasClass(selected))
			{
				current = i;
				tab_divs[current].show();
				if(tab_divs[i].html()=="Loading...")
					tab_divs[i].html(tab_urls[i]);
			}
		}
	};

	links.each(function (index)
			{
				var link=$(this),
					href = link.attr("href"),
					target_div=link.attr("title");
				link.removeAttr("href");
				if(href.charAt(0)=="#")
				{
					if(tab_btns.length){$(href).hide()}
					tab_divs.push($(href));
				}else{
					link.attr("title","")
					tab_divs.push($(target_div));
					tab_urls.push("<object data='"+href+"' style='width:100%; height:100%'></object>");
					$(target_div).html("Loading...");
					if(tab_btns.length){$(target_div).hide()}
				}
				tab_btns.push(link);
				link.click(onTabClick);
				link.removeClass(selected);
			});
	if(tab_btns.length)
		tab_btns[0].click();

}
