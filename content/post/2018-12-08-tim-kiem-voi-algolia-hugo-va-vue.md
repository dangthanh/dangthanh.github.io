---
title: "Tìm kiếm với Algolia, Hugo và Vue.js"
slug: "tim-kiem-voi-algolia-hugo-va-vue"
date: 2018-12-08T10:59:55+07:00
tags: ["javascript", "hugo", "vue"]
draft: true
---

Trước đây, muốn tìm kiếm bài viết, tui thường vào [danh mục](/tags) và tìm kiếm các tags như `javascript`, `sass`, `css`...

[Algoria](https://www.algolia.com/)

### Tại sao là Algolia?

Thực ra đối với những người làm lập trình như tui, thì lí do đầu tiên là được học thêm một công nghệ mới. Thứ hai là kết quả tìm kiếm Algolia trả về rất nhanh, làm tui cũng rất bất ngờ và mong muốn tìm hiểu thêm về Algolia. 

Bên cạnh đó, qua quá trình mới làm quen với Algolia tui thấy nó có những điểm nổi bật sau:

- Alogolia cung cấp gói [miễn phí](https://www.algolia.com/users/sign_up) cho bạn sử dụng
- Giao diện quản lý dễ sử dụng cho phép bạn theo dõi, truy vết và giám sát các hoạt động tìm kiếm
- Cung cấp các API Client cho nhiều ngôn ngữ như `JavaScript`, `Node.js`, `Go`, `C#`
- Các thư viện Algolia cung cấp rất hay như [Autocomplete](https://github.com/algolia/autocomplete.js), [Algolia Places](https://community.algolia.com/places/)

### Tạo JSON Search Index trong Hugo

Trong **config.toml** ta cấu hình như sau:

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

Tạo một file `json` trong **layouts/_default/** hoặc **themes/[tên-theme-của-bạn]/layouts/_default/** với tên là ***list.algolia.json***

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

Bạn có thể thay **post** bằng thư mục bài viết của bạn trong thư mục **content**

Sau đó bạn chạy lệnh

```shell
$ hugo
```

Bạn sẽ có một tập tin là **algolia.json** trong thư mục **public**

### Tạo Algolia Component với Vue.js

Hôm trước, tui đã [giới thiệu Vue.js](/blog/bat-dau-voi-vue/) có một tính năng rất hay đó là Component.

```javascript
Vue.component('AlgoliaSearchComponent', {
  name: 'AlgoliaSearchComponent'
})
```
