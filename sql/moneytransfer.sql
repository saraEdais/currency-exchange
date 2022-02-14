-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2022 at 09:30 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `currency_exchange`
--

-- --------------------------------------------------------

--
-- Table structure for table `moneytransfer`
--

CREATE TABLE `moneytransfer` (
  `id` int(11) NOT NULL,
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL,
  `transferAmount` int(11) NOT NULL,
  `currency` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `moneytransfer`
--

INSERT INTO `moneytransfer` (`id`, `senderId`, `receiverId`, `transferAmount`, `currency`) VALUES
(3, 5, 4, 200, 'USD'),
(4, 5, 3, 100, 'EUR'),
(7, 1, 3, 150, 'CAD'),
(9, 1, 1, 150, 'CAD'),
(10, 5, 1, 150, 'CAD'),
(11, 1, 1, 150, 'CAD'),
(12, 5, 1, 150, 'CAD'),
(13, 5, 2, 150, 'CAD'),
(14, 3, 4, 350, 'CAD'),
(15, 3, 1, 350, 'CAD'),
(16, 1, 3, 350, 'CAD'),
(17, 1, 3, 350, 'CAD'),
(18, 1, 3, 350, 'CAD'),
(19, 1, 3, 350, 'CAD'),
(20, 1, 3, 350, 'CAD'),
(21, 1, 3, 350, 'CAD'),
(22, 1, 3, 350, 'CAD'),
(23, 1, 3, 350, 'CAD');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `moneytransfer`
--
ALTER TABLE `moneytransfer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `senderId` (`senderId`),
  ADD KEY `fk_receiverId` (`receiverId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `moneytransfer`
--
ALTER TABLE `moneytransfer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `moneytransfer`
--
ALTER TABLE `moneytransfer`
  ADD CONSTRAINT `fk_receiverId` FOREIGN KEY (`receiverId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_senderId` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
