-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2021 at 01:17 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seasonless`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customerID` int(11) NOT NULL,
  `customerName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customerID`, `customerName`) VALUES
(1, 'Ishimwe Aline'),
(2, 'John Doe'),
(3, 'Kalisa John ');

-- --------------------------------------------------------

--
-- Table structure for table `customersummaries`
--

CREATE TABLE `customersummaries` (
  `customerID` int(11) NOT NULL,
  `seasonID` int(11) NOT NULL,
  `totalRepaid` decimal(10,0) NOT NULL,
  `totalCredit` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customersummaries`
--

INSERT INTO `customersummaries` (`customerID`, `seasonID`, `totalRepaid`, `totalCredit`) VALUES
(1, 1, '80', '100'),
(1, 2, '30', '120'),
(2, 1, '80', '100'),
(2, 2, '30', '120'),
(3, 1, '100', '100'),
(3, 2, '120', '120');

-- --------------------------------------------------------

--
-- Table structure for table `repayments`
--

CREATE TABLE `repayments` (
  `repaymentID` int(11) NOT NULL,
  `customerID` int(11) NOT NULL,
  `seasonID` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `amount` int(11) NOT NULL,
  `parentID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `repaymentuploads`
--

CREATE TABLE `repaymentuploads` (
  `customerID` int(11) NOT NULL,
  `seasonID` int(11) DEFAULT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `amount` decimal(10,0) NOT NULL,
  `repaymentUploadID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `seasons`
--

CREATE TABLE `seasons` (
  `seasonID` int(11) NOT NULL,
  `seasonName` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seasons`
--

INSERT INTO `seasons` (`seasonID`, `seasonName`, `startDate`, `endDate`) VALUES
(1, 'season 2011', '2011-01-29', '2011-09-29'),
(2, 'Season 2012', '2012-01-29', '2012-09-29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customerID`);

--
-- Indexes for table `customersummaries`
--
ALTER TABLE `customersummaries`
  ADD KEY `CustomerID` (`customerID`),
  ADD KEY `SeasonID` (`seasonID`);

--
-- Indexes for table `repayments`
--
ALTER TABLE `repayments`
  ADD PRIMARY KEY (`repaymentID`),
  ADD KEY `customerID` (`customerID`),
  ADD KEY `seasonID` (`seasonID`),
  ADD KEY `parentID` (`parentID`);

--
-- Indexes for table `repaymentuploads`
--
ALTER TABLE `repaymentuploads`
  ADD PRIMARY KEY (`repaymentUploadID`),
  ADD KEY `customerID` (`customerID`),
  ADD KEY `seasonID` (`seasonID`);

--
-- Indexes for table `seasons`
--
ALTER TABLE `seasons`
  ADD PRIMARY KEY (`seasonID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `repayments`
--
ALTER TABLE `repayments`
  MODIFY `repaymentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `repaymentuploads`
--
ALTER TABLE `repaymentuploads`
  MODIFY `repaymentUploadID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customersummaries`
--
ALTER TABLE `customersummaries`
  ADD CONSTRAINT `customersummaries_ibfk_1` FOREIGN KEY (`SeasonID`) REFERENCES `seasons` (`seasonID`);

--
-- Constraints for table `repayments`
--
ALTER TABLE `repayments`
  ADD CONSTRAINT `repayments_ibfk_1` FOREIGN KEY (`parentID`) REFERENCES `repaymentuploads` (`repaymentUploadID`);

--
-- Constraints for table `repaymentuploads`
--
ALTER TABLE `repaymentuploads`
  ADD CONSTRAINT `repaymentuploads_ibfk_1` FOREIGN KEY (`seasonID`) REFERENCES `seasons` (`seasonID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
