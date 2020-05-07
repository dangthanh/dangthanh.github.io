(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{197:function(n,t){n.exports={attributes:{title:"Tìm kiếm với Algolia, Hugo và Vue.js",slug:"tim-kiem-voi-algolia-hugo-va-vue",date:"2018-12-08T03:59:55.000Z",tags:["javascript","hugo","vue"]},html:'<p>Trước đây, muốn tìm kiếm bài viết, tôi thường vào <a href="/tags">danh mục</a> và tìm kiếm các tags như <code>javascript</code>, <code>sass</code>, <code>css</code>...Và với mong muốn tìm kiếm bài viết được tốt hơn nên tôi quyết định thử nghiệm với <a href="https://www.algolia.com/">Algolia</a>, kết hợp một xíu với <a href="/blog/bat-dau-voi-vue/">Vue.js</a>.</p>\n<h3>Tại sao là Algolia?</h3>\n<p>Thực ra đối với những người làm lập trình như tôi, thì lí do đầu tiên là được học thêm một công nghệ mới. Thứ hai là sau khi thử nghiệm Algolia, thời gian kết quả tìm kiếm mà Algolia trả về rất nhanh, làm tôi cũng rất bất ngờ và mong muốn tìm hiểu thêm về Algolia.</p>\n<p>Bên cạnh đó, qua quá trình mới làm quen với Algolia tôi thấy nó có những điểm nổi bật sau:</p>\n<ul>\n<li>Algolia cung cấp gói <a href="https://www.algolia.com/users/sign_up">miễn phí</a> cho bạn sử dụng</li>\n<li>Giao diện quản lý dễ sử dụng cho phép bạn theo dõi, truy vết và giám sát các hoạt động tìm kiếm</li>\n<li>Cung cấp các API Client cho nhiều ngôn ngữ như <code>JavaScript</code>, <code>Node.js</code>, <code>Go</code>, <code>C#</code></li>\n<li>Các thư viện Algolia cung cấp rất hay như <a href="https://github.com/algolia/autocomplete.js">Autocomplete</a>, <a href="https://community.algolia.com/places/">Algolia Places</a></li>\n</ul>\n<h3>Tạo JSON Search Index trong Hugo</h3>\n<p><strong>Algolia</strong> cung cấp tìm kiếm theo chỉ mục với các định dạng file <code>JSON</code>, <code>CSV</code> hoặc <code>TSV</code> hoặc sử dụng <a href="https://www.algolia.com/doc/api-reference/api-methods/">API</a> để thêm thông tin tìm kiếm được đánh chỉ mục.</p>\n<p>Với <strong>Hugo</strong> mình sẽ giới thiệu các bạn cách tạo ra một file <code>JSON</code> và tải tập tin đó lên Algolia.</p>\n<p>Đầu tiên, ta tạo một file <code>json</code> trong <strong>layouts/_default/</strong> hoặc <strong>themes/[tên-theme-của-bạn]/layouts/_default/</strong> với tên là <em><strong>list.algolia.json</strong></em> với cấu trúc như sau.</p>\n<pre class="hljs"><code>{{- $.Scratch.Add <span class="hljs-attr">"index"</span> slice -}}\n{{- $section := $.Site.GetPage <span class="hljs-string">"post"</span> .Section }}\n{{- range .Site.AllPages -}}\n  {{- if or (and (.IsDescendant $section) (and (not .Draft) (not .Params.private))) $section.IsHome -}}\n    {{- $.Scratch.Add <span class="hljs-attr">"index"</span> (dict <span class="hljs-attr">"objectID"</span> .File.UniqueID <span class="hljs-attr">"date"</span> .Date.UTC.Unix <span class="hljs-attr">"description"</span> .Description <span class="hljs-attr">"dir"</span> .File.Dir <span class="hljs-attr">"expirydate"</span> .ExpiryDate.UTC.Unix <span class="hljs-attr">"fuzzywordcount"</span> .FuzzyWordCount <span class="hljs-attr">"keywords"</span> .Keywords <span class="hljs-attr">"kind"</span> .Kind <span class="hljs-attr">"lang"</span> .Lang <span class="hljs-attr">"lastmod"</span> .Lastmod.UTC.Unix <span class="hljs-attr">"permalink"</span> .Permalink <span class="hljs-attr">"publishdate"</span> .PublishDate <span class="hljs-attr">"readingtime"</span> .ReadingTime <span class="hljs-attr">"relpermalink"</span> .RelPermalink <span class="hljs-attr">"summary"</span> .Summary <span class="hljs-attr">"title"</span> .Title <span class="hljs-attr">"type"</span> .Type <span class="hljs-attr">"url"</span> .Permalink <span class="hljs-attr">"weight"</span> .Weight <span class="hljs-attr">"wordcount"</span> .WordCount <span class="hljs-attr">"section"</span> .Section <span class="hljs-attr">"tags"</span> .Params.Tags <span class="hljs-attr">"categories"</span> .Params.Categories <span class="hljs-attr">"authors"</span> .Params.Authors)}}\n  {{- end -}}\n{{- end -}}\n{{- $.Scratch.Get <span class="hljs-attr">"index"</span> | jsonify -}}\n</code></pre>\n<p>Tập tin <code>JSON</code> sẽ mang những thông tin được định nghĩa ở trên như <code>authors</code>, <code>date</code>, <code>title</code>...</p>\n<p>Tập tin sẽ được tạo ra từ những thông tin các bài viết chứa trong thư mục <strong>post</strong>. Bạn có thể thay <strong>post</strong> bằng thư mục bài viết của bạn trong thư mục <strong>content</strong></p>\n<p>Ở đây tôi sử dụng một số <a href="https://gohugo.io/categories/functions">cú pháp về Functions</a> trong Hugo. Bạn có thể tham khảo thêm nhé.</p>\n<p>Tiếp theo ta mở tập tin <strong>config.toml</strong> và thêm một số cấu hình vào:</p>\n<pre class="hljs"><code><span class="hljs-section">[outputFormats.Algolia]</span>\n  baseName = "algolia"\n  isPlainText = true\n  mediaType = "application/json"\n  notAlternative = true\n\n<span class="hljs-section">[params.algolia]</span>\n  vars = <span class="hljs-section">["title", "description", "summary", "date", "lastmod", "permalink"]</span>\n  params = <span class="hljs-section">["categories", "tags"]</span>\n\n<span class="hljs-section">[outputs]</span>\n  home = <span class="hljs-section">["HTML", "RSS", "Algolia"]</span>\n</code></pre>\n<p>Sau đó bạn chạy lệnh</p>\n<pre class="hljs"><code><span class="hljs-meta">$</span><span class="bash"> hugo</span>\n</code></pre>\n<p>Bạn sẽ có một tập tin là <strong>algolia.json</strong> trong thư mục <strong>public</strong></p>\n<h3>Tải tập tin lên Alolia</h3>\n<p>Sau khi có tập tin <strong>algolia.json</strong> và <a href="https://www.algolia.com/users/sign_up">đăng ký</a> xong một tài khoản Algolia. Bạn đăng nhập vào <a href="https://www.algolia.com/dashboard">Algolia Dashboard</a>.</p>\n<ul>\n<li>\n<p>Bạn tạo một App sử dụng Algolia. Ở đây tôi ví dụ app có tên là <em>dangthanhblog</em></p>\n<p><img src="/images/blog/algolia_create_app.png" alt="Tạo app sử dụng Algolia"></p>\n</li>\n<li>\n<p>Ở giao diện Dashboard bạn chọn <strong>Indices</strong> và nhấn vào <strong>Create index</strong> giả sử với tên là <em>posts</em></p>\n<p><img src="/images/blog/algolia_create_index.png" alt="Tạo index trong Algolia"></p>\n<p>Chọn <strong>Manage index</strong> -&gt; <strong>Upload file</strong> chọn tập tin <strong>algolia.json</strong> trong thư mục <strong>public</strong> đã tạo được ở trên.</p>\n</li>\n<li>\n<p>Ngoài cách tải trực tiếp tập tin lên, bạn có thể dùng <a href="https://www.npmjs.com/package/atomic-algolia">atomic-algolia</a> để tải tập tin lên Algolia thông qua NPM scripts hoặc serverless nhé.</p>\n<pre class="hljs"><code><span class="hljs-meta">$</span><span class="bash"> npm install atomic-algolia dotenv --save-dev</span>\n</code></pre>\n<p>Tạo một file <code>.env</code> với các thông số</p>\n<pre class="hljs"><code>ALGOLIA_APP_ID=ALGOLIA_APP_ID\nALGOLIA_ADMIN_KEY=YOUR_ALGOLIA_ADMIN_KEY\nALGOLIA_INDEX_NAME=posts\nALGOLIA_INDEX_FILE=algolia.json\n</code></pre>\n<p>Ở đây tôi giả sử indexName tôi sử dụng là <strong>posts</strong> và tập tin có tên là <strong>algolia.json</strong></p>\n<p>Sử dụng NPM scripts trong <strong>package.json</strong></p>\n<pre class="hljs"><code><span class="hljs-string">"scripts"</span>: {\n  <span class="hljs-attr">"algolia"</span>: <span class="hljs-string">"atomic-algolia"</span>\n}\n</code></pre>\n<p>Chạy lệnh để tải file <code>algolia.json</code> lên Algolia</p>\n<pre class="hljs"><code>$ npm run algolia\n</code></pre>\n</li>\n</ul>\n<h3>Tạo Algolia Component với Vue.js</h3>\n<p>Để hiển thị trên Hugo. tôi tạo ra một trang <code>static templates</code> với tên gọi là <code>archives.md</code> trong thư mục <strong>content</strong> như sau:</p>\n<pre class="hljs"><code>---\ntype: "static"\n<span class="hljs-section">layout: "archives"\n---</span>\n</code></pre>\n<p>Sau đó tạo thêm file HTML có tên là <strong>layouts/static/archives.html</strong> tương ứng với <code>layout</code> được khai báo ở trên.</p>\n<p>Algolia cung cấp một thư viện JavaScript để bạn dễ dàng kết với Algolia thông qua <a href="https://community.algolia.com/instantsearch.js/">Instantsearch.js</a> hoặc <a href="https://v2--vue-instantsearch.netlify.com/getting-started/migration.html">Vue Instantsearch</a>.</p>\n<p>Vì tôi đã <a href="/blog/bat-dau-voi-vue/">giới thiệu Vue.js</a> có một tính năng rất hay đó là Component. Nên tôi quyết định viết Component này sử dụng <a href="https://v2--vue-instantsearch.netlify.com/getting-started/migration.html">Vue InstantSearch</a> vừa giúp bạn biết thêm về cách xây dựng Component trong Vue thông qua thuộc tính <em><strong>props</strong></em>.</p>\n<pre class="hljs"><code>Vue.component(<span class="hljs-string">\'SearchAlgoliaComponent\'</span>, {\n  <span class="hljs-attr">name</span>: <span class="hljs-string">\'SearchAlgoliaComponent\'</span>,\n  <span class="hljs-attr">template</span>: <span class="hljs-string">`\n    &lt;ais-index\n      :app-id="appId"\n      :api-key="apiKey"\n      :index-name="indexName"\n      :routing="true"&gt;\n      &lt;ais-search-box placeholder="Tìm kiếm tiêu đề hoặc nội dung bài viết..."&gt;&lt;/ais-search-box&gt;\n      &lt;ais-highlight :hit="hit" attribute="title"&gt;&lt;/ais-highlight&gt;\n      &lt;ais-results&gt;\n        // Your display results\n      &lt;/ais-results&gt;\n    &lt;/ais-index&gt;\n  `</span>,\n  <span class="hljs-attr">props</span>: {\n    <span class="hljs-attr">appId</span>: {\n      <span class="hljs-attr">type</span>: <span class="hljs-built_in">String</span>,\n      <span class="hljs-attr">require</span>: <span class="hljs-literal">true</span>\n    },\n    <span class="hljs-attr">apiKey</span>: {\n      <span class="hljs-attr">type</span>: <span class="hljs-built_in">String</span>,\n      <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>\n    },\n    <span class="hljs-attr">indexName</span>: {\n      <span class="hljs-attr">type</span>: <span class="hljs-built_in">String</span>,\n      <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>\n    },\n    <span class="hljs-attr">routing</span>: {\n      <span class="hljs-attr">type</span>: <span class="hljs-built_in">Boolean</span>,\n      <span class="hljs-attr">default</span>: <span class="hljs-literal">true</span>\n    }\n  }\n});\n</code></pre>\n<p>Vậy là ta đã có một Component sử dụng Vue cho Algolia. Giờ ta sẽ sử dụng nó trong <strong>layouts/static/archives.html</strong> nhé.</p>\n<pre class="hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">main</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">search-algolia-component</span> \n    <span class="hljs-attr">:appId</span>=<span class="hljs-string">"yourAppId"</span> \n    <span class="hljs-attr">:apiKey</span>=<span class="hljs-string">"yourApiKey"</span> \n    <span class="hljs-attr">:indexName</span>=<span class="hljs-string">"yourIndexName"</span>/&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">main</span>&gt;</span>\n</code></pre>\n<p><strong>appId</strong> và <strong>apiKey</strong> bạn vào trong Dashboard của Algolia và chọn <strong>API keys</strong> để lấy thông tin nhé.</p>\n<p>Giờ ta đã có một trang tìm kiếm sử dụng Algolia, Hugo và Vue.js. Bạn có thể <a href="/archives/">trải nghiệm</a> hoặc có thể chỉnh sửa thêm cho <code>SearchAlgoliaComponent</code> theo cách bạn muốn hiển thị nhé.</p>\n'}}}]);