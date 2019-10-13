---
title: "Classes Javascript và Vue.js"
slug: "classes-javascript-va-vue"
date: 2019-03-16T22:31:48+07:00
tags: ["javascript", "vue"]
---

Trước tôi đã giới thiệu cho các bạn về [Component trong Vue.js](/blog/bat-dau-voi-vue/#2-components). Bây giờ chúng ta thử tạo một component để tạo một *User* như sau:

```javascript
<template>
<form>
  <input type="text" v-model="user.firstName"/>
  <input type="text" v-model="user.lastName"/>
  <input type="text" v-model="user.hobby"/>
  <span v-show="fullName">{{ fullName }}</span>
  <button @click.prevent="handlerAddNewUser">Add New User</button>
</form>
</template>

<script>
import UserService from '@services/user';

export default {
  name: 'Comment',
  data() {
    return {
      user: {
        fistName: '',
        lastName: '',
        hobby: '',
        created: 0
      }
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    async handlerAddNewUser() {
      await UserService.post('/add', {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        hobby: this.user.hobby,
        created: new Date().getTime()
      });
  
      // Reset form
      this.user.firstName = '';
      this.user.lastName = '';
      this.user.hobby = '';
    }
  }
}
</script>
```

Component viết kiểu này chúng ta rất hay thường dùng. Code trên vẫn chạy ổn.

Vấn đề ở đây chũng ta sẽ gặp phải là:

- Component càng ngày càng phát triển, và có thể sẽ có thêm nhiều thuộc tính Comment nữa
- Ở đây chúng ta lặp đi lặp lại `this.user` và có thể dẫn đến một số lỗi không mong muốn như dễ dàng bỏ qua một vài thuộc tính khi có nhiều đoạn code hơn.
- Không thể tái sử dụng những hàm logic cho các component khác.

[Classes JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) là một tính năng được giới thiệu trong ECMAScript 2015 (hay thường gọi là ES6). Và ở đây tôi sử dụng Classess của ES6 để khắc phục những vấn đề trên và sử dụng chung với Vue.js

Đầu tiên tôi sẽ khởi tạo một classes như sau:

```javascript
class User() {
  constructor(user = {}) {
    this.firstName = user.firstName ? user.firstName : '';
    this.lastName = user.lastName ? user.lastName : '';
    this.hobby = user.hobby ? user.hobby : '';
    this.created = 0;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  createPayload() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      hobby: this.hobby,
      created: new Date().getTime()
    }
  }
}
```

Giờ ta sẽ trở lại với Component ở trên

```javascript
<template>
<form>
  <input type="text" v-model="user.firstName"/>
  <input type="text" v-model="user.lastName"/>
  <input type="text" v-model="user.hobby"/>
  <span v-show="user.name">{{ user.name }}</span>
  <button @click.prevent="handlerAddNewUser">Add New User</button>
</form>
</template>

<script>
import UserService from '@/services/user';
import User from '@/constructor/user';

export default {
  name: 'Comment',
  data() {
    return {
      user: new User()
    }
  },
  methods: {
    async handlerAddNewUser() {
      await UserService.post('/add', this.user.createPayload());
  
      // Reset form
      Object.assign(this.user, new User())
    }
  }
}
</script>
```

Ở đây ta thấy rằng:

- Việc quản lý lỗi không mong muốn cho từng thuộc tính của User sẽ đơn giản hơn
- Các thuộc tính `computed` sử dụng Component của Vue.js sẽ tự động có sẵn trong khởi tạo của User
- Việc quản lý logic ở một nơi sẽ giúp bạn dễ dàng kiểm soát và tái sử dụng

### Ý kiến chuyên gia

Theo một số ý kiến chuyên gia thì [không nên sử dụng ES6 Classes](https://twitter.com/_ericelliott/status/573090480004591617). Nhưng theo tôi trong trường hợp này việc sử dụng Classes trong Vue.js giúp cải thiện khả năng quản lý lỗi cũng như logic được tốt hơn.
