-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-09-2023 a las 19:47:16
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `la_choza_del_mate`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_productos`
--

CREATE TABLE `datos_productos` (
  `id` int(11) NOT NULL,
  `img` varchar(40) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `precio` varchar(15) NOT NULL,
  `cantidad` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `datos_productos`
--

INSERT INTO `datos_productos` (`id`, `img`, `nombre`, `precio`, `cantidad`) VALUES
(1, 'img/imperial-1.webp', 'Mate Imperial marron con alpaca', '9.000$', 2),
(2, 'img/imperial-1.webp', 'Mate Imperial marron con alpaca', '9.000$', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registrarse`
--

CREATE TABLE `registrarse` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `email` int(40) NOT NULL,
  `contraseña` int(20) NOT NULL,
  `Confirmar_contraseña` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datos_productos`
--
ALTER TABLE `datos_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registrarse`
--
ALTER TABLE `registrarse`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datos_productos`
--
ALTER TABLE `datos_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `registrarse`
--
ALTER TABLE `registrarse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
