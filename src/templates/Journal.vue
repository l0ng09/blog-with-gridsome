<template>
  <Layout>
    <div data-v-2a0eef53="" class="journal">
      <div data-v-2a0eef53="" class="container journal-container">
        <div data-v-2a0eef53="" class="journal-header">
          <h1 data-v-2a0eef53="" class="journal-title">
            macOS development environment
          </h1>
          <div data-v-2a0eef53="" class="journal-meta">
            <div data-v-2a0eef53="" class="journal-author">
              <span data-v-2a0eef53="" class="label">Author</span>
              <span data-v-2a0eef53="" class="author-name">
                {{ $page.journal.author }}
              </span>
            </div>
            <div data-v-2a0eef53="" class="journal-date">
              <span data-v-2a0eef53="" class="label">Date</span>
              <div data-v-2a0eef53="">18. May 2019</div>
            </div>
            <div data-v-2a0eef53="" class="journal-time">
              <span data-v-2a0eef53="" class="label">Time</span>
              <span data-v-2a0eef53="">1 min read</span>
            </div>
          </div>
        </div>
        <div data-v-2a0eef53="" class="journal-content">
          {{ $page.journal.content }}
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!){
  journal: strapiJournals(id:$id){
    author,
    title,
    describe,
    content,
    created_at,
  }
}
</page-query>

<script>
export default {
  name: 'JournalPage',
  metaInfo() {
    return {
      title: this.$page.journal.title
    }
  }
}
</script>
<style scoped>
</style>