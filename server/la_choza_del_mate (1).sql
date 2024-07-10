-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-09-2023 a las 04:07:32
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
  `cantidad` int(4) NOT NULL,
  `tipo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `datos_productos`
--

INSERT INTO `datos_productos` (`id`, `img`, `nombre`, `precio`, `cantidad`, `tipo`) VALUES
(1, 'img/imperial-1.webp', 'Mate Imperial marron con alpaca', '9.000$', 2, 'imperial'),
(2, 'img/torpedo.webp', 'Mate Torpedo ', '6.000$', 3, 'torpedo'),
(3, 'img/camionero.webp', 'Mate Camionero', '5.500$', 2, 'camionero'),
(4, 'img/termo acero.jpeg', 'Termo media manija de acero', '9.500$', 5, 'termo'),
(7, 'img/termo negro.jpeg', 'Termo media manija negro', '11.500$', 3, 'termo'),
(8, 'img/imperial marron.jpg', 'Mate Imperial marron con bombilla', '12.500$', 2, 'imperial'),
(9, 'img/imperial negro.jpg', 'Mate Imperial negro de alpaca', '10.500$', 3, 'imperial'),
(10, 'img/bombilla-1.jpeg', 'Bombilla de alpaca cincelada', '5.000$', 7, 'bombilla'),
(11, 'img/bombilla resorte.jpg', 'Bombilla de resorte simple', '3.300$', 2, 'bombilla'),
(12, 'img/yerba_kraus.jpg', 'Yerba Kraus 500G', '1.000$', 3, 'yerbas'),
(13, 'img/yerba_baldo.jpg', 'Yerba Baldo 1Kg', '1.120$', 2, 'yerbas'),
(14, 'img/yerba_canarias.jpg', 'Yerba Canarias de 1kg', '1.700$', 5, 'yerbas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registrarse`
--

CREATE TABLE `registrarse` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `contraseña` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `registrarse`
--

INSERT INTO `registrarse` (`id`, `nombre`, `email`, `contraseña`) VALUES
(1, 'fran', 'fracanciscosucho@gmail.com', '$2y$10$RnHWyDTiTcZ/B'),
(2, 'dante', 'dante@gmail.com', '$2y$10$t6XemHNWNM6HQ'),
(3, 'jose pedro', 'josepedro@gmail.com', '$2y$10$YUk2f4RoKh/5U'),
(4, 'pedrooojose', 'fracanciscosucho@gmail.com', '$2y$10$XdVyO8f5VBKdd');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `registrarse`
--
ALTER TABLE `registrarse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
