// Copyright (C) 2020 John Nesky, distributed under the MIT license.

import { HTML } from "imperative-html/dist/esm/elements-strict";
import { Prompt } from "./Prompt";
import { SongDocument } from "./SongDocument";
import { ColorConfig } from "./ColorConfig";

//namespace beepbox {
const { button, div, h2, select, option, optgroup } = HTML;

export class ThemePrompt implements Prompt {
	private readonly _themeSelect: HTMLSelectElement = select({ style: "width: 100%;" },
		optgroup({ label: "Default Themes" },
			option({ value: "unbox classic" }, "Unbox Dark"),
			option({ value: "unbox glow" }, "Unbox Glow"),
			option({ value: "unbox legacy" }, "Unbox Legacy"),
			option({ value: "unbox vitals"}, "Unbox Vitals"),
			//option({ value: "unbox (???)" }, "Unbox (???)"),
			//option({ value: "unbox (???)" }, "Unbox (???)"),
			//option({ value: "unbox (???)" }, "Unbox (???)"),
			//option({ value: "unbox (???)" }, "Unbox (???)"),

			//Mono v
			option({ value: "1-bit mono"}, "1-bit Mono"),					//2 values - Black and White only. 	- Looks bad without dithering	| Monochrome displays - IBM, Atari ST(High res), Macintosh..
			option({ value: "2-bit mono"}, "2-bit Mono"),					//4 values - Black, Dark Gray, Light Gray, White.					| Monochrome displays - IBM Pc (adapter), NeXT, GameBoy, Amiga...
			//option({ value: "4-bit mono"}, "4-bit Mono"),					//16 values - Black and White with Grays in between.				| Monochrome displays - MOS VDC / C128 monochrome monitor, Amstrad CPC, Apple PowerBooks...//Broken?
			//option({ value: "8-bit mono"}, "Unbox 8-bit Mono"),			//256 values - Black and White with Grays in between.				| Used with Scanners, FIFF, JPEG...

			//Dichrome v
			option({ value: "16-bit rg"}, "16-bit RG"),						//Red-Green color space - Black, Green, Yellow, Red, (Oranges)
			//option({ value: "16-bit rb"}, "Unbox 16-bit RB"),				//Red-Blue color space - Black, Blue, Magenta, Red, (Purples)
			//option({ value: "16-bit gb"}, "Unbox 16-bit GB"),				//Green-Blue color space - Black, Blue, Green, Cyan, (?)

			//RGB v
			option({ value: "2-bit rgb"}, "Game Boy + Light"),				//4 values + 4 values - ???.3bit? 									|GameBoy Light + Backlight)
			//option({ value: "2+2-bit rgb"}, "Channel F"),					//8 values - ^ 3bits? rgb 											|IBM8514, Atari Falcon(256), Nintendo DS(3d),Many LCD monitors...//Broken right now?
			//option({ value: "3-bit rgb"}, "Unbox 3-bit RGB"),				//8 values - Black, Blue, Green, Cyan, Red, Magenta, Yellow, White. |Text Terminals, BBC micro, Atari 2600 (Secam), VIC20...
			//option({ value: "6-bit rgb"}, "Unbox 6-bit RGB"),				//64 values - ^ 2bit rgb = Orange and Purple and shades of these.  	|Sega Master System, TRS-80, EGA (IBM)...
			//option({ value: "9-bit rgb"}, "Unbox 9-bit RGB"),				//512 values - ^ 3bit rgb for more shades							|Atari ST(4-16), MSX2, Sega Genesis, PC-Engine, ZX Spectrum Next...
			option({ value: "12-bit rgb"}, "Atari STe"),					//4096 values - ^ 4bit rgb. more shades.							|Amiga OCS/ECS, AppleII, Atari STe(16), Sega Game Gear, Atari Lynx, Sharp X1, Amstrad CPC...
			//option({ value: "15-bit rgb"}, "Unbox 15-bit RGB"),			//32,768 values - ^ 5bit rgb (HighColor)							|SNES(256), TARGA, GBC(56)/GBA-GBAsp(512), Nintendo DS, Sega 32X, Playstation*Textures for 3D objects...
			//option({ value: "18-bit rgb"}, "Unbox 18-bit RGB"),			//262,144 values - ^ 6bits rgb 										|IBM8514, Atari Falcon(256), Nintendo DS(3d),Many LCD monitors...
			// 24-bit---																														|Nintendo 3DS, Playstation, PSP/Vita, Truvision, Nintendo Switch...

			//RGBI v
			option({ value: "4-bit rgbi"}, "ZX Spectrum"),					//16 values - 3-bit + 1 bit for intensity (darker colour) 			|ZX Spectrum, IBM PC, Tandy... 
			//option({ value: "3-level rgb"}, "Unbox 3-level RGB"),			//27 values - 1-trit - 3 levels for each RGB component				|Amstrad CPC (not plus), Toshiba Pasopia 7..
			//option({ value: "3-3-2 bit rgb"}, "Unbox 3-3-2 8-bit RGB"),	//256 values - 3bit R G 2bit B "8-8-4"								|IBM PGC, MSX2, Uzebox console, Wear OS...
			//option({ value: "3-2-3 bit rgb"}, "Unbox 3-2-3 8-bit RGB"),	//256 values - 3bit R B 2bit G "8-4-8"								|IBM PGC
			//option({ value: "2-3-3 bit rgb"}, "Unbox 2-3-3 8-bit RGB"),	//256 values - 3bit G B 2bit R "4-8-8"								|IBM PGC
			//option({ value: "rgb 565"}, "Unbox RGB-565"),					//65,536 values - 													|Atari Falcon, XGA, IBM PS/2, X68k...
			//8bit VGA?
		),
		optgroup({ label: "Ultrabox Themes" },
			option({ value: "ultrabox dark" }, "UltraBox"),
			option({ value: "forest" }, "Forest"),
			option({ value: "canyon" }, "Canyon"),
			option({ value: "midnight" }, "Midnight"),
			option({ value: "beachcombing" }, "Beachcombing"),
			option({ value: "violet verdant" }, "Violet Verdant"),
			option({ value: "sunset" }, "Sunset"),
			option({ value: "autumn" }, "Autumn"),
			option({ value: "fruit" }, "Shadowfruit"),
			option({ value: "toxic" }, "Toxic"),
			option({ value: "roe" }, "Roe"),
			option({ value: "moonlight" }, "Moonlight"),
			option({ value: "portal" }, "Portal"),
			option({ value: "fusion" }, "Fusion"),
			option({ value: "inverse" }, "Inverse"),
			option({ value: "nebula" }, "Nebula"),
			option({ value: "roe light" }, "Roe Light"),
			option({ value: "amoled dark" }, "High Contrast Dark"),
			option({ value: "energized" }, "Energized"),
			option({ value: "neapolitan" }, "Neapolitan"),
			option({ value: "poly" }, "Poly"),
			option({ value: "blutonium" }, "Blutonium"),
			option({ value: "slushie" }, "Slushie"),
		),
		optgroup({ label: "Mod Themes" },
			option({ value: "dark classic" }, "BeepBox Dark"),
			option({ value: "light classic" }, "BeepBox Light"),
			option({ value: "dark competition" }, "BeepBox Competition Dark"),
			option({ value: "jummbox classic" }, "JummBox Dark"),
			// let's retire this again.
			// option({ value: "jummbox light" }, "JummBox Light"), 
			option({ value: "modbox classic" }, "Modbox"),
			option({ value: "sandbox classic" }, "Sandbox"),
			option({ value: "harrybox" }, "Haileybox"),
			option({ value: "brucebox" }, "Brucebox"),
			option({ value: "shitbox 3.0" }, "Shitbox 1.0/3.0"),
			option({ value: "shitbox 2.0" }, "Shitbox 2.0"),
			option({ value: "nerdbox" }, "NerdBox"),
			option({ value: "zefbox" }, "Zefbox"),
			option({ value: "cardboardbox classic" }, "Cardboardbox"),
			option({ value: "blubox classic" }, "Blubox"),
			option({ value: "dogebox classic" }, "Dogebox"),
			option({ value: "wackybox" }, "Wackybox"),
			option({ value: "todbox dark mode" }, "Todbox Dark Mode"),
			option({ value: "mainbox 1.0" }, "Mainbox"),
			option({ value: "microbox" }, "MicroBox"),
			option({ value: "paandorasbox" }, "PaandorasBox"),
			option({ value: "foxbox" }, "FoxBox"),
			option({ value: "midbox" }, "Midbox"),
			option({ value: "dogebox2" }, "Dogebox2"),
			option({ value: "abyssbox classic"}, "AbyssBox Classic"),
			option({ value: "abyssbox light"}, "AbyssBox Light"),
			option({ value: "nepbox" }, "Nepbox"),
			option({ value: "slarmoosbox"}, "Slarmoo's Box"),
		),
		optgroup({ label: "Misc" },
			option({ value: "azur lane" }, "Azur Lane"),
			option({ value: "custom" }, "Custom")
		),
	);
	private readonly _cancelButton: HTMLButtonElement = button({ class: "cancelButton" });
	private readonly _okayButton: HTMLButtonElement = button({ class: "okayButton", style: "width:45%;" }, "Okay");

