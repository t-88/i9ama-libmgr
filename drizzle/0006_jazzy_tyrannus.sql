PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_books` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`author` text(255) DEFAULT 'غير محدد' NOT NULL,
	`title` text(255) DEFAULT 'غير محدد' NOT NULL,
	`description` text(255) DEFAULT 'غير محدد' NOT NULL,
	`available` integer DEFAULT 1 NOT NULL,
	`publish_year` text(32) DEFAULT 'غير محدد' NOT NULL,
	`user_id` integer DEFAULT 'null',
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_books`("id", "author", "title", "description", "available", "publish_year", "user_id") SELECT "id", "author", "title", "description", "available", "publish_year", "user_id" FROM `books`;--> statement-breakpoint
DROP TABLE `books`;--> statement-breakpoint
ALTER TABLE `__new_books` RENAME TO `books`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text(64) NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`imgsUUID` text NOT NULL,
	`school` text NOT NULL,
	`book_id` integer DEFAULT 'null',
	FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_users`("id", "uuid", "first_name", "last_name", "imgsUUID", "school", "book_id") SELECT "id", "uuid", "first_name", "last_name", "imgsUUID", "school", "book_id" FROM `users`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
ALTER TABLE `__new_users` RENAME TO `users`;