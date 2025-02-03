CREATE TABLE `admins` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text(64) NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`school` text NOT NULL,
	`imgsUUID` text NOT NULL,
	`reservation_id` integer NOT NULL,
	FOREIGN KEY (`reservation_id`) REFERENCES `reservations`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `books` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`author` text(255) DEFAULT 'غير محدد' NOT NULL,
	`title` text(255) DEFAULT 'غير محدد' NOT NULL,
	`description` text(255) DEFAULT 'غير محدد' NOT NULL,
	`available` integer DEFAULT 1 NOT NULL,
	`publish_year` text(32) DEFAULT 'غير محدد' NOT NULL,
	`user_id` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `reservations` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer,
	`book_id` integer,
	`admin_id` integer,
	`return_date` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`admin_id`) REFERENCES `admins`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text(64) NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`school` text NOT NULL,
	`imgsUUID` text NOT NULL,
	`book_id` integer NOT NULL,
	FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE no action
);
