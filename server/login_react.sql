-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2021 at 05:46 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `login_react`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(3) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `date`) VALUES
(1, 'somu@gmail.com', '$2b$10$xY6mo4clHl8tHxZ12F3xf.i8CmqNsFUEkxXdCBTzzQWWDEwiY4yfS', '2021-06-26 11:37:39'),
(2, 'somuu@gmail.com', '$2b$10$GVcA24UNAJlV3dU5zgFCRuU4s9bn0nUhaYVZRu.JVziZ3VgmRzAsu', '2021-06-26 11:38:13'),
(3, 'ram@gmail.com', '$2b$10$0bp6mwJ2aJnTh3LuGpJtTuMSVqw1WNQJbK7EL6A8R59.OPPGJqgc2', '2021-06-26 11:46:15'),
(4, 'atanuj383@gmail.com', '$2b$10$NN2z7zs6loysoI8OEda1xelBhuM6Crrh/woHyYHzLJeE9i3Uir//6', '2021-06-26 12:22:18'),
(5, 'atanuj5@gmail.com', '$2b$10$fKTJbChGRpZLgRkXS6moA.zQATJ8jVoBU66wV57vkeE36qfGetLdG', '2021-06-26 12:27:05'),
(6, 'atanuj55@gmail.com', '$2b$10$nnbEitRzcfPwd28a7XGc8e00Zvm38sob6I8Bv8nyxOVeV4ccUA53G', '2021-06-26 12:27:55'),
(7, 'rajuahamed.kh@gmail.com', '$2b$10$pDrNNqqSNibwoH/1fPW9t.9LUgbY28kge4FLcH0BYKhscvTDFUAum', '2021-06-26 14:45:36'),
(8, 'kkk@gmail.com', '$2b$10$WvfdXiguQbF8zoSfXy7qGeneV0XGSdgIMGriRppaJgi.vQjfiwMhi', '2021-06-26 15:02:13'),
(9, 'samrat1@gmail.com', '$2b$10$dXEjGzCNaPlRybHMRnK06.cbwnA6vTkSjld2q9xKLbDGZEilP7QFq', '2021-06-26 17:45:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
