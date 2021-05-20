<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp; Art Director
          focused on digital design for brands that like to have fun.
        </h2>
      </div>
      <div data-v-50cbff3e="" class="projects">
        <div
          data-v-50cbff3e=""
          class="project"
          v-for="item in $page.photography.edges"
          :key="item.node.id"
        >
          <g-link
            data-v-50cbff3e=""
            :to="`/journal/${item.node.id}`"
            class="project-link"
          >
            <img
              data-v-50cbff3e=""
              :alt="item.node.title"
              :src="GRIDSOME_API_URL + item.node.cover.url"
              width="2560"
              class="thumbnail g-image g-image--lazy g-image--loaded"
            />
            <h3 data-v-50cbff3e="" class="project-title">
              {{ item.node.title }}
            </h3>
            <div data-v-50cbff3e="" class="categories">
              <span
                data-v-50cbff3e=""
                class="category"
                v-for="tag in item.node.tags"
                >{{ tag.tag }}</span
              >
            </div>
          </g-link>
        </div>
      </div>
    </div>

    <div data-v-460714ac="">
      <div data-v-460714ac="" class="latest-journals-heading container">
        <span data-v-460714ac="" class="label">Latest and greatest</span>
      </div>
      <div data-v-460714ac="" class="latest-journals">
        <div data-v-460714ac="" class="container">
          <g-link
            data-v-460714ac=""
            v-for="item in $page.greatest.edges"
            :to="`/journal/${item.node.id}`"
            class="journal"
            :key="item.node.id"
          >
            <h3 data-v-460714ac="" class="journal-title">
              {{item.node.title}}
            </h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  photography: allStrapiJournals(filter: { tags: {tag:{ in: ["photography"] }}}){
    edges{
      node{
        id,
        title,
        tags{
          tag
        },
        cover{
          url,
        }
      }
    }
  }
  greatest:allStrapiJournals(limit:4,sortBy:"id",order:ASC){
    edges{
      node{
        id,
        title,
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'HomePage',
  metaInfo: {
    title: 'Hello, Gridsome!'
  }
}
</script>

<style>
</style>
