-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 06 2017 г., 17:43
-- Версия сервера: 10.1.21-MariaDB
-- Версия PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ispoved`
--

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE `comments` (
  `commentdate` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `commenttext` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `comments`
--

INSERT INTO `comments` (`commentdate`, `commenttext`, `id`) VALUES
('6/6/2017 19:13', 'ГОСПОДИ КАК ЖЕ ЭТО АМОРАЛЬНО!!! КАК ВЫ ВООБЩЕ ЖИВЕТЕ???? ПИЗДЕЦ', 0),
('6/6/2017 19:19', '=)', 6),
('6/6/2017 19:20', 'Господи, да как вам не стыдно??? Вы ОЧЕНЬ аморальны!!!', 1),
('6/6/2017 19:21', 'Господи, да как вам не стыдно??? Вы ОЧЕНЬ аморальны!!!', 2),
('6/61/2017 19:23', 'дибил', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `textpost` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `postdate` text CHARACTER SET latin1 NOT NULL,
  `likes` int(11) NOT NULL,
  `dislikes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`id`, `textpost`, `postdate`, `likes`, `dislikes`) VALUES
(1, 'Меня зовут Саша А.Я любил ебаться с другом Даниил П. в жопу.', '6/6/2017 16:42', 31, 0),
(2, 'Я толян', '6/6/2017 16:43', 2, 1),
(3, '<img src=\"https://im0-tub-ru.yandex.net/i?id=646c7892a3767bb04e31ccf4e81d5222-l', '6/6/2017 18:4', 0, 0),
(4, '<img src=\"https://m.shape.ru/uploads/media/newsContent/0001/13/290ac7561de81c6872f0ee6933bde16a4ad4c8a2.jpeg\" height=32>', '6/6/2017 18:5', 0, 0),
(5, '<h1>ДИБИЛЫ</h1>', '6/6/2017 18:5', 0, 0),
(6, 'кек)', '6/6/2017 19:12', 0, 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
