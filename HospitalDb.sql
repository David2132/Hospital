-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: HospitalDb
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ache_med`
--

DROP TABLE IF EXISTS `ache_med`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ache_med` (
  `med_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `quanity` int DEFAULT NULL,
  `req_med_id` int NOT NULL,
  PRIMARY KEY (`med_id`),
  UNIQUE KEY `med_id_UNIQUE` (`med_id`),
  KEY `fk_ache_med_ache_req1_idx` (`req_med_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ache_med`
--

LOCK TABLES `ache_med` WRITE;
/*!40000 ALTER TABLE `ache_med` DISABLE KEYS */;
INSERT INTO `ache_med` VALUES (1,'Laxitive',NULL,0),(2,'Tyronol',NULL,0);
/*!40000 ALTER TABLE `ache_med` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ache_req`
--

DROP TABLE IF EXISTS `ache_req`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ache_req` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `med_name` varchar(45) DEFAULT NULL,
  `quantity` int DEFAULT '0',
  `fufilled` tinyint(1) DEFAULT '0',
  `name` varchar(45) DEFAULT NULL,
  `med_id` int DEFAULT NULL,
  `patients_patient_id` int DEFAULT NULL,
  PRIMARY KEY (`request_id`),
  UNIQUE KEY `request_id_UNIQUE` (`request_id`),
  KEY `fk_ache_req_patients2_idx` (`patients_patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ache_req`
--

LOCK TABLES `ache_req` WRITE;
/*!40000 ALTER TABLE `ache_req` DISABLE KEYS */;
INSERT INTO `ache_req` VALUES (1,'Tyronol',3,0,'John Wick',NULL,2),(2,'Tyronol',10,1,'Johnny Whitetaker',1,1);
/*!40000 ALTER TABLE `ache_req` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `employee_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `schedule` json DEFAULT NULL,
  `floor_num` int DEFAULT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'David Duong','Male','Doctor','{\"fr\": \"5-9\", \"mon\": \"5-9\", \"sat\": \"5-9\", \"sun\": \"5-9\", \"wed\": \"5-9\", \"tues\": \"5-9\", \"thurs\": \"5-9\"}',5),(2,'Josh Bowden','Male','Nurse','{\"fr\": \"5-9\", \"mon\": \"5-9\", \"sat\": \"5-9\", \"sun\": \"5-9\", \"wed\": \"5-9\", \"tues\": \"5-9\", \"thurs\": \"5-9\"}',5),(3,'Stephanie Pham','Female','Accountant','{\"fr\": \"5-9\", \"mon\": \"5-9\", \"sat\": \"5-9\", \"sun\": \"5-9\", \"wed\": \"5-9\", \"tues\": \"5-9\", \"thurs\": \"5-9\"}',5),(4,'Vy Tran','Female','Doctor','{\"fr\": \"6am-10pm\", \"mon\": \"5-9\", \"sat\": \"5pm-1am\", \"sun\": \"6am-10pm\", \"wed\": \"\", \"tues\": \"6am-10pm\", \"thurs\": \"6am-10pm\"}',10),(5,'Ashley Pham','F','CRNA','{\"fr\": \"\", \"mon\": \"5-9\", \"sat\": \"5pm-1am\", \"sun\": \"6am-10pm\", \"wed\": \"\", \"tues\": \"\", \"thurs\": \"5-9\"}',5),(6,'Barack Obama','Female','Ex-President','{\"fri\": \"\", \"mon\": \"\", \"sat\": \"\", \"sun\": \"\", \"wedn\": \"\", \"thurs\": \"\", \"tuesday\": \"\"}',3),(7,'Barack Obama','Female','Ex-President','{\"fri\": \"\", \"mon\": \"\", \"sat\": \"\", \"sun\": \"\", \"wedn\": \"\", \"thurs\": \"\", \"tuesday\": \"\"}',3),(8,'Jefferson Tally','Male','Lawyer','{\"fri\": \"\", \"mon\": \"\", \"sat\": \"\", \"sun\": \"\", \"wedn\": \"\", \"thurs\": \"\", \"tuesday\": \"\"}',2);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lhs_med`
--

DROP TABLE IF EXISTS `lhs_med`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lhs_med` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `ache_med_med_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `med_id_UNIQUE` (`id`),
  KEY `fk_lhs_med_ache_med1_idx` (`ache_med_med_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lhs_med`
--

LOCK TABLES `lhs_med` WRITE;
/*!40000 ALTER TABLE `lhs_med` DISABLE KEYS */;
INSERT INTO `lhs_med` VALUES (1,'Tyronol',20,NULL);
/*!40000 ALTER TABLE `lhs_med` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_med`
--

DROP TABLE IF EXISTS `patient_med`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_med` (
  `id` int NOT NULL AUTO_INCREMENT,
  `instructions` text,
  `med_id` int NOT NULL,
  `patient_id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_patient_med_lhs_med1_idx` (`med_id`),
  KEY `fk_patient_med_patients1_idx` (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_med`
--

LOCK TABLES `patient_med` WRITE;
/*!40000 ALTER TABLE `patient_med` DISABLE KEYS */;
INSERT INTO `patient_med` VALUES (1,'Take a table spoon twice a day',2,2,'Tyronol'),(2,'Take when stomach hurts',1,2,'Laxative');
/*!40000 ALTER TABLE `patient_med` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `blood_type` varchar(3) DEFAULT NULL,
  `room_number` int DEFAULT NULL,
  `employees_id` json DEFAULT NULL,
  `diagnosis` text,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,'Johnny Whitetaker','M','2000-02-04','B+',812,'[4]','Stage 1 of Boredom'),(2,'John Wick','M','1990-02-04','B+',512,'[1, 2]','Gun Shots'),(3,'George Jefferson','','2020-04-04','',10,'[]','Smells really bad');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-27 13:30:50
