import {OpaqueToken} from "@angular/core";

export function _window ():any {
	return window;
}

export const WINDOW:OpaqueToken = new OpaqueToken('WindowToken');

export abstract class WindowRef {
	get nativeWindow ():any {
		return {};
	}
}

export class BrowserWindowRef extends WindowRef {
	constructor () {
		super();
	}

	get nativeWindow ():any {
		return _window();
	}
}

export const WINDOW_PROVIDERS = [
	{provide: WindowRef, useClass: BrowserWindowRef},
	{provide: WINDOW, useFactory: _window, deps: []},
];
