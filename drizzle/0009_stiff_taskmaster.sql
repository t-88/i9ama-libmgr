PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_book_tags` (
	`book_id` integer,
	`tag_id` integer,
	FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
INSERT INTO `__new_book_tags`("book_id", "tag_id") SELECT "book_id", "tag_id" FROM `book_tags`;--> statement-breakpoint
DROP TABLE `book_tags`;--> statement-breakpoint
ALTER TABLE `__new_book_tags` RENAME TO `book_tags`;--> statement-breakpoint
PRAGMA foreign_keys=ON;