import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class TopBarMover extends Extension {
    enable() {
        if (global.display.get_n_monitors() != 2) {
		    return;
	    }

	    let s = 1 - global.display.get_primary_monitor();
	    let sg = global.display.get_monitor_geometry(s);

	    Main.layoutManager.panelBox.x = sg.x;
	    Main.layoutManager.panelBox.y = sg.y;
    }

    disable() {
        if (global.display.get_n_monitors() != 2) {
		    return;
	    }

	    let p = global.display.get_primary_monitor();
	    let pg = global.display.get_monitor_geometry(p);

	    Main.layoutManager.panelBox.x = pg.x;
	    Main.layoutManager.panelBox.y = pg.y;
	}
}
