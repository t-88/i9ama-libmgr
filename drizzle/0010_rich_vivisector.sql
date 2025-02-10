ALTER TABLE `users` ADD `date_of_birth` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `al_wilaya` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `phone_number` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `email` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `fb_name_or_link` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `residense_block_number` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `residense_room_number` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `school_matericule` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `year_of_study` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `study_specialty` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `img_personal` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `img_card_residency` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `img_school_certificate` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `imgsUUID`;--> statement-breakpoint
ALTER TABLE `admins` DROP COLUMN `imgsUUID`;