<template>
  <div class="max-w-3xl mx-auto px-6 md:px-0">
    <div class="bg-white rounded p-6">
      <p>
        Tôi tên là Đặng Văn Thanh. Hiện đang sinh sống ở
        <a
          href="https://vi.wikipedia.org/wiki/S%C3%A0i_G%C3%B2n_(%C4%91%E1%BB%8Bnh_h%C6%B0%E1%BB%9Bng)"
          target="_blank"
          rel="noopener noreferrer"
          >Sài Gòn</a
        >
        và làm việc tại công ty
        <a href="https://poetadigital.com" target="_blank" rel="noopener noreferrer"
          >Poeta Digital</a
        >.
      </p>
      <p>
        Tôi rất thích lập trình JavaScript và Functional Programming. Thường ở
        Frontend tôi sử dụng chủ yếu là Nuxt.js và Vue.js nhưng tôi cũng thích
        sử dụng các thư viện và framework khác như Angular, React, Aurelia.
        Thỉnh thoảng tôi cũng viết Backend sử dụng Node.js để tạo RESTful APIs.
        Hiện tại, tôi cũng đang học Elm và Elixir để viết web.
      </p>
      <p>
        Bạn có thể tìm thấy tôi qua
        <a href="https://github.com/dangvanthanh" target="_blank" rel="noopener noreferrer"
          >Github</a
        >,
        <a href="https://twitter.com/dangvanthanh" target="_blank" rel="noopener noreferrer"
          >Twitter</a
        >
        hoặc liên hệ qua
        <a href="mailto:dangvanthanh@dangthanh.org" target="_blank" rel="noopener noreferrer"
          >Email</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Dang Thanh Blog - Về tôi',
      meta: [
        { name: 'author', content: 'Dang Van Thanh' },
        {
          name: 'description',
          property: 'og:description',
          content: 'Dang Thanh Blog - Về tôi',
          hid: 'description'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://dangthanh.org/about'
        }
      ]
    };
  }
};
</script>

<style></style>
