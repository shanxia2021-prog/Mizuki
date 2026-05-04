// 设备数据配置文件

import { SakuraEffectHandler } from "@/scripts/effects/sakura-effect";

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Google: [
		{
			name: "Google Pixel 3XL",
			image: "/images/device/Google-Pixel-31.webp",
			specs: "White / 4GB + 128GB",
			description:
				"Snapdragon 845, 12.2 MP rear camera, 8 MP Front camera6, 3 in (160 mm) QHD+ OLED at 523 ppi, 2960*1440 (37:18) pixel resolution.",
			link: "https://en.wikipedia.org/wiki/Pixel_3",
		},
	],
	SHARP: [
		{
			name: "SHARP AQUOS Zero 2",
			image: "/images/device/SHARP-AQUOS-Zero-2.webp",
			specs: "White / 8GB` + 256GB",
			description:
				"Snapdragon 855 Plus, 6.4 inches Display, 2340 x 1080 pixels resolution, 120Hz refresh rate, 12.2 MP rear camera, 8 MP front camera.",
			link: "https://en.wikipedia.org/wiki/Sharp_AQUOS_Zero_2",
		},
	],
	Microsoft: [
		{
			name: "Microsoft Surface Pro 4",
			image: "/images/device/surface-pro-4.webp",
			specs: "Gray / 8GB + 256GB",
			description:
				"Intel Core i5-6300U, 12.3 inches Display, 2736 x 1824 pixels resolution, 8 MP rear camera, 5 MP front camera.",
			link: "https://en.wikipedia.org/wiki/Surface_Pro_4",
		},
	],
	Lenovo: [
		{
			name: "Lenovo Yoga Pro 14s",
			image: "/images/device/lenovo-yoga-pro-14s.webp",
			specs: "Gray / 32GB + 1TB",
			description:
				"Windows 11 Home, Intel EVO i9-13900H, 14.5 inches Display.",
			link: "https://en.wikipedia.org/wiki/Lenovo_Yoga_Pro_14s",
		},
	],
};
