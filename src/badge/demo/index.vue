<template>
  <div class="demo-badge">
    <demo-block title="基础使用">
      <vux-badge content="5">
        <div class="demo-badge__block"></div>
      </vux-badge>
      <vux-badge content="10">
        <div class="demo-badge__block"></div>
      </vux-badge>
      <vux-badge content="Hot">
        <div class="demo-badge__block"></div>
      </vux-badge>
      <vux-badge dot>
        <div class="demo-badge__block"></div>
      </vux-badge>
    </demo-block>

    <demo-block title="最大值">
      <vux-badge content="20" max="9">
        <div class="demo-badge__block"></div>
      </vux-badge>
      <vux-badge content="50" max="20">
        <div class="demo-badge__block"></div>
      </vux-badge>
      <vux-badge content="200" max="99">
        <div class="demo-badge__block"></div>
      </vux-badge>
    </demo-block>

    <demo-block title="自定义颜色">
      <vux-badge content="5" color="#1989fa">
        <div class="demo-badge__block"></div>
      </vux-badge>
      <vux-badge content="10" color="#1989fa">
        <div class="demo-badge__block"></div>
      </vux-badge>
      <vux-badge dot color="#1989fa">
        <div class="demo-badge__block"></div>
      </vux-badge>
    </demo-block>

    <demo-block title="自定义徽标内容">
      <vux-badge>
        <div class="demo-badge__block"></div>
        <template #content>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
      </vux-badge>
      <vux-badge>
        <div class="demo-badge__block"></div>
        <template #content>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
            />
          </svg>
        </template>
      </vux-badge>
      <vux-badge>
        <div class="demo-badge__block"></div>
        <template #content>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
      </vux-badge>
    </demo-block>

    <demo-block title="独立展示">
      <vux-badge content="20" style="margin-left: 16px" />
      <vux-badge content="200" max="99" style="margin-left: 16px" />
    </demo-block>

    <demo-block title="Show Zero">
      <vux-badge :show-zero="false" content="0">
        <div class="demo-badge__block">false</div>
      </vux-badge>
      <vux-badge content="0">
        <div class="demo-badge__block">true</div>
      </vux-badge>
    </demo-block>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DemoBadge',
})
</script>

<style lang="scss">
@import 'sass-bem/bem';
@import '../../style/var';

@include component('badge', 'demo') {
  height: 100%;
  background-color: #fff;

  @include element('block') {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #f2f3f5;
    border-radius: 4px;
  }

  // 覆盖
  @include component('badge', $vux-prefix) {
    @include element('wrapper') {
      margin-left: 16px;
    }
  }
}
</style>
