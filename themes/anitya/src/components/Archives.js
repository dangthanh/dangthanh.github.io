const Archives = {
  template: `
    <ais-index
      v-bind:class-names="{'ais-index': 'archives'}"
      :app-id="algolia.appId"
      :api-key="algolia.apiKey"
      :index-name="algolia.indexName"
      :routing="algolia.true">
      <ais-search-box
        class="archive-search"
        placeholder="Tìm kiếm tiêu đề hoặc nội dung bài viết...">
      </ais-search-box>
      <ais-results v-bind:class-names="{'ais-results': 'archive-hits'}">
        <template scope="{ result }">
          <div class="archive-hits-item" v-if="result.title != 'Posts'">
            <a v-bind:href="result.permalink">{{result.title}}</a></div>
          </div>
        </template>
      </ais-results>
    </ais-index>
  `,
  data() {
    return {
      algolia: {
        appId: '6PU039291I',
        apiKey: 'eb175854444a3544837eb2b27ccbad0f',
        indexName: 'posts',
        routing: true
      }
    };
  }
};

export default Archives;
