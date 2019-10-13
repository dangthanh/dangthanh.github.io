+++
title = "Tạo MP3 Player với HTML5 và CSS3"
slug = "tao-mp3-player-voi-html5-va-css3"
date = "2013-10-06"
tags = ["css", "javascript"]
+++

Bạn muốn tự tạo MP3 Player với phong cách riêng của mình. HTML5 Audio giúp bạn dễ dàng tùy biến giao diện và dễ dàng nhúng vào trang web của bạn.

Với các trình duyệt hỗ trợ HTML5 Audio, bạn có thể sử dụng:

~~~html
<audio src="audio.mp3" preload="auto" controls autoplay loop>
	<p>Trình duyệt của bạn không hỗ trợ HTML5 Audio</p>
</audio>
Hoặc
<audio preload="auto" controls autoplay loop>
	<source src="audio.mp3" type="audio/mp3">
	<p>Trình duyệt của bạn không hỗ trợ HTML5 Audio</p>
</audio>
~~~

Ở ví dụ trên ta đã sử dụng một số thuộc tính của HTML5 Audio:

Thuộc tính| Mô tả
--- | ---
autoplay | Tập tin nhạc sẽ tự động chạy khi bắt đầu
controls | Các điều khiển cho audio sẽ hiển thị theo mặc định của trình duyệt
loop | Tập tin nhạc sẽ tự động lặp lại sau khi kết thúc
preload | Tải thông tin của tập tin nhạc <br> - none: Không load thông tin tập nhạc <br> - auto: Tự động load thông tin tập tin nhạc <br> - metadata: Load các siêu dữ liệu của tập tin nhạc
src | Nguồn của tập tin nhạc

### Tạo MP3 Player

Mình đã giới thiệu chung về HTML5 Audio. Giờ mình sẽ giới thiệu các bạn cách để xây dựng một MP3 Player cho riêng mình.

#### HTML

Đầu tiên mình sẽ xây dựng một audio với các thành phần sau:

- Tập tin nhạc
- Loading: tạo hiệu ứng đơn giản khi chạy nhạc
- Controls: gồm các điều khiển Play, Pause, Volumn, Seeking

~~~html
<div class="player">
	<audio id="player__source" src="audio.mp3">
		<p>Trình duyệt của bạn không hỗ trợ HTML5 Audio</p>
	</audio>
	<div class="player__loading"></div>
	<div class="player__control">
		<button id="playPause"></button>
		<span id="currentTime">00:00</span>
		<input id="seek" type="range" min="0" value="0">
		<span id="durationTime">00:00</span>
		<button id="muted"></button>
	</div>
</div>
~~~

#### JavaScript

HTML5 Audio cung cấp nhiều sự kiện giúp bạn điều khiển và đồng bộ hóa phát lại tập tin nhạc.

Muốn làm việc với HTML5 Audio đầu tiên ta truy vấn đến các thành phần audio mà ta đã xây dựng ở trên.

~~~javascript
var player = document.getElementById('player__source'),
	playLoading = document.querySelectorAll('.player__loading span'),
	playPause = document.getElementById('playPause'),
	currentTime = document.getElementById('currentTime'),
	seek = document.getElementById('seek'),
	durationTime = document.getElementById('durationTime'),
	muted = document.getElementById('muted');
~~~

**Play và Pause**

Ta tiến hành kiểm tra nếu nhạc đang chạy sẽ nút Pause sẽ hiển thị và ngược lại.

~~~javascript
playPause.addEventListener('click', playPauseMusic, false);

function playPauseMusic() {
	if (player.paused) {
		player.play();
		// Kiểm tra thời gian hiện tại của bài nhạc
		timeInterval = setInterval(timeUpdateMusic, 100);
		// Thay đổi giá trị của seek
		seek.addEventListener('change', seekMusic, false);
	} else {
		player.pause();
	}
}

function timeUpdateMusic() {
	// Thời gian toàn bộ của bài nhạc
	durationTime.innerHTML = player.duration;
	// Thời gian hiện tại của bài nhạc
	currentTime.innerHTML = player.currentTime;
	seek.max = player.duration;
	seek.value = player.currentTime;
}

function seekMusic() {
	player.currentTime = seek.value;
}
~~~

**Volumn - Âm Thanh**

Tương tự như Play và Pause, ta cũng kiểm tra volumn của nhạc đang tắt hay bật. Ở đây mình xây dựng volumn chỉ có hai chức năng mở âm thanh và tắt âm thanh.

~~~javascript
muted.addEventListener('click', mutedMusic, false);

function mutedMusic() {
	if (player.muted) {
		// Mở âm thanh
		player.muted = false;
	} else {
		// Tắt âm thanh
		player.muted = true;
	}
}
~~~

### CSS3

Với CSS3 bạn có thể sử dụng CSS3 Animation và Transtion để làm cho Player của bạn sinh động hơn. Mình sẽ hướng dẫn chi tiết hơn ở những bài viết sau. Ở ví dụ dưới đây mình **[sử dụng icon font](/blog/su-dung-icon-fonts/)** để làm các nút như play và volumn.

{{% codepen height="226" id="jbBZjw" %}}

Bạn có thể tham khảo các liên kết sau để có thể tìm hiểu sâu hơn về HTML5 Audio:

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Events/Media_events)
- [HTML5 Doctor](http://html5doctor.com/html5-audio-the-state-of-play/)