	public readonly container: HTMLDivElement = div({ class: "prompt noSelection", style: "width: 220px;" },
		h2("Set Theme"),
		div({ style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;" },
			div({ class: "selectContainer", style: "width: 100%;" }, this._themeSelect),
		),
		div({ style: "display: flex; flex-direction: row-reverse; justify-content: space-between;" },
			this._okayButton,
		),
		this._cancelButton,
	);
	private readonly lastTheme: string | null = window.localStorage.getItem("colorTheme")

	constructor(private _doc: SongDocument) {
		if (this.lastTheme != null) {
			this._themeSelect.value = this.lastTheme;
		}
		this._okayButton.addEventListener("click", this._saveChanges);
		this._cancelButton.addEventListener("click", this._close);
		this.container.addEventListener("keydown", this._whenKeyPressed);
		this._themeSelect.addEventListener("change", this._previewTheme);
	}

	private _close = (): void => {
		if (this.lastTheme != null) {
			ColorConfig.setTheme(this.lastTheme);
		} else {
			ColorConfig.setTheme(ColorConfig.defaultTheme);
		}
		this._doc.undo();
	}

	public cleanUp = (): void => {
		this._okayButton.removeEventListener("click", this._saveChanges);
		this._cancelButton.removeEventListener("click", this._close);
		this.container.removeEventListener("keydown", this._whenKeyPressed);
	}

	private _whenKeyPressed = (event: KeyboardEvent): void => {
		if ((<Element>event.target).tagName != "BUTTON" && event.keyCode == 13) { // Enter key
			this._saveChanges();
		}
	}

	private _saveChanges = (): void => {
		window.localStorage.setItem("colorTheme", this._themeSelect.value);
		this._doc.prompt = null;
		this._doc.prefs.colorTheme = this._themeSelect.value;
		this._doc.undo();
	}

	private _previewTheme = (): void => {
		ColorConfig.setTheme(this._themeSelect.value);
		this._doc.notifier.changed();
	}
}
//}
