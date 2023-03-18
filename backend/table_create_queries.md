// USER TABLE

<!-- CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `emailAddress` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `role` varchar(255) NOT NULL DEFAULT 'user'
  PRIMARY KEY (`id`)
) -->

//Donation table

<!-- CREATE TABLE `Donation` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`weight` int(11) NOT NULL,
`donationType` enum('Food','Cloth','Books') NOT NULL,
`donatorId` int(11) NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`donatorId`) REFERENCES `User` (`id`)
) -->

//MissingReport Table

<!-- CREATE TABLE `MissingReport` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `childLastSeenAddress` varchar(255) NOT NULL,
  `childLastSeenTime` datetime NOT NULL,
  `childAge` int(11) NOT NULL,
  `remarks` varchar(255) NOT NULL,
  `reporterId` int(11) NOT NULL,
   PRIMARY KEY (`id`),
   FOREIGN KEY (`reporterId`) REFERENCES `User` (`id`)

)  -->

//KidsForAdoption

<!-- CREATE TABLE `KidsForAdoption` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `picture` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `caste` enum('Brahmin','Kshatriya','Vaishya','Sudra') NOT NULL,
  `gender` enum('Male','Female','Other') NOT NULL,
  `provience` enum('Koshi','Madhesi','Bagmati','Gandaki','Lumbini','Karnali','SudurPachim') NOT NULL,
  `description` varchar(255) NOT NULL,
  `isAdopted` boolean NOT NULL,
  `adopterId` int(11) NOT NULL,
   PRIMARY KEY (`id`),
   FOREIGN KEY (`adopterId`) REFERENCES `User` (`id`)
)  -->

//Volunteer

<!-- CREATE TABLE `Volunteer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `picture` varchar(255) NOT NULL,
   PRIMARY KEY (`id`)
)  -->
