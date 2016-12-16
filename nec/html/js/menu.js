var createMenu = function(submenu, link_prefix, no_campain) {
    var loc = window.location.toString();
    var makeLink = function(target, name, indent, no_new_line) {
        var l = loc.slice(loc.length - target.length);
        if (indent) { return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + makeLink(target, name, indent - 1, no_new_line) }
        else {
            if (l == target && loc[loc.length - target.length - 1] == '/')
                name = "<b><i>" + name + "</i></b>"
            if (!no_new_line) {
                return '<a href="' + link_prefix + target + '">' + name + '</a><br />'
            } else {
                return '<a href="' + link_prefix + target + '">' + name + '</a>'
            }
        }
    },
	    makeLabel = function(name, indent, no_new_line) {
	        if (indent) { return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + makeLabel(name, indent - 1, no_new_line) }
	        else {
	            if (no_new_line) { return name }
	            else { return name + '<br />' }
	        }
	    },
	    inner_html =
		'<div class="span-4 last">'
		+ makeLink('index.html', 'Home')
		+ makeLink('credits.html', 'Thanks & Credits')
		+ '<hr/>'
		+ makeLink('scripts.html', 'Scripts')
		;

    if (submenu == "scripts") {
        inner_html +=
				makeLink('scripts/nec_opt_tutorial.html', 'Tutorial', 1)
				+ makeLink('scripts.html#nec_eval', 'Evaluation', 1)
				+ makeLink('scripts.html#nec_opt', 'Optimization', 1)
				+ makeLink('scripts.html#download', 'Download', 1)
				+ makeLink('scripts.html#license', 'License', 1)
				;
        inner_html += makeLabel('');
    }
    inner_html += makeLink('viewer.html', 'Antenna Publishing');
    if (submenu == "viewer") {
        inner_html += makeLink('viewer.html#forums', 'Forums support', 1);
        inner_html += makeLink('viewer.html#license', 'License', 1);
    }
    inner_html += makeLink('nec_viewer.html', 'Nec viewer');
    if (submenu == "nec_viewer") {
        inner_html += makeLink('nec_viewer.html#forums', 'Forums support', 1);
        inner_html += makeLink('nec_viewer.html#limitations', 'Limitations', 1);
        inner_html += makeLink('nec_viewer.html#license', 'License', 1);
    }
    inner_html += '<hr/>' + makeLink('help.html', '<b>How to use the website</b>');
    if (submenu.substring(0, 4) == "help")inner_html += makeLink('help.html#faq', 'Faq', 1);

    inner_html += '<hr/>' + makeLabel('<b>Gray-Hoverman</b>') + makeLabel('Modular UHF/VHF-hi');
    inner_html += makeLink('gh_n_uV.html', 'GHn', 1);
    if (submenu.substring(0, 7) == "gh_n_uV") {
        inner_html +=
				makeLink('gh_n_uV/gh0n_5V9_10u0.html', 'GH0n', 2)
				+ makeLink('gh_n_uV/gh2n_5V7_12u8.html', 'GH2n', 2)
				+ makeLink('gh_n_uV/gh4n_6V9_13u1.html', 'GH4n', 2)
				+ makeLink('gh_n_uV/gh6n_6V9_13u75.html', 'GH6n', 2)
				+ makeLink('gh_n_uV/gh8n_6V9_14u2.html', 'GH8n', 2)
				+ makeLink('gh_n_uV/gh10n_6V9_14u65.html', 'GH10n', 2)
				;
        inner_html += makeLabel('');
    }
    inner_html += makeLink('gh_n_u_more_V.html', 'More GHn big models', 1);
    if (submenu.substring(0, 13) == "gh_n_u_more_V") {
        inner_html +=
				makeLink('gh_n_u_more_V/gh10n_7V9_14u1.html', 'GH10n 7.9dBi VHF-hi', 2)
				+ makeLink('gh_n_u_more_V/gh10n_7V5_14u5.html', 'GH10n 7.5dBi VHF-hi', 2)
				+ makeLink('gh_n_u_more_V/gh12n_7V5_14u8.html', 'GH12n 7.5dBi VHF-hi', 2)
				;
        inner_html += makeLabel('');
    }
    inner_html += makeLink('gh_n3.html', 'GHn3(jed mods)', 1);
    if (submenu == "jed_mods") {
        inner_html +=
				makeLink('gh_n3.html#modification', 'Modification', 2)
				+ makeLink('gh_n3.html#dimensions', 'Dimensions', 2)
				+ makeLink('jed_mods/gh4n3.nec', 'GH4n3 model', 2)
				+ makeLink('jed_mods/gh6n3.nec', 'GH6n3 model', 2)
				+ makeLink('jed_mods/gh8n3.nec', 'GH8n3 model', 2)
				+ makeLink('jed_mods/gh10n3.nec', 'GH10n3 model', 2)
				+ makeLink('jed_mods/gh6n3wb.html', 'GH6n3 WideBand', 2)
				;
    }
    inner_html += makeLink('gh_gen1_uV.html', 'GH6 gen1 mods', 1);
    if (submenu == "gh_gen1_uV") {
        inner_html +=
				makeLink('gh_gen1_uV/gh6n3_mod0.html', 'Narods added', 2)
				+ makeLink('gh_gen1_uV/gh6n3_mod1.html', 'Wires shortened', 2)
				+ makeLink('gh_gen1_uV/gh6n3_mod2.html', 'Spacings changed', 2)
				;
        inner_html += makeLabel('');
    }
    inner_html += makeLabel('') + makeLabel('Non-modular UHF/VHF-hi') + makeLink('gh_n3_uV.html', 'GHn3', 1);
    if (submenu == "gh_n3_uV") {
        inner_html +=
				makeLink('gh_n3_uV/gh0n3_8V5_12u1.html', 'GH0n3', 2)
				+ makeLink('gh_n3_uV/gh2n3_8V6_13u3.html', 'GH2n3', 2, 1) + "/" + makeLink('gh_n3_uV/gh2n3_results.html', 'results', 0)
				+ makeLink('gh_n3_uV/gh4n3_9V6_13u5.html', 'GH4n3', 2, 1) + "/" + makeLink('gh_n3_uV/gh4n3_results.html', 'results', 0)
				+ makeLink('gh_n3_uV/gh6n3_9V85_14u2.html', 'GH6n3', 2, 1) + "/" + makeLink('gh_n3_uV/gh6n3_results.html', 'results', 0)
				+ makeLink('gh_n3_uV/gh8n3_9V53_14u7.html', 'GH8n3', 2, 1) + "/" + makeLink('gh_n3_uV/gh8n3_results.html', 'results', 0)
				+ makeLink('gh_n3_uV/gh10n3_9V7_15u0.html', 'GH10n3', 2)
				+ makeLabel('')
				;
    }
    inner_html +=  makeLink('dbgh_n3_uV.html', 'DBGH*n3',1);
    if (submenu == "dbgh_n3_uV") {
        inner_html +=
				makeLink('dbgh_n3_uV/dbgh4n3_12V2_16u95.html', 'DBGH4n3', 2)
				+ makeLink('dbgh_n3_uV/dbgh6n3_12V5_17u3.html', 'DBGH6n3', 2)
				+ makeLink('dbgh_n3_uV/dbgh8n3_12V4_17u9.html', 'DBGH8n3', 2)
				+ makeLabel('')
				;
    }
    inner_html +=  makeLink('dbgh_n_uV.html', 'DBGH*n',1);
    if (submenu == "dbgh_n_uV") {
        inner_html +=
				makeLink('dbgh_n_uV/dbgh8n.html', 'DBGH8n', 2)
				+ makeLink('dbgh_n_uV/dbgh12n.html', 'DBGH12n', 2)
				+ makeLink('dbgh_n_uV/dbgh16n.html', 'DBGH16n', 2)
				+ makeLabel('')
				;
    }
    inner_html += makeLabel('') + makeLabel('Other Non-modular GHs') + makeLink('gh_u.html', 'UHF only GH ch.14-52',1);
    if (submenu == "gh_u") {
        inner_html +=
				makeLink('gh_u/gh0_10u45.html', 'GH0', 2)
				+ makeLink('gh_u/gh2_12u4.html', 'GH2', 2)
				+ makeLink('gh_u/gh4_13u4.html', 'GH4', 2)
				+ makeLink('gh_u/gh6_14u25.html', 'GH6', 2)
				+ makeLink('gh_u/gh8_14u75.html', 'GH8', 2)
				+ makeLink('gh_u/gh10_15u15.html', 'GH10', 2)
				+ makeLabel('')
				;
    }
    inner_html +=  makeLink('dbgh_u.html', 'DBGH ch.14-52',1);
    if (submenu == "dbgh_u") {
        inner_html +=
				makeLink('dbgh_u/dbgh0.html', 'DBGH0', 2)
				+ makeLink('dbgh_u/dbgh1.html', 'DBGH1', 2)
				+ makeLink('dbgh_u/dbgh2.html', 'DBGH2', 2)
				+ makeLink('dbgh_u/dbgh3.html', 'DBGH3', 2)
				+ makeLink('dbgh_u/dbgh4.html', 'DBGH4', 2)
				+ makeLink('dbgh_u/dbgh5.html', 'DBGH5', 2)
				+ makeLink('dbgh_u/dbgh6.html', 'DBGH6', 2)
				+ makeLink('dbgh_u/dbgh7.html', 'DBGH7', 2)
				+ makeLink('dbgh_u/dbgh8.html', 'DBGH8', 2)
				+ makeLink('dbgh_u/dbgh9.html', 'DBGH9', 2)
				+ makeLink('dbgh_u/dbgh10.html', 'DBGH10', 2)
				+ makeLink('dbgh_u/dbgh12.html', 'DBGH12', 2)
				+ makeLink('dbgh_u/dbgh14.html', 'DBGH14', 2)
				+ makeLink('dbgh_u/dbgh16.html', 'DBGH16', 2)
				+ makeLink('dbgh_u/dbgh18.html', 'DBGH18', 2)
				+ makeLink('dbgh_u/dbgh20.html', 'DBGH20', 2)
				+ makeLabel('')
				;
    }
    inner_html += makeLink('gh_n_vV.html', 'GH for VHF',1);
    if (submenu == "gh_n_vV") {
        inner_html += makeLink('gh_n_vV.html#vhf-both', 'GHn for VHF-hi/low', 2);
        inner_html +=
				makeLink('gh_n_vV/gh2n_4v2_6V9.html', 'GH2n', 3)
				+ makeLink('gh_n_vV/gh4n_4v75_10V7.html', 'GH4n', 3)
				;
        inner_html += makeLink('gh_n_vV.html#vhf-hi', 'GH for VHF-hi', 2);
        inner_html +=
				makeLink('gh_n_vV/gh4_11V1.html', 'GH4 nrw', 3)
				+ makeLink('gh_n_vV/gh4_12V45.html', 'GH4 shrt', 3)
				+ makeLink('gh_n_vV/gh4_14V1.html', 'GH4', 3)
				+ makeLink('gh_n_vV/gh6_14V7.html', 'GH6', 3)
				;
    }
    inner_html += makeLink('gh_n_U69V.html', 'Wideband GHn',1);
    if (submenu == "gh_n_U69V") {
        inner_html +=
				makeLink('gh_n_U69V/gh4n_7V2_12U5.html', 'GH4n', 2)
				+ makeLink('gh_n_U69V/gh6n3_9V6_13U4.html', 'GH6n3', 2)
				+ makeLabel('')
				;
    }
    inner_html += makeLink('gh_n_U69V/gh6n3_9eV5_13U2.html', 'Euroband GH6n3',1);

    inner_html += '<hr/>' + makeLink('yagis/y15fd_u.html', 'Yagis');
    if (submenu.substring(0,5) == "yagis") {
        inner_html +=makeLink('yagis/y15fd_u.html', '15El. FD UHF', 1);
	if (submenu.substring(0,13) == "yagis/y15fd_u")
		inner_html += makeLink('yagis/y15fd_u/uhf.html', 'Full UHF', 2)
			+ makeLink('yagis/y15fd_u/uhf.2.html', 'Half UHF', 2)
			+ makeLink('yagis/y15fd_u/uhf.3.html', 'Third UHF', 2)
			;
        inner_html += makeLabel('');
    }
    inner_html += '<hr/>' + makeLink('biquads.html', 'Bi-Quads');
    if (submenu == "biquads") {
        inner_html +=
				makeLabel('<b>UHF 52</b>', 1)
					+ makeLink('biquads/bq0u.html', 'BQ0u', 2)
					+ makeLink('biquads/bq4u.html', 'BQ4u', 2)
					+ makeLink('biquads/bq6u.html', 'BQ6u', 2)
					+ makeLink('biquads/bq8u.html', 'BQ8u', 2)
				+ makeLabel('<b>VHF-hi</b>', 1)
					+ makeLink('biquads/bq0V.html', 'BQ0V', 2)
					+ makeLink('biquads/bq4V.html', 'BQ4V', 2)
					+ makeLink('biquads/bq6V.html', 'BQ6V', 2)
				+ makeLabel('<b>UHF 69</b>', 1)
					+ makeLink('biquads/bq0U69.html', 'BQ0U', 2)
					+ makeLink('biquads/bq4U69.html', 'BQ4U', 2)
					+ makeLink('biquads/bq6U69.html', 'BQ6U', 2)
					;
        inner_html += makeLabel('');
    }
    inner_html += '<hr/>' + makeLink('sh.html', 'Stealth Hawk');
    if (submenu == "stealth_hawk") {
        inner_html +=
				makeLink('sh/sh_u_4_62.html', 'SH ch.14-52', 1)
				+ makeLink('sh/sh_U_3_9.html', 'SH ch.14-69', 1)
				+ makeLink('sh/sh_uV4_37_2_28.html', 'SHn ch.7-52', 1)
				;
        inner_html += makeLabel('');
    }
    inner_html +=
		'<hr/>' +
		'<form id="beer" action="https://www.paypal.com/cgi-bin/webscr" method="post"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"><input type="image" src="http://clients.teksavvy.com/~nickm/buy_beer.png" border="0" name="submit" alt="Buy me a beer!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>'
		;
    //"https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
    if(!no_campain)
    {
	    inner_html +=
		'<hr/>' 
		+'<a href="http://openmedia.ca/StopSpying" onClick="recordOutboundLink(this, \'Outbound Links\', \'openmedia.ca/StopSpying\');return false;"><img src="http://clients.teksavvy.com/~nickm/OpenMedia_200x124c.png" width="150" height="93" hspace="0" vspace="2" border="0" align="left" alt="Visit OpenMedia\'s Stop Spying Campain"/></a>' 
		+'<a href="http://openmedia.ca/StopSpying" onClick="recordOutboundLink(this, \'Outbound Links\', \'openmedia.ca/StopSpying\');return false;"><b>Stop Spying Campaign</b></a>'
		;
    }
	    

   inner_html +='</div>';

    document.getElementById("menu").innerHTML = inner_html;

}

//if(onDocumentReady)
//	$(document).ready (onDocumentReady);

function recordOutboundLink(link, category, action) {
   _gat._getTrackerByName()._trackEvent(category, action);
   setTimeout('document.location = "' + link.href + '"', 100);
}

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-5827251-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


