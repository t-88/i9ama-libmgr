PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_book_tags` (
	`book_id` integer NOT NULL,
	`tag_id` integer NOT NULL,
	FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
INSERT INTO `__new_book_tags`("book_id", "tag_id") SELECT "book_id", "tag_id" FROM `book_tags`;--> statement-breakpoint
DROP TABLE `book_tags`;--> statement-breakpoint
ALTER TABLE `__new_book_tags` RENAME TO `book_tags`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_books` (
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
INSERT INTO `__new_books`("id", "author", "title", "description", "available", "publish_year", "user_id") SELECT "id", "author", "title", "description", "available", "publish_year", "user_id" FROM `books`;--> statement-breakpoint
DROP TABLE `books`;--> statement-breakpoint
ALTER TABLE `__new_books` RENAME TO `books`;--> statement-breakpoint
CREATE TABLE `__new_reservations` (
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
INSERT INTO `__new_reservations`("id", "user_id", "book_id", "admin_id", "return_date") SELECT "id", "user_id", "book_id", "admin_id", "return_date" FROM `reservations`;--> statement-breakpoint
DROP TABLE `reservations`;--> statement-breakpoint
ALTER TABLE `__new_reservations` RENAME TO `reservations`;--> statement-breakpoint
CREATE TABLE `__new_users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text(64) NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`imgsUUID` text NOT NULL,
	`school` text NOT NULL,
	`book_id` integer DEFAULT 'null',
	FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
INSERT INTO `__new_users`("id", "uuid", "first_name", "last_name", "imgsUUID", "school", "book_id") SELECT "id", "uuid", "first_name", "last_name", "imgsUUID", "school", "book_id" FROM `users`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
ALTER TABLE `__new_users` RENAME TO `users`;