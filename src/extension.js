'use strict';

const LM = imports.ui.main.layoutManager;

function move_panel(monitor) {
	LM.panelBox.x = monitor.x;
	LM.panelBox.y = monitor.y;
	LM.panelBox.width = monitor.width;
	LM.panelBox.visible = true;
}

function primary_monitor_index() {
	return global.display.get_primary_monitor();
}

function secondary_monitor_index() {
	return primary_monitor_index() == 0 ? 1 : 0;
}

function enable() {
	if (LM.monitors.length != 2) {
		return;
	}

	move_panel(LM.monitors[secondary_monitor_index()]);
}

function disable() {
	if (LM.monitors.length != 2) {
		return;
	}

	move_panel(LM.monitors[primary_monitor_index()]);
}
