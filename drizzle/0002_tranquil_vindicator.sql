PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`uuid` text(64) DEFAULT (lower(hex(randomblob(16)))) NOT NULL,
	`date_of_birth` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`al_wilaya` text DEFAULT 'Unknown' NOT NULL,
	`phone_number` text DEFAULT 'Unknown' NOT NULL,
	`school` text DEFAULT 'Unknown' NOT NULL,
	`email` text DEFAULT 'Unknown' NOT NULL,
	`residense_block_number` text DEFAULT 'Unknown' NOT NULL,
	`residense_room_number` text DEFAULT 'Unknown' NOT NULL,
	`school_matericule` text DEFAULT 'Unknown' NOT NULL,
	`year_of_study` text DEFAULT 'Unknown' NOT NULL,
	`study_specialty` text DEFAULT 'Unknown' NOT NULL,
	`img_personal_url` text DEFAULT 'default_image.jpg' NOT NULL,
	`img_card_residency_url` text DEFAULT 'default_card.jpg' NOT NULL,
	`img_school_certificate_url` text DEFAULT 'default_certificate.jpg' NOT NULL,
	`book_id` integer DEFAULT 'null',
	FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
INSERT INTO `__new_users`("id", "first_name", "last_name", "uuid", "date_of_birth", "al_wilaya", "phone_number", "school", "email", "residense_block_number", "residense_room_number", "school_matericule", "year_of_study", "study_specialty", "img_personal_url", "img_card_residency_url", "img_school_certificate_url", "book_id") SELECT "id", "first_name", "last_name", "uuid", "date_of_birth", "al_wilaya", "phone_number", "school", "email", "residense_block_number", "residense_room_number", "school_matericule", "year_of_study", "study_specialty", "img_personal_url", "img_card_residency_url", "img_school_certificate_url", "book_id" FROM `users`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
ALTER TABLE `__new_users` RENAME TO `users`;--> statement-breakpoint
PRAGMA foreign_keys=ON;