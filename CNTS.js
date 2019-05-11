//Hadi jahangiri
//Convert number to string
//Examples
//// 123 => صد و بیست و سه
//// 658,902 => ششصد و پنجاه و هشت هزار و نهصد و دو

var convertor = (function() {
  var convertor = {
    convert: function(num) {
      console.log(num);
      //if (!$.isNumeric(num))
      if (isNaN(num)) return "عدد وارد شده معتبر نمی باشد.";
      num = Math.round(num);
      var yekan = ["یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
      var dahgan1 = [
        "ده",
        "یازده",
        "دوازده",
        "سیزده",
        "چهارده",
        "پانزده",
        "شانزده",
        "هفده",
        "هجده",
        "نوزده"
      ];
      var dahgan2 = [
        "بیست",
        "سی",
        "چهل",
        "پنجاه",
        "شصت",
        "هفتاد",
        "هشتاد",
        "نود"
      ];
      var sadgan = [
        "صد",
        "دویست",
        "سیصد",
        "چهارصد",
        "پانصد",
        "ششصد",
        "هفتصد",
        "هشتصد",
        "نهصد"
      ];

      var _num = num.toString();
      var _count = 0;
      var _yekan = "";
      var _dahgan = "";
      var _sadgan = "";
      var _hezargan = "";
      var _hezargan2 = "";
      var _milion = "";
      var _milion2 = "";
      var _miliard = "";
      var _miliard2 = "";
      var _terilion = "";
      var _triliard = "";

      for (var i = _num.length - 1; i >= 0; i--) {
        _count++;

        //-1 => برای اینکه با توجه به موقعیت پیدا میکنم و جون از یک شروع میکنم پس منهای یک میکنم
        // که موقعیت درست رو به من بده
        var _s = parseInt(_num[i]) - 1;
        switch (_count) {
          case 1:
            if (_s >= 0) _yekan = yekan[_s];
            break;
          case 2:
            if (_s >= 0) {
              if (_s === 0) {
                // زمانی که عدد کوچکتر از 20 باشد
                var _d = parseInt(_num[i + 1]);
                _dahgan = dahgan1[_d];
                _yekan = "";
              } else {
                _dahgan = dahgan2[_s - 1];

                if (_yekan.trim() !== "") _dahgan += " و ";
              }
            }
            break;
          case 3:
            //صدگان
            if (_s >= 0) {
              _sadgan = sadgan[_s];
              if (_yekan.trim() !== "" || _dahgan.trim() !== "")
                _sadgan += " و ";
            }
            break;
          case 4:
            //هزارگان
            if (_s >= 0) {
              _hezargan = yekan[_s];
              if (
                _yekan.trim() !== "" ||
                _dahgan.trim() !== "" ||
                _sadgan.trim() !== ""
              )
                _hezargan += " هزار و ";
              else _hezargan += " هزار ";
            }
            break;
          case 5:
            if (_s >= 0) {
              var _d = parseInt(_num[i + 1]);
              if (_s === 0) {
                // زمانی که عدد کوچکتر از 20 باشد
                _hezargan = dahgan1[_d] + " هزار ";
                // _yekan = '';
              } else {
                if (yekan[_d - 1] == undefined)
                  _hezargan = dahgan2[_s - 1] + " هزار ";
                else
                  _hezargan =
                    dahgan2[_s - 1] + " و " + yekan[_d - 1] + " هزار ";
              }

              if (
                _yekan.trim() !== "" ||
                _dahgan.trim() !== "" ||
                _sadgan.trim() !== ""
              )
                _hezargan += " و ";
            }
            break;
          case 6:
            if (_s >= 0) {
              _hezargan2 = sadgan[_s];
              if (_hezargan.trim() !== "") _hezargan2 += " و ";
              else {
                _hezargan2 += " هزار ";
                if (
                  _yekan.trim() !== "" ||
                  _dahgan.trim() !== "" ||
                  _sadgan.trim() !== ""
                )
                  _hezargan2 += " و ";
              }
            }
            break;
          case 7:
            //میلیون
            if (_s >= 0) {
              _milion = yekan[_s] + " میلیون ";
              if (
                _yekan.trim() !== "" ||
                _dahgan.trim() !== "" ||
                _sadgan.trim() !== "" ||
                _hezargan.trim() !== "" ||
                _hezargan2.trim() !== ""
              )
                _milion += " و ";
            }
            break;
          case 8:
            if (_s >= 0) {
              var _d = parseInt(_num[i + 1]);
              if (_s === 0) {
                // زمانی که عدد کوچکتر از 20 باشد
                _milion = dahgan1[_d] + " میلیون ";
                // _yekan = '';
              } else {
                if (yekan[_d - 1] === undefined)
                  _milion = dahgan2[_s - 1] + " میلیون ";
                else
                  _milion =
                    dahgan2[_s - 1] + " و " + yekan[_d - 1] + " میلیون ";
              }

              if (
                _yekan.trim() !== "" ||
                _dahgan.trim() !== "" ||
                _sadgan.trim() !== "" ||
                _hezargan.trim() !== "" ||
                _hezargan2.trim() !== ""
              )
                _milion += " و ";
            }
            break;
          case 9:
            //میلیون
            if (_s >= 0) {
              _milion2 = sadgan[_s];
              if (_milion.trim() !== "") _milion2 += " و ";
              else {
                _milion2 += " میلیون ";
                if (
                  _yekan.trim() !== "" ||
                  _dahgan.trim() !== "" ||
                  _sadgan.trim() !== ""
                )
                  _milion2 += "و ";
              }
            }
            break;
          case 10:
            //میلیارد
            if (_s >= 0) {
              _miliard = yekan[_s] + " میلیارد ";
              if (
                _yekan.trim() !== "" ||
                _dahgan.trim() !== "" ||
                _sadgan.trim() !== "" ||
                _hezargan.trim() !== "" ||
                _hezargan2.trim() !== "" ||
                _milion.trim() !== "" ||
                _milion2.trim() !== ""
              )
                _miliard += "و ";
            }
            break;
          case 11:
            if (_s >= 0) {
              var _d = parseInt(_num[i + 1]);
              if (_s === 0) {
                // زمانی که عدد کوچکتر از 20 باشد
                _miliard = dahgan1[_d] + " میلیارد ";
              } else {
                if (yekan[_d - 1] == undefined)
                  _miliard = dahgan2[_s - 1] + " میلیارد ";
                else
                  _miliard =
                    dahgan2[_s - 1] + " و " + yekan[_d - 1] + " میلیارد ";
              }

              if (
                _yekan.trim() !== "" ||
                _dahgan.trim() !== "" ||
                _sadgan.trim() !== "" ||
                _hezargan.trim() !== "" ||
                _hezargan2.trim() !== "" ||
                _milion.trim() !== "" ||
                _milion2.trim() !== ""
              )
                _miliard += "و ";
            }
            break;
          case 12:
            //میلیون
            if (_s >= 0) {
              _miliard2 = sadgan[_s];
              if (_miliard.trim() !== "") _miliard2 += " و ";
              else {
                _miliard2 += " میلیارد ";
                if (
                  _yekan.trim() !== "" ||
                  _dahgan.trim() !== "" ||
                  _sadgan.trim() !== ""
                )
                  _miliard2 += "و ";
              }
            }
            break;
          default:
            break;
        }
      }

      return (
        _miliard2 +
        _miliard +
        _milion2 +
        _milion +
        _hezargan2 +
        _hezargan +
        _sadgan +
        _dahgan +
        _yekan
      );
    }
  };

  return convertor;
})();
