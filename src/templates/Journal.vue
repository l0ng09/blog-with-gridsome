<template>
  <Layout>
    <div data-v-2a0eef53="" class="journal">
      <div data-v-2a0eef53="" class="container journal-container">
        <div data-v-2a0eef53="" class="journal-header">
          <h1 data-v-2a0eef53="" class="journal-title">
              {{ $page.journal.title }}
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
              <div data-v-2a0eef53="">
                {{ $page.journal.created_at | date("DD. MMM YYYY") }}
              </div>
            </div>
            <div data-v-2a0eef53="" class="journal-time">
              <span data-v-2a0eef53="" class="label">Time</span>
              <span data-v-2a0eef53="">{{
                $page.journal.created_at | date("HH:mm")
              }}</span>
            </div>
          </div>
        </div>
        <div
          data-v-2a0eef53=""
          class="journal-content"
          v-html="mdToHtml($page.journal.content.replace('/uploads/', `${GRIDSOME_API_URL}/uploads/`))"
        ></div>
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
import MarkdownIt from 'markdown-it';
export default {
  name: 'JournalPage',
  metaInfo() {
    return {
      title: this.$page.journal.title
    }
  },
  methods: {
    mdToHtml(markdown) {
      const md = new MarkdownIt()
      return md.render(markdown)
    }
  }
}
</script>
<style scoped>
</style>