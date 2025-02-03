PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_admins` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`uuid` text(64) NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`imgsUUID` text NOT NULL,
	`reservation_id` integer,
	FOREIGN KEY (`reservation_id`) REFERENCES `reservations`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_admins`("id", "uuid", "first_name", "last_name", "imgsUUID", "reservation_id") SELECT "id", "uuid", "first_name", "last_name", "imgsUUID", "reservation_id" FROM `admins`;--> statement-breakpoint
DROP TABLE `admins`;--> statement-breakpoint
ALTER TABLE `__new_admins` RENAME TO `admins`;--> statement-breakpoint
PRAGMA foreign_keys=ON;