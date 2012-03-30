/*
 * jarTT: A turntable.fm mod. Chris "inajar" Vickery <chrisinajar@gmail.com>
 * javascript:(function(){$.getScript('https://raw.github.com/chrisinajar/jarTT/master/jarTT.js');})();
 *
 * Redistribution and use in source, minified, binary, or any other forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *  * Neither the name, jarTT, nor the names of its contributors may be 
 *    used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * No disclaimer, just don't be a dick.
 *
 */
 
// storage, anything involving HTML5 storage or whatever else i mutate this into.

jarTT.version = {
	load: function() {
		jarTT.events.registerEvent("jarTT_unloaded", jarTT.version.unload);
		
		var version = jarTT.storage.getNamedData('version');
		if (!version)
			version = 0.0;
		
		var getWord = function(ar) {
			return ar[Math.round(Math.random()*ar.length)];
		}
		
		var horribleColors = [
			"pink",
			"red",
			"blue",
			"#B8B8E0",
			"magenta",
			"gold",
			"yellow"
		];
		
		var howAwesome = [
			"love it.",
			"shit bricks.",
			"fuck some shit up.",
			"die.",
			"do cocain off a hooker just to feel again.",
			"puke on your mom in excitement.",
			"wonder if these superlatives are generated.",
			"become mutually exclusive with unhappiness.",
			"kill everyone you know.",
			"devolve.",
			"probably love it.",
			"be pretty indifferent to it.",
			"fall in love.",
			"found a religion on it."
		];
		
		var doWhat = [
			"GET EXCITED!",
			"FUCK YES!",
			"SUCK ON DEEZ NUTS!",
			"THE LEMONS!",
			"OH NO YOU DI'NT!",
			"GIVE ME ALL YOUR MONEY!"
		];
		
		var changes = [];
		var notes = "";
		var showSettings = false;
		var hasChanges = false;
		switch(version) {
			case 0.0: // first run
				changes.push("Versioning! Welcome to 1.0!");
				changes.push("Persistent settings! Set and forget my brothers.");
				changes.push("Performance optimizations! No more spamming your DOM!");
				changes.push("MOAR SMIFF!");
				changes.push("Mildly painful to view release notes!");
				
				notes += "I'll be using this window to inform you of new updates as they come out. Stay tuned, and feel free to send suggestions my way!";
				
				version = 1.0;
				showSettings = true;
				hasChanges = true;
			case 1.0:
				changes.push("Put version number into notes");

				version = 1.01;
				hasChanges = true;
				break;
			case 1.01:
				changes.push("Updated autobop to be more reliable");
				changes.push("Fixed dj idle timers appearing behind settings window");

				version = 1.02;
				hasChanges = true;
				break;
			case 1.02:  // current version
		};
		if (hasChanges) {
			// jarTT.ui.showSettings();
			var box = jarTT.ui.createBox();
			var br = function() {
				box.append("<br />");
			};
			box.append("<h1>jarTT!!! HI!!</h1><br />");
			box.append($("<p>", {
				html: "Version: " + version,
				css: {
					fontSize: 10,
					marginTop: -20
				}
			}));
			br();
			box.append($("<p>", {
				html: "Welcome! Unless you've already been using jarTT, in which case welcome <i>back</i>! We have some <b style='color: yellow;'>new</b> stuff for you, you're going to " + getWord(howAwesome) + ".<br />",
				css: {
					fontSize: 14,
				}
			}));
			
			br();
			
			// Changes
			if (changes.length > 0) {
				box.append($("<p>", {
					text: "Check out this sweet new shit!",
					css: {
						fontSize: 22,
						fontWeight: "bold",
						marginBottom: 10
					}
				}));
				var rape = function() {
					var color,
					    self = $(this);
						
					self.stop(true);
					while ((color = getWord(horribleColors)) == self.data('lastColor') || (!color));
					self.data('lastColor', color);
					self.animate({color: color}, 2000, "linear", rape);
				};
				for (var i = 0, l = changes.length; i < l; ++i) (function(change) {
					box.append($("<span>", {
						text: change,
						css: {
							display: "block",
							fontSize: 14,
							fontWeight: "bold"
						}
					}).fadeIn(rape));
				})(changes[i]);
				
				br();
			}
			
			// Release notes
			if (notes.length > 0) {
				box.append("Release Notes! Look!");
				br();
				box.append($("<p>", {
					text: notes,
					css: {
						fontSize: 14
					}
				}));
				
				br();
			}
			
			if (showSettings) {
				box.append($("<p>", {
					text: "Some settings have changed!",
					css: {
						color: "red",
						fontWeight: "bold",
						padding: 10,
						fontSize: 20
					}
				}));
				box.append($("<button>", {
					text: "Settings"
				}).button().click(function() {
					box.remove();
					jarTT.ui.showSettings();
				}));
				
				br();
			}
			
			br();
			
			box.append($("<p>", {
				text: getWord(doWhat),
				css: {
					fontSize: 16,
					color: "yellow",
					fontWeight: "bold"
				}
			}));
			
			br();
			
			box.append($("<p>", {
				text: "Thanks! -chrisinajar",
				css: {
					fontSize: 12
				}
			}));
		}
		
		jarTT.storage.setNamedData('version', version);
	},
	unload: function() {
	},
};


