// USER TABLE

<!-- CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `emailAddress` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB -->

//Donation table

<!-- CREATE TABLE `Donation` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`weight` int(11) NOT NULL,
`donationType` enum('Food','Cloth','Books') NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB -->

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

) ENGINE=InnoDB  -->
