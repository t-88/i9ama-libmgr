CREATE TABLE `admins` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`reservation_id` integer,
	FOREIGN KEY (`reservation_id`) REFERENCES `reservations`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `book_tags` (
	`book_id` integer,
	`tag_id` integer,
	FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `books` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`author` text(255) DEFAULT 'غير محدد' NOT NULL,
	`title` text(255) DEFAULT 'غير محدد' NOT NULL,
	`description` text(255) DEFAULT 'غير محدد' NOT NULL,
	`available` integer DEFAULT 1 NOT NULL,
	`publish_year` text(32) DEFAULT 'غير محدد' NOT NULL,
	`user_id` integer DEFAULT 'null',
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `reservations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer,
	`book_id` integer,
	`admin_id` integer,
	`return_date` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`admin_id`) REFERENCES `admins`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`uuid` text(64) NOT NULL,
	`date_of_birth` text NOT NULL,
	`al_wilaya` text NOT NULL,
	`phone_number` text NOT NULL,
	`school` text NOT NULL,
	`email` text NOT NULL,
	`residense_block_number` text NOT NULL,
	`residense_room_number` text NOT NULL,
	`school_matericule` text NOT NULL,
	`year_of_study` text NOT NULL,
	`study_specialty` text NOT NULL,
	`img_personal_url` text NOT NULL,
	`img_card_residency_url` text NOT NULL,
	`img_school_certificate_url` text NOT NULL,
	`book_id` integer DEFAULT 'null',
	FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE set null
);
