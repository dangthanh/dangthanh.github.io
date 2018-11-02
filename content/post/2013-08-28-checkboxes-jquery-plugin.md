+++
title = "Checkboxes jQuery Plugin"
slug = "checkboxes-jquery-plugin"
date = "2013-08-28"
tags = ["javascript"]
+++

[jQuery](http://jquery.com/) là một thư viện tuyệt vời của JavaScript. Các jQuery plugin giúp bạn làm việc linh hoạt hơn và hiệu quả hơn. Hôm nay mình giới thiệu với các bạn một plugin mình tự viết là Checkboxes. Đây là jQuery Plugin hỗ trợ việc chọn và không chọn cho nhiều checkbox.

### Checkboxes jQuery Plugin

~~~javascript
(function($) {

  'use strict';

  $.fn.extend({
    checkboxes: function(options) {
      // Tham số mặc định.
      var defaults = {
        itemChild: ''
      };

      var option = $.extend(defaults, options);

      // Hàm kiểm tra chọn hoặc không chọn cho các phần tử con.
      function checkedValue(element, bool) {
        if (bool) {
          return element.each(function() {
            $(this).prop('checked', true);
          });
        } else {
          return element.each(function() {
            $(this).prop('checked', false);
          });
        }
      }

      return this.each(function() {
        var obj = option,
            $itemAll = $(this),
            $itemChild = $('input[name^="' + obj.itemChild + '"]');

        // Chọn tất cả trước khi trang khởi tạo
        if ($itemAll.is(':checked')) {
          checkedValue($itemChild, true);
        }

        // Đánh đấu chọn hoặc không chọn khi phần từ cha chọn hoặc không chọn.
        $itemAll.change(function() {
          var $self = $(this);

          if ($self.is(':checked')) {
            checkedValue($itemChild, true);
          } else {
            checkedValue($itemChild, false);
          }
        });

        // Đánh dấu chọn phần tử cha khi tất cả phần tử con được đánh dấu.
        $itemChild.change(function() {
          var flag = true;

          if (!$itemChild.is(':checked')) {
            $itemAll.prop('checked', false);
          }

          $itemChild.each(function() {
            var $self = $(this);
            if (!$self.is(':checked')) {
              flag = false;
              return;
            }
          });

          $itemAll.prop('checked', flag);
        });

      });
    }
  });
})(jQuery);
~~~

### Sử dụng Checkboxes jQuery Plugin

#### Cú pháp HTML

~~~html
<h3><input type="checkbox" class="selectAll"><span>Select All</span></h3>
<ul class="list">
  <li><input type="checkbox" id="chk01" name="chk01"><span>Item 01</span></li>
  <li><input type="checkbox" id="chk02" name="chk02"><span>Item 02</span></li>
  <li><input type="checkbox" id="chk03" name="chk03"><span>Item 03</span></li>
  <li><input type="checkbox" id="chk04" name="chk04"><span>Item 04</span></li>
  <li><input type="checkbox" id="chk05" name="chk05"><span>Item 05</span></li>
  <li><input type="checkbox" id="chk06" name="chk06"><span>Item 06</span></li>
  <li><input type="checkbox" id="chk07" name="chk07"><span>Item 07</span></li>
  <li><input type="checkbox" id="chk08" name="chk08"><span>Item 08</span></li>
  <li><input type="checkbox" id="chk09" name="chk09"><span>Item 09</span></li>
  <li><input type="checkbox" id="chk10" name="chk10"><span>Item 10</span></li>
</ul>
~~~

#### Sử dụng

~~~javascript
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="checkboxes.min.js"></script>
<script>
  $(document).ready(function() {
      $('.selectAll').checkboxes({
          itemChild: 'chk' // tên của các checkbox con
      });
  });
</script>
~~~

{{% codepen id="lraJA" height="300" %}}

Bạn cũng có thể tải Checkboxes jQuery Plugin tại [Github](https://github.com/dangvanthanh/jquery.checkboxes).

Đây là jQuery Plugin đầu tiên do mình viết nên cũng có thể không được tốt lắm. Mong các bạn góp ý thêm.
