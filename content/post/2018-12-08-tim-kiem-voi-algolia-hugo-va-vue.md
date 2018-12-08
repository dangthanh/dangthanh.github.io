---
title: "Tìm kiếm với Algolia, Hugo và Vue.js"
slug: "tim-kiem-voi-algolia-hugo-va-vue"
date: 2018-12-08T10:59:55+07:00
tags: ["javascript", "hugo", "vue"]
---

Trước đây, muốn tìm kiếm bài viết, tui thường vào [danh mục](/tags) và tìm kiếm các tags như `javascript`, `sass`, `css`...Và với mong muốn tìm kiếm bài viết được tốt hơn nên tui quyết định thử nghiệm với [Algolia](https://www.algolia.com/), kết hợp một xíu với [Vue.js](/blog/bat-dau-voi-vue/).

### Tại sao là Algolia?

Thực ra đối với những người làm lập trình như tui, thì lí do đầu tiên là được học thêm một công nghệ mới. Thứ hai là sau khi thử nghiệm Algolia, thời gian kết quả tìm kiếm mà Algolia trả về rất nhanh, làm tui cũng rất bất ngờ và mong muốn tìm hiểu thêm về Algolia. 

Bên cạnh đó, qua quá trình mới làm quen với Algolia tui thấy nó có những điểm nổi bật sau:

- Alogolia cung cấp gói [miễn phí](https://www.algolia.com/users/sign_up) cho bạn sử dụng
- Giao diện quản lý dễ sử dụng cho phép bạn theo dõi, truy vết và giám sát các hoạt động tìm kiếm
- Cung cấp các API Client cho nhiều ngôn ngữ như `JavaScript`, `Node.js`, `Go`, `C#`
- Các thư viện Algolia cung cấp rất hay như [Autocomplete](https://github.com/algolia/autocomplete.js), [Algolia Places](https://community.algolia.com/places/)

### Tạo JSON Search Index trong Hugo

**Algolia** cung cấp tìm kiếm theo chỉ mục với các định dạng file `JSON`, `CSV` hoặc `TSV` hoặc sử dụng [API](https://www.algolia.com/doc/api-reference/api-methods/) để thêm thông tin tìm kiếm được đánh chỉ mục.

Với **Hugo** mình sẽ giới thiệu các bạn cách tạo ra một file `JSON` và tải tập tin đó lên Algolia.

Đầu tiên, ta tạo một file `json` trong **layouts/_default/** hoặc **themes/[tên-theme-của-bạn]/layouts/_default/** với tên là ***list.algolia.json*** với cấu trúc như sau.

```json
{{- $.Scratch.Add "index" slice -}}
{{- $section := $.Site.GetPage "post" .Section }}
{{- range .Site.AllPages -}}
  {{- if or (and (.IsDescendant $section) (and (not .Draft) (not .Params.private))) $section.IsHome -}}
    {{- $.Scratch.Add "index" (dict "objectID" .UniqueID "date" .Date.UTC.Unix "description" .Description "dir" .Dir "expirydate" .ExpiryDate.UTC.Unix "fuzzywordcount" .FuzzyWordCount "keywords" .Keywords "kind" .Kind "lang" .Lang "lastmod" .Lastmod.UTC.Unix "permalink" .Permalink "publishdate" .PublishDate "readingtime" .ReadingTime "relpermalink" .RelPermalink "summary" .Summary "title" .Title "type" .Type "url" .URL "weight" .Weight "wordcount" .WordCount "section" .Section "tags" .Params.Tags "categories" .Params.Categories "authors" .Params.Authors)}}
  {{- end -}}
{{- end -}}
{{- $.Scratch.Get "index" | jsonify -}}
```

Tập tin `JSON` sẽ mang những thông tin được định nghĩa ở trên như `authors`, `date`, `title`...

Tập tin sẽ được tạo ra từ những thông tin các bài viết chứa trong thư mục **post**. Bạn có thể thay **post** bằng thư mục bài viết của bạn trong thư mục **content**

Ở đây tui sử dụng một số [cú pháp về Functions](https://gohugo.io/categories/functions) trong Hugo. Bạn có thể tham khảo thêm nhé.

Tiếp theo ta mở tập tin **config.toml** và thêm một số cấu hình vào:

```toml
[outputFormats.Algolia]
  baseName = "algolia"
  isPlainText = true
  mediaType = "application/json"
  notAlternative = true

[params.algolia]
  vars = ["title", "description", "summary", "date", "lastmod", "permalink"]
  params = ["categories", "tags"]

[outputs]
  home = ["HTML", "RSS", "Algolia"]
```

Sau đó bạn chạy lệnh

```shell
$ hugo
```

Bạn sẽ có một tập tin là **algolia.json** trong thư mục **public**

### Tải tập tin lên Alolia

Sau khi có tập tin **algolia.json** và [đăng ký](https://www.algolia.com/users/sign_up) xong một tài khoản Algolia. Bạn đăng nhập vào [Algolia Dashboard](https://www.algolia.com/dashboard).

- Bạn tạo một App sử dụng Algolia. Ở đây tui ví dụ app có tên là *dangthanhblog*

    {{% img src="/images/algolia_create_app.png" alt="Tạo app sử dụng Algolia" %}}

- Ở giao diện Dashboard bạn chọn **Indices** và nhấn vào **Create index** giả sử với tên là *posts*

    {{% img src="/images/algolia_create_index.png" alt="Tạo index trong Algolia" %}}

    Chọn **Manage index** -> **Upload file** chọn tập tin **algolia.json** trong thư mục **public** đã tạo được ở trên.

- Ngoài cách tải trực tiếp tập tin lên, bạn có thể dùng [atomic-algolia](https://www.npmjs.com/package/atomic-algolia) để tải tập tin lên Algolia thông qua script hoặc serverless nhé.

### Tạo Algolia Component với Vue.js

Để hiển thị trên Hugo. Tui tạo ra một trang `static templates` với tên gọi là `archives.md` trong thư mục **content** như sau:

```markdown
---
type: "static"
layout: "archives"
---
```

Sau đó tạo thêm file HTML có tên là **layouts/static/archives.html** tương ứng với `layout` được khai báo ở trên.

Algolia cung cấp một thư viện JavaScript để bạn dễ dàng kết với Algolia thông qua [Instantsearch.js](https://community.algolia.com/instantsearch.js/) hoặc [Vue Instantsearch](https://v2--vue-instantsearch.netlify.com/getting-started/migration.html).

Vì tui đã [giới thiệu Vue.js](/blog/bat-dau-voi-vue/) có một tính năng rất hay đó là Component. Nên tui quyết định viết Component này sử dụng [Vue InstantSearch](https://v2--vue-instantsearch.netlify.com/getting-started/migration.html) vừa giúp bạn biết thêm về cách xây dựng Component trong Vue thông qua thuộc tính ***props***.

```javascript
Vue.component('SearchAlgoliaComponent', {
  name: 'SearchAlgoliaComponent',
  template: `
    <ais-index
      :app-id="appId"
      :api-key="apiKey"
      :index-name="indexName"
      :routing="true">
      <ais-search-box placeholder="Tìm kiếm tiêu đề hoặc nội dung bài viết..."></ais-search-box>
      <ais-highlight :hit="hit" attribute="title"></ais-highlight>
      <ais-results>
        // Your display results
      </ais-results>
    </ais-index>
  `,
  props: {
    appId: {
      type: String,
      require: true
    },
    apiKey: {
      type: String,
      required: true
    },
    indexName: {
      type: String,
      required: true
    },
    routing: {
      type: Boolean,
      default: true
    }
  }
});
```

Vậy là ta đã có một Component sử dụng Vue cho Algolia. Giờ ta sẽ sử dụng nó trong **layouts/static/archives.html** nhé.

```html
<main id="app">
  <search-algolia-component 
    :appId="yourAppId" 
    :apiKey="yourApiKey" 
    :indexName="yourIndexName"/>
</main>
```

**appId** và **apiKey** bạn vào trong Dashboard của Algolia và chọn **API keys** để lấy thông tin nhé.

Giờ ta đã có một trang tìm kiếm sử dụng Algolia, Hugo và Vue.js. Bạn có thể [trải nghiệm](/archives/) hoặc có thể chỉnh sửa thêm cho `SearchAlgoliaComponent` theo cách bạn muốn hiển thị nhé.
