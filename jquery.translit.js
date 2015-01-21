/**
 * Translit plugin for jQuery
 *
 * @author xdimedrolx
 */

/*global jQuery */

(function ($) {
  'use strict';

  var dictionaries = {
    my: {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ж': 'g', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l',
      'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'ы': 'i', 'э': 'e', 'А': 'A',
      'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ж': 'G', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M',
      'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Ы': 'I', 'Э': 'E', 'ё': 'yo', 'х': 'h',
      'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '', 'ь': '', 'ю': 'yu', 'я': 'ya', 'Ё': 'YO', 'Х': 'H', 'Ц': 'TS',
      'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ъ': '', 'Ь': '', 'Ю': 'YU', 'Я': 'YA'
    }
  };

  var toTranslit = function (text, dictionary) {
    return text.replace(/[А-яёЁ]/g, function (letter) {
      return dictionaries[dictionary][letter] || letter;
    });
  };

  $.fn.translit = function (callback, dictionary) {
    var self = this,
        dictionary = dictionary || 'my';

    if (!dictionaries[dictionary]) {
      $.error('Dictionary "' + dictionary + '" does not exist');
    }
    if (typeof(callback) !== 'function') {
      $.error('Callback is not function');
    }

    this.on('keyup.translit', function (e) {
      var text = toTranslit($(this).val(), dictionary);
      callback.apply(self, [text]);
    });
  }
}(jQuery));
