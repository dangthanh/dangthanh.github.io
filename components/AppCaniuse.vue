<template>
  <div>
    <div class="browsers">
      <h2 class="browser-title">{{ browserTitle }}</h2>
      <div class="browser-categories">
        <span
          class="browser-category"
          v-for="category in browserCategories"
          :key="category"
          >{{ category }}</span
        >
      </div>
      <div class="browser-description" v-if="description != ''">
        {{ description }}
      </div>
      <div class="browser-support">
        <div
          v-for="browser in browsers"
          class="browser-support-item"
          :key="browser.name"
          :class="{ no: browser.version == 0 }"
        >
          <span v-if="browser.name == 'ie'" class="browser-support-logo">
            <icon-browser-ie />
          </span>
          <span
            v-else-if="browser.name == 'chrome'"
            class="browser-support-logo"
          >
            <icon-browser-chrome />
          </span>
          <span
            v-else-if="browser.name == 'firefox'"
            class="browser-support-logo"
          >
            <icon-browser-firefox />
          </span>
          <span
            v-else-if="browser.name == 'safari'"
            class="browser-support-logo"
          >
            <icon-browser-safari />
          </span>
          <span v-if="browser.version > 0" class="browser-support-version">{{
            browser.version | plus
          }}</span>
          <span v-else class="browser-support-version">-</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBrowserChrome from './Icons/IconBrowserChrome.vue';
import IconBrowserFirefox from './Icons/IconBrowserFirefox.vue';
import IconBrowserIe from './Icons/IconBrowserIe.vue';
import IconBrowserSafari from './Icons/IconBrowserSafari.vue';

export default {
  components: {
    IconBrowserChrome,
    IconBrowserFirefox,
    IconBrowserIe,
    IconBrowserSafari
  },
  props: {
    features: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      browserTitle: '',
      browserCategories: [],
      browsers: [
        { name: 'ie', version: 0 },
        { name: 'chrome', version: 0 },
        { name: 'firefox', version: 0 },
        { name: 'safari', version: 0 }
      ],
      description: ''
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) {
        return '';
      }

      value = value.toString();

      if (value.length === 2) {
        return value.toUpperCase();
      }

      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    plus: function(value) {
      if (!value) {
        return '';
      }

      value = value.toString();

      return `${value}+`;
    }
  },
  mounted() {
    const caniuseUrl = `https://raw.githubusercontent.com/Fyrd/caniuse/master/features-json/${
      this.features
    }.json`;

    this.getCaniuse(caniuseUrl);
  },
  methods: {
    getCaniuse(url) {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          const supports = res.stats;

          this.browserTitle = res.title;
          this.browserCategories = res.categories;
          this.description = res.description;

          this.browsers.forEach((browser, i) => {
            const verions = supports[browser.name];
            this.browsers[i].version = this.getVersion(verions);
          });
        });
    },
    getVersion(versions) {
      for (let version in versions) {
        if (
          versions[version].indexOf('y') > -1 ||
          versions[version].indexOf('x') > -1
        ) {
          return version;
        }
      }

      return '-';
    }
  }
};
</script>
