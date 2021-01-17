<template>
  <layout>
    <div class="container" data-v-78e0b360="" :style="{marginTop:'6rem'}">
      <div class="contact-header" data-v-78e0b360="">
        <h1 class="contact-title" data-v-78e0b360="">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">打招呼！</font>
          </font>
        </h1>
        <p data-v-78e0b360="">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">给我留下您可能遇到的任何问题的说明，我会尽快与您联系。</font>
          </font>
        </p>
      </div>
      <form name="contact" class="contact-form" data-v-78e0b360="" @submit.prevent="submit()">
        <div class="sender-info" data-v-78e0b360="">
          <div data-v-78e0b360=""><label for="name" class="label" data-v-78e0b360="">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">你的名字</font>
              </font>
            </label><input v-model="name" type="text" name="name" data-v-78e0b360=""></div>
          <div data-v-78e0b360=""><label for="email" class="label" data-v-78e0b360="">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">你的邮件</font>
              </font>
            </label><input v-model="email" type="email" name="email" data-v-78e0b360=""></div>
        </div>
        <div class="message" data-v-78e0b360=""><label for="message" class="label" data-v-78e0b360="">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">信息</font>
            </font>
          </label><textarea v-model="message" name="message" data-v-78e0b360=""></textarea></div>
        <button class="submit" data-v-78e0b360="">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">提交表格</font>
          </font>
        </button>
      </form>
    </div>
  </layout>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
const request = axios.create({
  baseURL: process.env.GRIDSOME_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
})
console.log(request)
export default {
  name: 'FeedbackPage',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  metaInfo: {
    title: '反馈'
  },
  methods: {
    async submit () {
      const { data } = await request({
        method: 'POST',
        url: '/feedbacks',
        data: Qs.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
        })
      })
      alert('反馈成功')
    }
  }
}
</script>

<style>
</style>