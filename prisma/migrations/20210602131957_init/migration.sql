-- CreateTable
CREATE TABLE "todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT,
    "title" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
