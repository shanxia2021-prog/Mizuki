// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "Vocaloid songs making" | "Utaite" | "IT" | "Game playing" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Vocaloid songs making Skills
	{
		id: "vocaloid",
		name: "Vocaloid",
		description:
			"I write some songs in my spare time. I have experience in using Vocaloid software to create music, including melody composition, lyric writing, and vocal synthesis.",
		icon: "logos:vocaloid",
		category: "Vocaloid songs making",
		level: "intermediate",
		experience: { years: 3, months: 6 },
		color: "#F7DF1E",
	},

	// Backend Skills
	
	// Database Skills

	// Tools
	
	// Other Skills
	
];
