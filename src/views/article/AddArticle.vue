<template>
<div class="addarticle">
    <el-row type="flex" class="row-bg home">
        <el-col :span="16" :offset="4">
                <md-card>
                    <md-card-actions v-md-ink-ripple>
                    <div class="md-subhead">
                        <span>发布文章</span>
                    </div>
                    </md-card-actions>
                    <md-card-media>
                    <div class="quill-editor-example">
                        <!-- quill-editor -->
                        <quill-editor ref="myTextEditor"
                                    v-model="content"
                                    :options="editorOption"
                                    @blur="onEditorBlur($event)"
                                    @focus="onEditorFocus($event)"
                                    @ready="onEditorReady($event)">
                        </quill-editor>
                        <div class="html ql-editor" v-html="content"></div>
                    </div>
                    </md-card-media>
                </md-card>
        </el-col>
    </el-row>
</div>
</template>
<script>
  export default {
    data() {
      return {
        name: 'base-example',
        content: '<h2>I am Example 1</h2>',
        editorOption: {}
      }
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      }
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      }
    },
    mounted() {
      console.log('this is my editor', this.editor)
      setTimeout(() => {
        this.content = '<h1>Example 1 changed!</h1>'
      }, 1800)
    }
  }
</script>
<style lang="sass">
@import '../../sass/article/addarticle.sass'
</style>