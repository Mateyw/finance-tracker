-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 24, 2025 at 08:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finance_tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `category` enum('Food','Bills','Rent','Commuting Expenses','Clothes','Tech','Other') NOT NULL,
  `type` enum('Income','Expense') NOT NULL,
  `date` date NOT NULL,
  `state` enum('active','deleted') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `name`, `amount`, `category`, `type`, `date`, `state`) VALUES
(14, 14, 'Bananas', 2.00, 'Food', 'Expense', '2025-02-22', 'active'),
(15, 14, 'Apples', 3.00, 'Food', 'Expense', '2025-02-21', 'active'),
(16, 14, 'Monitor Samsung G5', 450.00, 'Tech', 'Expense', '2025-02-12', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created` date DEFAULT NULL,
  `state` enum('active','inactive') NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `created`, `state`) VALUES
(14, 'Admin', 'User', 'admin.user@admin.com', '$2b$10$8t65myzNdddsCOt.dDrynOPe.Zl8TvFgpJE9YuudZLUwasA2BSrTO', '2025-02-23', 'active'),
(19, 'User1', 'User1', 'user1.user1@user1.com', '$2b$10$iKGbMS00S68Bp/3lJBtVTOLcHaJ/WPoMw6/Y/6u.JBclW8/O3W/qa', '2025-02-24', 'active'),
(23, 'User2', 'User2', 'user2.user2@user2.com', '$2b$10$2oBnUINwyucC3FDCZy4q1uCTI4sxEtvsKxfjcp4vHMKhn3frzmRUi', '2025-02-24', 'active'),
(24, 'User3', 'User3', 'user3.user3@user3.com', '$2b$10$/NrvephlYd0odKbJKY0oKu4gKK/giMSj4d5Pj0xO7JlIOFeQ9Ityu', '2025-02-24', 'active'),
(25, 'User4', 'User4', 'user4.user4@user4.com', '$2b$10$hAsZc4H1RcoVmev5TuPcp.Vv9Dxnf2uxSLnvQ..u5Uk3QsAbDg91S', '2025-02-24', 'active'),
(26, 'User5', 'User5', 'user5.user5@user5.com', '$2b$10$8LXndsyhTy2L0hMJAdiOXue3w1TG4jDRySv.isNHj9s5..aJOK36C', '2025-02-24', 'active'),
(27, 'User6', 'User6', 'user6.user6@user6.com', '$2b$10$8P/I58m1h0H6plyIY8H2Aee8wVryG03HsmkjkUyidDI9l4t148R4C', '2025-02-24', 'active'),
(28, 'User7', 'User7', 'user7.user7@user7.com', '$2b$10$UIw.Iu7bOLoiHptmebubmuMAvyAjZfhjkQ9v/2js8J4U.hFM..oym', '2025-02-24', 'active'),
(29, 'User8', 'User8', 'user8.user8@user8.com', '$2b$10$XTLes2H/C1wSJm5eTi6BNebkeX6sXWstuflw986CcTRQXIqRnSBmm', '2025-02-24', 'active'),
(30, 'User9', 'User9', 'user9.user9@user9.com', '$2b$10$2eBPHxyj0y09wDNU/UPziu2CDYSSeG3A07kreipZ0JlpkR4ZG7WkS', '2025-02-24', 'active'),
(31, 'User10', 'User9mksdnvlsnv', 'user9.user9@user9.cfdalkaom', '$2b$10$AYpeN6aWgcf5SJg.uSrf3O9LLFQUHhoSfNTrE0SZ2U/Q1zMD4t2xK', '2025-02-24', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
