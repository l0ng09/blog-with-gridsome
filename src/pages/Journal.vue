<template>
  <Layout>
    <div data-v-da896d1e="" class="container">
      <div data-v-da896d1e="" class="journal-hero">
        <h1 data-v-da896d1e="" class="journal-header">
          a wise person once said...
        </h1>
      </div>
    </div>

    <g-link
      data-v-da896d1e=""
      class="journal-post"
      v-for="item in $page.journals.edges"
      :key="item.node.id"
      :to="`/journal/${item.node.id}`"
    >
      <div data-v-da896d1e="" class="container journal">
        <h2 data-v-da896d1e="" class="journal-title">
          {{ item.node.title }}
        </h2>
        <p data-v-da896d1e="" class="journal-excerpt">
          {{ item.node.describe }}
        </p>
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query{
  journals: allStrapiJournals{
    totalCount,
    edges{
			node{
        id,
        title,
        describe,
      }    
  	}
  }
}
</page-query>

<script>
export default {
  name: 'Journal',
}
</script>
<style scoped>
</style>